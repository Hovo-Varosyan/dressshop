import { createContext, createSignal, createMemo, onMount, onCleanup, useContext } from 'solid-js';
import { isServer, createComponent } from 'solid-js/web';
import { DateFormatter } from '@internationalized/date';
import { access } from '@kobalte/utils';
import { NumberFormatter } from '@internationalized/number';

// src/i18n/create-collator.ts

// src/i18n/utils.ts
var RTL_SCRIPTS = /* @__PURE__ */ new Set([
  "Avst",
  "Arab",
  "Armi",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]);
var RTL_LANGS = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function isRTL(locale) {
  if (Intl.Locale) {
    const script = new Intl.Locale(locale).maximize().script ?? "";
    return RTL_SCRIPTS.has(script);
  }
  const lang = locale.split("-")[0];
  return RTL_LANGS.has(lang);
}
function getReadingDirection(locale) {
  return isRTL(locale) ? "rtl" : "ltr";
}

// src/i18n/create-default-locale.ts
function getDefaultLocale() {
  let locale = typeof navigator !== "undefined" && // @ts-ignore
  (navigator.language || navigator.userLanguage) || "en-US";
  return {
    locale,
    direction: getReadingDirection(locale)
  };
}
var currentLocale = getDefaultLocale();
var listeners = /* @__PURE__ */ new Set();
function updateLocale() {
  currentLocale = getDefaultLocale();
  for (const listener of listeners) {
    listener(currentLocale);
  }
}
function createDefaultLocale() {
  const defaultSSRLocale = {
    locale: "en-US",
    direction: "ltr"
  };
  const [defaultClientLocale, setDefaultClientLocale] = createSignal(currentLocale);
  const defaultLocale = createMemo(
    () => isServer ? defaultSSRLocale : defaultClientLocale()
  );
  onMount(() => {
    if (listeners.size === 0) {
      window.addEventListener("languagechange", updateLocale);
    }
    listeners.add(setDefaultClientLocale);
    onCleanup(() => {
      listeners.delete(setDefaultClientLocale);
      if (listeners.size === 0) {
        window.removeEventListener("languagechange", updateLocale);
      }
    });
  });
  return {
    locale: () => defaultLocale().locale,
    direction: () => defaultLocale().direction
  };
}

// src/i18n/i18n-provider.tsx
var I18nContext = createContext();
function I18nProvider(props) {
  const defaultLocale = createDefaultLocale();
  const context = {
    locale: () => props.locale ?? defaultLocale.locale(),
    direction: () => props.locale ? getReadingDirection(props.locale) : defaultLocale.direction()
  };
  return createComponent(I18nContext.Provider, {
    value: context,
    get children() {
      return props.children;
    }
  });
}
function useLocale() {
  const defaultLocale = createDefaultLocale();
  const context = useContext(I18nContext);
  return context || defaultLocale;
}

// src/i18n/create-collator.ts
var cache = /* @__PURE__ */ new Map();
function createCollator(options) {
  const { locale } = useLocale();
  const cacheKey = createMemo(() => {
    return locale() + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
  });
  return createMemo(() => {
    const key = cacheKey();
    let collator;
    if (cache.has(key)) {
      collator = cache.get(key);
    }
    if (!collator) {
      collator = new Intl.Collator(locale(), options);
      cache.set(key, collator);
    }
    return collator;
  });
}
function createDateFormatter(options) {
  const { locale } = useLocale();
  return createMemo(() => new DateFormatter(locale(), access(options)));
}

// src/i18n/create-filter.ts
function createFilter(options) {
  const collator = createCollator({
    usage: "search",
    ...options
  });
  const startsWith = (str, substr) => {
    if (substr.length === 0) {
      return true;
    }
    const normalizedStr = str.normalize("NFC");
    const normalizedSubstr = substr.normalize("NFC");
    return collator().compare(
      normalizedStr.slice(0, normalizedSubstr.length),
      normalizedSubstr
    ) === 0;
  };
  const endsWith = (str, substr) => {
    if (substr.length === 0) {
      return true;
    }
    const normalizedStr = str.normalize("NFC");
    const normalizedSubstr = substr.normalize("NFC");
    return collator().compare(
      normalizedStr.slice(-normalizedSubstr.length),
      normalizedSubstr
    ) === 0;
  };
  const contains = (str, substr) => {
    if (substr.length === 0) {
      return true;
    }
    const normalizedStr = str.normalize("NFC");
    const normalizedSubstr = substr.normalize("NFC");
    let scan = 0;
    const sliceLen = substr.length;
    for (; scan + sliceLen <= normalizedStr.length; scan++) {
      const slice = normalizedStr.slice(scan, scan + sliceLen);
      if (collator().compare(normalizedSubstr, slice) === 0) {
        return true;
      }
    }
    return false;
  };
  return {
    startsWith,
    endsWith,
    contains
  };
}
function createNumberFormatter(options) {
  const { locale } = useLocale();
  return createMemo(() => new NumberFormatter(locale(), access(options)));
}

export { I18nProvider, RTL_LANGS, createCollator, createDateFormatter, createDefaultLocale, createFilter, createNumberFormatter, getDefaultLocale, getReadingDirection, isRTL, useLocale };
