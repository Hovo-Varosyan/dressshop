import {
  access
} from "../chunk/U42ECMND.jsx";

// src/create/floating.ts
import {
  arrow,
  autoPlacement,
  autoUpdate,
  computePosition,
  flip,
  hide,
  inline,
  offset,
  shift,
  size
} from "@floating-ui/dom";
import { createSignal, mergeProps, onCleanup } from "solid-js";
import { createEffect } from "solid-js";
var createFloating = (props) => {
  const defaultedProps = mergeProps(
    {
      enabled: true,
      placement: "bottom",
      strategy: "absolute",
      options: null
    },
    props
  );
  const [floatingState, setFloatingState] = createSignal({
    placement: access(defaultedProps.placement),
    x: 0,
    y: 0,
    width: null,
    height: null,
    maxWidth: null,
    maxHeight: null,
    arrowX: null,
    arrowY: null
  });
  createEffect(() => {
    if (!access(defaultedProps.enabled)) return;
    const reference = access(defaultedProps.reference);
    const floating = access(defaultedProps.floating);
    if (!reference || !floating) return;
    const middleware = [];
    const options = access(defaultedProps.options);
    if (options?.offset !== void 0) {
      middleware.push(offset(options.offset));
    }
    if (options?.shift !== void 0 && options.shift !== false) {
      const shiftOptions = options.shift === true ? void 0 : options.shift;
      middleware.push(shift(shiftOptions));
    }
    const arrowElement = access(defaultedProps.arrow);
    if (arrowElement) {
      middleware.push(
        arrow({
          element: arrowElement,
          padding: options?.arrow
        })
      );
    }
    const flipEnabled = options?.flip !== void 0 && options.flip !== false;
    const flipOptions = typeof options?.flip === "boolean" ? void 0 : options?.flip;
    if (flipEnabled && flipOptions?.fallbackStrategy !== "initialPlacement") {
      middleware.push(flip(flipOptions));
    }
    if (options?.size) {
      middleware.push(
        size({
          apply: ({ availableWidth, availableHeight, ...state }) => {
            const newFloatingState = {};
            if (options.size.matchSize === true) {
              if (state.placement.startsWith("top") || state.placement.startsWith("bottom")) {
                newFloatingState.width = state.rects.reference.width;
              } else {
                newFloatingState.height = state.rects.reference.height;
              }
            }
            if (options.size.fitViewPort === true) {
              if (state.placement.startsWith("top") || state.placement.startsWith("bottom")) {
                newFloatingState.maxHeight = availableHeight;
              } else {
                newFloatingState.maxWidth = availableWidth;
              }
            }
            if (!floatingStatesMatch(floatingState(), newFloatingState)) {
              setFloatingState((state2) => ({ ...state2, ...newFloatingState }));
            }
          },
          ...options.size
        })
      );
    }
    if (flipEnabled && flipOptions?.fallbackStrategy === "bestFit") {
      middleware.push(flip(flipOptions));
    }
    if (!flipEnabled && options?.autoPlacement !== void 0 && options.autoPlacement !== false) {
      const autoPlacementOptions = options.autoPlacement === true ? void 0 : options.autoPlacement;
      middleware.push(autoPlacement(autoPlacementOptions));
    }
    if (options?.hide !== void 0 && options.hide !== false) {
      const hideOptions = options.hide === true ? void 0 : options.hide;
      middleware.push(hide(hideOptions));
    }
    if (options?.inline !== void 0 && options.inline !== false) {
      const inlineOptions = options.inline === true ? void 0 : options.inline;
      middleware.push(inline(inlineOptions));
    }
    const cleanup = autoUpdate(reference, floating, () => {
      computePosition(reference, floating, {
        placement: access(defaultedProps.placement),
        strategy: access(defaultedProps.strategy),
        middleware
      }).then(({ placement, x, y, middlewareData }) => {
        const newFloatingState = {
          placement,
          x,
          y,
          arrowX: middlewareData.arrow?.x ?? null,
          arrowY: middlewareData.arrow?.y ?? null
        };
        if (!floatingStatesMatch(floatingState(), newFloatingState)) {
          setFloatingState((state) => ({ ...state, ...newFloatingState }));
        }
      });
    });
    onCleanup(cleanup);
  });
  return floatingState;
};
var floatingStatesMatch = (a, b) => {
  return (b.placement === void 0 || a.placement === b.placement) && (b.x === void 0 || a.x === b.x) && (b.y === void 0 || a.y === b.y) && (b.width === void 0 || a.width === b.width) && (b.height === void 0 || a.height === b.height) && (b.maxWidth === void 0 || a.maxWidth === b.maxWidth) && (b.maxHeight === void 0 || a.maxHeight === b.maxHeight) && (b.arrowX === void 0 || a.arrowX === b.arrowX) && (b.arrowY === void 0 || a.arrowY === b.arrowY);
};
var floating_default = createFloating;
export {
  floating_default as default
};
