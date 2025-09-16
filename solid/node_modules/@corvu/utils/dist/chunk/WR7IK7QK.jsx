import {
  access
} from "./U42ECMND.jsx";

// src/floating/lib.ts
import { createMemo } from "solid-js";
var getFloatingStyle = (props) => {
  const memoizedFloatingStyle = createMemo(() => {
    const strategy = access(props.strategy);
    const floatingState = access(props.floatingState);
    const side = floatingState.placement.split("-")[0];
    const alignment = floatingState.placement.split("-")[1];
    let transformOrigin;
    switch (floatingState.placement) {
      case "top":
      case "bottom":
        transformOrigin = `${alignment ? alignment : "center"} ${PositionToDirection[side]}`;
      case "left":
      case "right":
        transformOrigin = `${PositionToDirection[side]} ${alignment ? alignment : "center"}`;
    }
    return {
      position: strategy,
      top: `${floatingState.y}px`,
      left: `${floatingState.x}px`,
      width: floatingState.width !== null ? `${floatingState.width}px` : void 0,
      height: floatingState.height !== null ? `${floatingState.height}px` : void 0,
      "max-width": floatingState.maxWidth !== null ? `${floatingState.maxWidth}px` : void 0,
      "max-height": floatingState.maxHeight !== null ? `${floatingState.maxHeight}px` : void 0,
      "--corvu-floating-transform-origin": transformOrigin
    };
  });
  return memoizedFloatingStyle;
};
var PositionToDirection = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};

export {
  getFloatingStyle,
  PositionToDirection
};
