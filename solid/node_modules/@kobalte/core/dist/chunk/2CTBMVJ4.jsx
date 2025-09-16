import {
  useLocale
} from "./LR7LBJN3.jsx";
import {
  Polymorphic
} from "./FLVHQV4A.jsx";

// src/popper/popper-arrow.tsx
import { getWindow, mergeDefaultProps, mergeRefs } from "@kobalte/utils";
import {
  createEffect,
  createSignal,
  splitProps
} from "solid-js";
import { combineStyle } from "@solid-primitives/props";

// src/popper/popper-context.tsx
import { createContext, useContext } from "solid-js";
var PopperContext = createContext();
function usePopperContext() {
  const context = useContext(PopperContext);
  if (context === void 0) {
    throw new Error(
      "[kobalte]: `usePopperContext` must be used within a `Popper` component"
    );
  }
  return context;
}

// src/popper/popper-arrow.tsx
var DEFAULT_SIZE = 30;
var HALF_DEFAULT_SIZE = DEFAULT_SIZE / 2;
var ROTATION_DEG = {
  top: 180,
  right: -90,
  bottom: 0,
  left: 90
};
var ARROW_PATH = "M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z";
function PopperArrow(props) {
  const context = usePopperContext();
  const mergedProps = mergeDefaultProps(
    {
      size: DEFAULT_SIZE
    },
    props
  );
  const [local, others] = splitProps(mergedProps, ["ref", "style", "size"]);
  const dir = () => context.currentPlacement().split("-")[0];
  const contentStyle = createComputedStyle(context.contentRef);
  const fill = () => contentStyle()?.getPropertyValue("background-color") || "none";
  const stroke = () => contentStyle()?.getPropertyValue(`border-${dir()}-color`) || "none";
  const borderWidth = () => contentStyle()?.getPropertyValue(`border-${dir()}-width`) || "0px";
  const strokeWidth = () => {
    return Number.parseInt(borderWidth()) * 2 * (DEFAULT_SIZE / local.size);
  };
  const rotate = () => {
    return `rotate(${ROTATION_DEG[dir()]} ${HALF_DEFAULT_SIZE} ${HALF_DEFAULT_SIZE}) translate(0 2)`;
  };
  return <Polymorphic
    as="div"
    ref={mergeRefs(context.setArrowRef, local.ref)}
    aria-hidden="true"
    style={combineStyle(
      {
        // server side rendering
        position: "absolute",
        "font-size": `${local.size}px`,
        width: "1em",
        height: "1em",
        "pointer-events": "none",
        fill: fill(),
        stroke: stroke(),
        "stroke-width": strokeWidth()
      },
      local.style
    )}
    {...others}
  >
    {
      /* biome-ignore lint/a11y/noSvgWithoutTitle: aria hidden */
    }
    <svg
      display="block"
      viewBox={`0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`}
      style="transform:scale(1.02)"
    ><g transform={rotate()}>
      <path fill="none" d={ARROW_PATH} />
      <path stroke="none" d={ARROW_PATH} />
    </g></svg>
  </Polymorphic>;
}
function createComputedStyle(element) {
  const [style, setStyle] = createSignal();
  createEffect(() => {
    const el = element();
    el && setStyle(getWindow(el).getComputedStyle(el));
  });
  return style;
}

// src/popper/popper-positioner.tsx
import { mergeRefs as mergeRefs2 } from "@kobalte/utils";
import { splitProps as splitProps2 } from "solid-js";
import { combineStyle as combineStyle2 } from "@solid-primitives/props";
function PopperPositioner(props) {
  const context = usePopperContext();
  const [local, others] = splitProps2(props, [
    "ref",
    "style"
  ]);
  return <Polymorphic
    as="div"
    ref={mergeRefs2(context.setPositionerRef, local.ref)}
    data-popper-positioner=""
    style={combineStyle2(
      {
        position: "absolute",
        top: 0,
        left: 0,
        "min-width": "max-content"
      },
      local.style
    )}
    {...others}
  />;
}

