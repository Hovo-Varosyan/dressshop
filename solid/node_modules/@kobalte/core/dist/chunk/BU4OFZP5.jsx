import {
  Polymorphic
} from "./FLVHQV4A.jsx";
import {
  __export
} from "./5WXHJDCZ.jsx";

// src/image/index.tsx
var image_exports = {};
__export(image_exports, {
  Fallback: () => ImageFallback,
  Image: () => Image,
  Img: () => ImageImg,
  Root: () => ImageRoot,
  useImageContext: () => useImageContext
});

// src/image/image-fallback.tsx
import {
  Show,
  createEffect,
  createSignal,
  onCleanup
} from "solid-js";

// src/image/image-context.tsx
import { createContext, useContext } from "solid-js";
var ImageContext = createContext();
function useImageContext() {
  const context = useContext(ImageContext);
  if (context === void 0) {
    throw new Error(
      "[kobalte]: `useImageContext` must be used within an `Image.Root` component"
    );
  }
  return context;
}

// src/image/image-fallback.tsx
function ImageFallback(props) {
  const context = useImageContext();
  const [canRender, setCanRender] = createSignal(
    context.fallbackDelay() === void 0
  );
  createEffect(() => {
    const delayMs = context.fallbackDelay();
    if (delayMs !== void 0) {
      const timerId = window.setTimeout(() => setCanRender(true), delayMs);
      onCleanup(() => window.clearTimeout(timerId));
    }
  });
  return <Show when={canRender() && context.imageLoadingStatus() !== "loaded"}><Polymorphic
    as="span"
    {...props}
  /></Show>;
}

// src/image/image-img.tsx
import {
  Show as Show2,
  createEffect as createEffect2,
  createSignal as createSignal2,
  on,
  onCleanup as onCleanup2
} from "solid-js";
function ImageImg(props) {
  const context = useImageContext();
  const [loadingStatus, setLoadingStatus] = createSignal2("idle");
  createEffect2(
    on(
      () => props.src,
      (src) => {
        if (!src) {
          setLoadingStatus("error");
          return;
        }
        let isMounted = true;
        const image = new window.Image();
        const updateStatus = (status) => () => {
          if (!isMounted) {
            return;
          }
          setLoadingStatus(status);
        };
        setLoadingStatus("loading");
        if (props.crossOrigin !== void 0) {
          image.crossOrigin = props.crossOrigin;
        }
        if (props.referrerPolicy !== void 0) {
          image.referrerPolicy = props.referrerPolicy;
        }
        image.onload = updateStatus("loaded");
        image.onerror = updateStatus("error");
        image.src = src;
        onCleanup2(() => {
          isMounted = false;
        });
      }
    )
  );
  createEffect2(() => {
    const imageLoadingStatus = loadingStatus();
    if (imageLoadingStatus !== "idle") {
      context.onImageLoadingStatusChange(imageLoadingStatus);
    }
  });
  return <Show2 when={loadingStatus() === "loaded"}><Polymorphic
    as="img"
    {...props}
  /></Show2>;
}

// src/image/image-root.tsx
import { createSignal as createSignal3, splitProps } from "solid-js";
function ImageRoot(props) {
  const [local, others] = splitProps(props, [
    "fallbackDelay",
    "onLoadingStatusChange"
  ]);
  const [imageLoadingStatus, setImageLoadingStatus] = createSignal3("idle");
  const context = {
    fallbackDelay: () => local.fallbackDelay,
    imageLoadingStatus,
    onImageLoadingStatusChange: (status) => {
      setImageLoadingStatus(status);
      local.onLoadingStatusChange?.(status);
    }
  };
  return <ImageContext.Provider value={context}><Polymorphic as="span" {...others} /></ImageContext.Provider>;
}

// src/image/index.tsx
var Image = Object.assign(ImageRoot, {
  Fallback: ImageFallback,
  Img: ImageImg
});

export {
  useImageContext,
  ImageFallback,
  ImageImg,
  ImageRoot,
  Image,
  image_exports
};
