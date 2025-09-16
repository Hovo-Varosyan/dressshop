// src/color-mode/color-mode-context.tsx
import { createContext, createMemo, useContext } from "solid-js";
var ColorModeContext = createContext();
function useColorMode() {
  const context = useContext(ColorModeContext);
  if (context === void 0) {
    throw new Error(
      "[kobalte]: `useColorMode` must be used within a `ColorModeProvider`"
    );
  }
  return context;
}
function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return createMemo(() => colorMode() === "dark" ? dark : light);
}

// src/color-mode/color-mode-provider.tsx
import { createEffect, createSignal, onCleanup } from "solid-js";

// src/color-mode/storage-manager.ts
import { isServer } from "solid-js/web";
var COLOR_MODE_STORAGE_KEY = "kb-color-mode";
function createLocalStorageManager(key) {
  return {
    ssr: false,
    type: "localStorage",
    get: (fallback) => {
      if (isServer) {
        return fallback;
      }
      let value;
      try {
        value = localStorage.getItem(key);
      } catch (_) {
      }
      return value ?? fallback;
    },
    set: (value) => {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
      }
    }
  };
}
var localStorageManager = createLocalStorageManager(
  COLOR_MODE_STORAGE_KEY
);
function parseCookie(cookie, key) {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  return match?.[2];
}
function createCookieStorageManager(key, cookie) {
  return {
    ssr: !!cookie,
    type: "cookie",
    get: (fallback) => {
      if (cookie) {
        return parseCookie(cookie, key) ?? fallback;
      }
      if (isServer) {
        return fallback;
      }
      return parseCookie(document.cookie, key) ?? fallback;
    },
    set: (value) => {
      document.cookie = `${key}=${value}; max-age=31536000; path=/`;
    }
  };
}
var cookieStorageManager = createCookieStorageManager(
  COLOR_MODE_STORAGE_KEY
);
function cookieStorageManagerSSR(cookie) {
  return createCookieStorageManager(COLOR_MODE_STORAGE_KEY, cookie);
}

// src/color-mode/utils.ts
import { isServer as isServer2 } from "solid-js/web";
var FALLBACK_COLOR_MODE_VALUE = "system";
function query() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function preventTransition() {
  const css = document.createElement("style");
  css.appendChild(
    document.createTextNode(
      "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
    )
  );
  document.head.appendChild(css);
  return () => {
    (() => window.getComputedStyle(document.body))();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(css);
      });
    });
  };
}
function setColorModeDataset(value, shouldPreventTransition = true) {
  const cleanup = shouldPreventTransition ? preventTransition() : void 0;
  document.documentElement.dataset.kbTheme = value;
  document.documentElement.style.colorScheme = value;
  cleanup?.();
}
function getSystemColorMode(fallback) {
  const isDark = query().matches ?? fallback === "dark";
  return isDark ? "dark" : "light";
}
function getInitialColorMode(manager) {
  const fallback = "light";
  const initialColorMode = manager.get(fallback) ?? fallback;
  if (initialColorMode === "system") {
    return isServer2 ? fallback : getSystemColorMode();
  }
  return initialColorMode;
}
function addColorModeListener(fn) {
  const mql = query();
  const listener = (e) => {
    fn(e.matches ? "dark" : "light");
  };
  mql.addEventListener("change", listener);
  return () => {
    mql.removeEventListener("change", listener);
  };
}

// src/color-mode/color-mode-provider.tsx
function ColorModeProvider(props) {
  const fallbackColorMode = () => props.initialColorMode ?? FALLBACK_COLOR_MODE_VALUE;
  const colorModeManager = () => props.storageManager ?? localStorageManager;
  let colorModeListenerCleanupFn;
  const [colorMode, rawSetColorMode] = createSignal(
    getInitialColorMode(colorModeManager())
  );
  const applyColorMode = (value) => {
    rawSetColorMode(value);
    setColorModeDataset(value, props.disableTransitionOnChange);
  };
  const setColorMode = (value) => {
    if (colorModeListenerCleanupFn) {
      colorModeListenerCleanupFn();
      colorModeListenerCleanupFn = void 0;
    }
    const isSystem = value === "system";
    if (isSystem) {
      colorModeListenerCleanupFn = addColorModeListener(applyColorMode);
    }
    applyColorMode(isSystem ? getSystemColorMode() : value);
    colorModeManager().set(value);
  };
  const toggleColorMode = () => {
    setColorMode(colorMode() === "dark" ? "light" : "dark");
  };
  createEffect(() => {
    setColorMode(colorModeManager().get() ?? fallbackColorMode());
  });
  onCleanup(() => {
    colorModeListenerCleanupFn?.();
  });
  const context = {
    colorMode,
    setColorMode,
    toggleColorMode
  };
  return <ColorModeContext.Provider value={context}>{props.children}</ColorModeContext.Provider>;
}

// src/color-mode/color-mode-script.tsx
import { createMemo as createMemo2, mergeProps } from "solid-js";
var VALID_VALUES = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function normalize(initialColorMode) {
  if (!VALID_VALUES.has(initialColorMode)) {
    return FALLBACK_COLOR_MODE_VALUE;
  }
  return initialColorMode;
}
function ColorModeScript(props) {
  const mergedProps = mergeProps(
    {
      initialColorMode: FALLBACK_COLOR_MODE_VALUE,
      storageType: "localStorage",
      storageKey: COLOR_MODE_STORAGE_KEY
    },
    props
  );
  const scriptSrc = createMemo2(() => {
    const init = normalize(mergedProps.initialColorMode);
    const cookieScript = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,s=e==="dark";return d.style.colorScheme=e,d.dataset.kbTheme=e,o},u=a,h="${init}",r="${mergedProps.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`;
    const localStorageScript = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,i=r==="dark";return o.style.colorScheme=r,o.dataset.kbTheme=r,c},n=a,m="${init}",e="${mergedProps.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    const fn = mergedProps.storageType === "cookie" ? cookieScript : localStorageScript;
    return `!${fn}`.trim();
  });
  return <script
    id="kb-color-mode-script"
    nonce={mergedProps.nonce}
    innerHTML={scriptSrc()}
  />;
}

export {
  ColorModeContext,
  useColorMode,
  useColorModeValue,
  COLOR_MODE_STORAGE_KEY,
  createLocalStorageManager,
  localStorageManager,
  createCookieStorageManager,
  cookieStorageManager,
  cookieStorageManagerSSR,
  ColorModeProvider,
  ColorModeScript
};