// src/popper/popper-root.tsx
import {
  arrow,
  autoUpdate,
  computePosition,
  flip,
  hide,
  offset,
  platform,
  shift,
  size
} from "@floating-ui/dom";
import { mergeDefaultProps as mergeDefaultProps2 } from "@kobalte/utils";
import {
  createEffect as createEffect2,
  createSignal as createSignal2,
  onCleanup
} from "solid-js";

// src/popper/utils.ts
function createDOMRect(anchorRect) {
  const { x = 0, y = 0, width = 0, height = 0 } = anchorRect ?? {};
  if (typeof DOMRect === "function") {
    return new DOMRect(x, y, width, height);
  }
  const rect = {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x
  };
  return { ...rect, toJSON: () => rect };
}
function getAnchorElement(anchor, getAnchorRect) {
  const contextElement = anchor;
  return {
    contextElement,
    getBoundingClientRect: () => {
      const anchorRect = getAnchorRect(anchor);
      if (anchorRect) {
        return createDOMRect(anchorRect);
      }
      if (anchor) {
        return anchor.getBoundingClientRect();
      }
      return createDOMRect();
    }
  };
}
function isValidPlacement(flip2) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(flip2);
}
var REVERSE_BASE_PLACEMENT = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
function getTransformOrigin(placement, readingDirection) {
  const [basePlacement, alignment] = placement.split("-");
  const reversePlacement = REVERSE_BASE_PLACEMENT[basePlacement];
  if (!alignment) {
    return `${reversePlacement} center`;
  }
  if (basePlacement === "left" || basePlacement === "right") {
    return `${reversePlacement} ${alignment === "start" ? "top" : "bottom"}`;
  }
  if (alignment === "start") {
    return `${reversePlacement} ${readingDirection === "rtl" ? "right" : "left"}`;
  }
  return `${reversePlacement} ${readingDirection === "rtl" ? "left" : "right"}`;
}

