import {
  access
} from "../chunk/U42ECMND.jsx";

// src/create/size.ts
import { createEffect, createSignal, onCleanup } from "solid-js";
var createSize = (props) => {
  const [size, setSize] = createSignal(0);
  createEffect(() => {
    const element = access(props.element);
    if (!element) return;
    syncSize(element);
    const observer = new ResizeObserver(resizeObserverCallback);
    observer.observe(element);
    onCleanup(() => {
      observer.disconnect();
    });
  });
  const resizeObserverCallback = ([entry]) => {
    syncSize(entry.target);
  };
  const syncSize = (element) => {
    switch (access(props.dimension)) {
      case "width":
        setSize(element.offsetWidth);
        break;
      case "height":
        setSize(element.offsetHeight);
        break;
    }
  };
  return size;
};
var size_default = createSize;
export {
  size_default as default
};
