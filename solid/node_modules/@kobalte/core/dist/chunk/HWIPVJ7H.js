import { Polymorphic } from './6Y7B2NEO.js';
import { __export } from './5ZKAE4VZ.js';
import { createComponent, memo, mergeProps } from 'solid-js/web';
import { createContext, useContext, createSignal, createEffect, onCleanup, Show, on, splitProps } from 'solid-js';

// src/image/index.tsx
var image_exports = {};
__export(image_exports, {
  Fallback: () => ImageFallback,
  Image: () => Image,
  Img: () => ImageImg,
  Root: () => ImageRoot,
  useImageContext: () => useImageContext
});
var ImageContext = createContext();
function useImageContext() {
  const context = useContext(ImageContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useImageContext` must be used within an `Image.Root` component");
  }
  return context;
}

// src/image/image-fallback.tsx
function ImageFallback(props) {
  const context = useImageContext();
  const [canRender, setCanRender] = createSignal(context.fallbackDelay() === void 0);
  createEffect(() => {
    const delayMs = context.fallbackDelay();
    if (delayMs !== void 0) {
      const timerId = window.setTimeout(() => setCanRender(true), delayMs);
      onCleanup(() => window.clearTimeout(timerId));
    }
  });
  return createComponent(Show, {
    get when() {
      return memo(() => !!canRender())() && context.imageLoadingStatus() !== "loaded";
    },
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "span"
      }, props));
    }
  });
}
function ImageImg(props) {
  const context = useImageContext();
  const [loadingStatus, setLoadingStatus] = createSignal("idle");
  createEffect(on(() => props.src, (src) => {
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
    onCleanup(() => {
      isMounted = false;
    });
  }));
  createEffect(() => {
    const imageLoadingStatus = loadingStatus();
    if (imageLoadingStatus !== "idle") {
      context.onImageLoadingStatusChange(imageLoadingStatus);
    }
  });
  return createComponent(Show, {
    get when() {
      return loadingStatus() === "loaded";
    },
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "img"
      }, props));
    }
  });
}
function ImageRoot(props) {
  const [local, others] = splitProps(props, ["fallbackDelay", "onLoadingStatusChange"]);
  const [imageLoadingStatus, setImageLoadingStatus] = createSignal("idle");
  const context = {
    fallbackDelay: () => local.fallbackDelay,
    imageLoadingStatus,
    onImageLoadingStatusChange: (status) => {
      setImageLoadingStatus(status);
      local.onLoadingStatusChange?.(status);
    }
  };
  return createComponent(ImageContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "span"
      }, others));
    }
  });
}

// src/image/index.tsx
var Image = Object.assign(ImageRoot, {
  Fallback: ImageFallback,
  Img: ImageImg
});

export { Image, ImageFallback, ImageImg, ImageRoot, image_exports, useImageContext };