// src/popper/popper-root.tsx
function PopperRoot(props) {
  const mergedProps = mergeDefaultProps2(
    {
      getAnchorRect: (anchor) => anchor?.getBoundingClientRect(),
      placement: "bottom",
      gutter: 0,
      shift: 0,
      flip: true,
      slide: true,
      overlap: false,
      sameWidth: false,
      fitViewport: false,
      hideWhenDetached: false,
      detachedPadding: 0,
      arrowPadding: 4,
      overflowPadding: 8
    },
    props
  );
  const [positionerRef, setPositionerRef] = createSignal2();
  const [arrowRef, setArrowRef] = createSignal2();
  const [currentPlacement, setCurrentPlacement] = createSignal2(
    mergedProps.placement
  );
  const anchorRef = () => getAnchorElement(mergedProps.anchorRef?.(), mergedProps.getAnchorRect);
  const { direction } = useLocale();
  async function updatePosition() {
    const referenceEl = anchorRef();
    const floatingEl = positionerRef();
    const arrowEl = arrowRef();
    if (!referenceEl || !floatingEl) {
      return;
    }
    const arrowOffset = (arrowEl?.clientHeight || 0) / 2;
    const finalGutter = typeof mergedProps.gutter === "number" ? mergedProps.gutter + arrowOffset : mergedProps.gutter ?? arrowOffset;
    floatingEl.style.setProperty(
      "--kb-popper-content-overflow-padding",
      `${mergedProps.overflowPadding}px`
    );
    referenceEl.getBoundingClientRect();
    const middleware = [
      // https://floating-ui.com/docs/offset
      offset(({ placement }) => {
        const hasAlignment = !!placement.split("-")[1];
        return {
          mainAxis: finalGutter,
          crossAxis: !hasAlignment ? mergedProps.shift : void 0,
          alignmentAxis: mergedProps.shift
        };
      })
    ];
    if (mergedProps.flip !== false) {
      const fallbackPlacements = typeof mergedProps.flip === "string" ? mergedProps.flip.split(" ") : void 0;
      if (fallbackPlacements !== void 0 && !fallbackPlacements.every(isValidPlacement)) {
        throw new Error("`flip` expects a spaced-delimited list of placements");
      }
      middleware.push(
        flip({
          padding: mergedProps.overflowPadding,
          fallbackPlacements
        })
      );
    }
    if (mergedProps.slide || mergedProps.overlap) {
      middleware.push(
        shift({
          mainAxis: mergedProps.slide,
          crossAxis: mergedProps.overlap,
          padding: mergedProps.overflowPadding
        })
      );
    }
    middleware.push(
      size({
        padding: mergedProps.overflowPadding,
        apply({ availableWidth, availableHeight, rects }) {
          const referenceWidth = Math.round(rects.reference.width);
          availableWidth = Math.floor(availableWidth);
          availableHeight = Math.floor(availableHeight);
          floatingEl.style.setProperty(
            "--kb-popper-anchor-width",
            `${referenceWidth}px`
          );
          floatingEl.style.setProperty(
            "--kb-popper-content-available-width",
            `${availableWidth}px`
          );
          floatingEl.style.setProperty(
            "--kb-popper-content-available-height",
            `${availableHeight}px`
          );
          if (mergedProps.sameWidth) {
            floatingEl.style.width = `${referenceWidth}px`;
          }
          if (mergedProps.fitViewport) {
            floatingEl.style.maxWidth = `${availableWidth}px`;
            floatingEl.style.maxHeight = `${availableHeight}px`;
          }
        }
      })
    );
    if (mergedProps.hideWhenDetached) {
      middleware.push(hide({ padding: mergedProps.detachedPadding }));
    }
    if (arrowEl) {
      middleware.push(
        arrow({ element: arrowEl, padding: mergedProps.arrowPadding })
      );
    }
    const pos = await computePosition(referenceEl, floatingEl, {
      placement: mergedProps.placement,
      strategy: "absolute",
      middleware,
      platform: {
        ...platform,
        isRTL: () => direction() === "rtl"
      }
    });
    setCurrentPlacement(pos.placement);
    mergedProps.onCurrentPlacementChange?.(pos.placement);
    if (!floatingEl) {
      return;
    }
    floatingEl.style.setProperty(
      "--kb-popper-content-transform-origin",
      getTransformOrigin(pos.placement, direction())
    );
    const x = Math.round(pos.x);
    const y = Math.round(pos.y);
    let visibility;
    if (mergedProps.hideWhenDetached) {
      visibility = pos.middlewareData.hide?.referenceHidden ? "hidden" : "visible";
    }
    Object.assign(floatingEl.style, {
      top: "0",
      left: "0",
      transform: `translate3d(${x}px, ${y}px, 0)`,
      visibility
    });
    if (arrowEl && pos.middlewareData.arrow) {
      const { x: arrowX, y: arrowY } = pos.middlewareData.arrow;
      const dir = pos.placement.split("-")[0];
      Object.assign(arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : "",
        top: arrowY != null ? `${arrowY}px` : "",
        [dir]: "100%"
      });
    }
  }
  createEffect2(() => {
    const referenceEl = anchorRef();
    const floatingEl = positionerRef();
    if (!referenceEl || !floatingEl) {
      return;
    }
    const cleanupAutoUpdate = autoUpdate(
      referenceEl,
      floatingEl,
      updatePosition,
      {
        // JSDOM doesn't support ResizeObserver
        elementResize: typeof ResizeObserver === "function"
      }
    );
    onCleanup(cleanupAutoUpdate);
  });
  createEffect2(() => {
    const positioner = positionerRef();
    const content = mergedProps.contentRef?.();
    if (!positioner || !content) {
      return;
    }
    queueMicrotask(() => {
      positioner.style.zIndex = getComputedStyle(content).zIndex;
    });
  });
  const context = {
    currentPlacement,
    contentRef: () => mergedProps.contentRef?.(),
    setPositionerRef,
    setArrowRef
  };
  return <PopperContext.Provider value={context}>{mergedProps.children}</PopperContext.Provider>;
}

// src/popper/index.tsx
var Popper = Object.assign(PopperRoot, {
  Arrow: PopperArrow,
  Context: PopperContext,
  usePopperContext,
  Positioner: PopperPositioner
});

export {
  PopperContext,
  usePopperContext,
  PopperArrow,
  PopperPositioner,
  PopperRoot,
  Popper
};
