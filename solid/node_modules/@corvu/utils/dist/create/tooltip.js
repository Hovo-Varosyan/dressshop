import { afterPaint } from '../chunk/SEUPK2SH.js';
import { access } from '../chunk/ZV6G25TT.js';
import { createEffect, onCleanup, untrack } from 'solid-js';

var tooltipGroups = /* @__PURE__ */ new Map();
var registerTooltip = (group, id, close) => {
  if (!tooltipGroups.has(group)) {
    tooltipGroups.set(group, {
      skipDelay: false,
      skipDelayTimeout: null,
      tooltips: []
    });
  }
  tooltipGroups.get(group).tooltips.push({ id, close });
};
var unregisterTooltip = (group, id) => {
  const tooltipGroup = tooltipGroups.get(group);
  if (!tooltipGroup) return;
  const index = tooltipGroup.tooltips.findIndex((tooltip) => tooltip.id === id);
  if (index !== -1) {
    tooltipGroup.tooltips.splice(index, 1);
  }
};
var closeTooltipGroup = (group, id) => {
  const tooltipGroup = tooltipGroups.get(group);
  if (!tooltipGroup) return;
  tooltipGroup.tooltips.forEach((tooltip) => {
    if (tooltip.id !== id) {
      tooltip.close();
    }
  });
};
var createTooltip = (props) => {
  let tooltipState = null;
  let clickedTrigger = false;
  let timeout = null;
  let insideSafeArea = false;
  let localSkipDelay = false;
  let localSkipDelayTimeout = null;
  const getSkipDelay = () => {
    const group = access(props.group);
    if (group === null) return localSkipDelay;
    return tooltipGroups.get(group).skipDelay;
  };
  const setSkipDelay = (value) => {
    const group = access(props.group);
    if (group === null) return localSkipDelay = value;
    tooltipGroups.get(group).skipDelay = value;
  };
  const setSkipDelayTimeout = (value) => {
    const group = access(props.group);
    if (group === null) return localSkipDelayTimeout = value;
    tooltipGroups.get(group).skipDelayTimeout = value;
  };
  const getSkipDelayTimeout = () => {
    const group = access(props.group);
    if (group === null) return localSkipDelayTimeout;
    return tooltipGroups.get(group).skipDelayTimeout;
  };
  createEffect(() => {
    const group = access(props.group);
    const id = access(props.id);
    if (group === null) return;
    registerTooltip(group, id, () => {
      tooltipState = null;
      props.close();
    });
    onCleanup(() => {
      unregisterTooltip(group, id);
    });
  });
  createEffect(() => {
    if (!props.open()) return;
    untrack(() => {
      const group = access(props.group);
      if (group === null) return;
      closeTooltipGroup(group, access(props.id));
    });
  });
  createEffect(() => {
    if (!access(props.openOnHover)) return;
    const trigger = access(props.trigger);
    if (!trigger) return;
    const onPointerEnter = (event) => afterPaint(() => openTooltip("hover", event));
    const onPointerDown = (event) => {
      clickedTrigger = true;
      closeTooltip("click", event);
    };
    const onPointerLeave = (event) => {
      if (tooltipState === "hover") return;
      closeTooltip("leave", event);
    };
    trigger.addEventListener("pointerenter", onPointerEnter);
    trigger.addEventListener("pointerdown", onPointerDown);
    trigger.addEventListener("pointerleave", onPointerLeave);
    onCleanup(() => {
      trigger.removeEventListener("pointerenter", onPointerEnter);
      trigger.removeEventListener("pointerdown", onPointerDown);
      trigger.removeEventListener("pointerleave", onPointerLeave);
    });
  });
  createEffect(() => {
    if (!access(props.openOnFocus)) return;
    const trigger = access(props.trigger);
    if (!trigger) return;
    const onFocus = (event) => openTooltip("focus", event);
    const onBlur = (event) => closeTooltip("blur", event);
    trigger.addEventListener("focus", onFocus);
    trigger.addEventListener("blur", onBlur);
    onCleanup(() => {
      trigger.removeEventListener("focus", onFocus);
      trigger.removeEventListener("blur", onBlur);
    });
  });
  createEffect(() => {
    if (!access(props.hoverableContent)) return;
    const content = access(props.content);
    if (!content) return;
    const onPointerDown = (event) => {
      if (event.pointerType === "touch") return;
      if (tooltipState !== "focus") return;
      tooltipState = "hover";
    };
    content.addEventListener("pointerdown", onPointerDown);
    onCleanup(() => {
      content.removeEventListener("pointerdown", onPointerDown);
    });
  });
  const openTooltip = (reason, event) => {
    resetTimeout();
    switch (reason) {
      case "focus":
        if (clickedTrigger) return;
        tooltipState = "focus";
        props.onFocus?.(event);
        if (access(props.closeOnScroll)) {
          document.addEventListener("scroll", onScroll, { capture: true });
        }
        document.addEventListener("pointermove", onSafeAreaMove);
        break;
      case "hover":
        const pointerEvent = event;
        if (pointerEvent.pointerType === "touch") return;
        if (tooltipState === "focus" || tooltipState === "hover") return;
        const openDelay = access(props.openDelay);
        if (openDelay <= 0 || getSkipDelay()) {
          tooltipState = "hover";
          props.onHover?.(pointerEvent);
          insideSafeArea = true;
          if (access(props.closeOnScroll)) {
            document.addEventListener("scroll", onScroll, { capture: true });
          }
          document.addEventListener("pointermove", onSafeAreaMove);
        } else {
          tooltipState = "entering";
          document.addEventListener("pointermove", onSafeAreaMove);
          timeout = setTimeout(() => {
            if (!insideSafeArea) {
              tooltipState = null;
              return;
            }
            timeout = null;
            tooltipState = "hover";
            props.onHover?.(pointerEvent);
            insideSafeArea = true;
            if (access(props.closeOnScroll)) {
              document.addEventListener("scroll", onScroll, { capture: true });
            }
          }, openDelay);
        }
        break;
    }
  };
  const closeTooltip = (reason, event) => {
    resetTimeout();
    switch (reason) {
      case "blur":
        clickedTrigger = false;
        if (insideSafeArea) {
          tooltipState = "hover";
          return;
        }
        tooltipState = null;
        props.onBlur?.(event);
        break;
      case "leave":
        if (tooltipState !== "hover") return;
        const closeDelay = access(props.closeDelay);
        if (closeDelay <= 0) {
          initSkipDelay();
          tooltipState = null;
          props.onLeave?.(event);
        } else {
          timeout = setTimeout(() => {
            timeout = null;
            if (insideSafeArea) return;
            initSkipDelay();
            tooltipState = null;
            props.onLeave?.(event);
          }, closeDelay);
        }
        break;
      case "click":
        if (!access(props.closeOnPointerDown)) return;
        tooltipState = null;
        props.onPointerDown?.(event);
        break;
      case "scroll":
        tooltipState = null;
        props.onScroll?.(event);
        break;
    }
  };
  const onSafeAreaMove = (event) => {
    const points = [];
    const trigger = access(props.trigger);
    if (!trigger) return;
    points.push(...getPointsFromRect(trigger.getBoundingClientRect()));
    if (access(props.hoverableContent)) {
      const content = access(props.content);
      if (content) {
        points.push(...getPointsFromRect(content.getBoundingClientRect()));
      }
    }
    const safeAreaPolygon = calculateSafeAreaPolygon(points);
    if (tooltipState === null) {
      document.removeEventListener("pointermove", onSafeAreaMove);
      return;
    }
    if (!pointInPolygon({ x: event.clientX, y: event.clientY }, safeAreaPolygon)) {
      if (insideSafeArea && tooltipState === "hover") {
        insideSafeArea = false;
        closeTooltip("leave", event);
      } else {
        insideSafeArea = false;
      }
    } else {
      insideSafeArea = true;
    }
  };
  const onScroll = (event) => {
    const trigger = access(props.trigger);
    if (tooltipState === null || !trigger) {
      document.removeEventListener("scroll", onScroll);
      return;
    }
    if (!event.target.contains(trigger)) return;
    closeTooltip("scroll", event);
  };
  const resetTimeout = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  const initSkipDelay = () => {
    const skipDelayDuration = access(props.skipDelayDuration);
    if (skipDelayDuration > 0) {
      const skipDelayTimeout = getSkipDelayTimeout();
      if (skipDelayTimeout !== null) {
        clearTimeout(skipDelayTimeout);
        setSkipDelayTimeout(null);
      }
      setSkipDelay(true);
      setSkipDelayTimeout(
        setTimeout(() => {
          setSkipDelayTimeout(null);
          setSkipDelay(false);
        }, skipDelayDuration)
      );
    }
  };
};
var getPointsFromRect = (rect) => {
  return [
    { x: rect.left, y: rect.top },
    { x: rect.left, y: rect.bottom },
    { x: rect.right, y: rect.top },
    { x: rect.right, y: rect.bottom }
  ];
};
var pointInPolygon = (point, polygon) => {
  let inside = false;
  for (let p1 = 0, p2 = polygon.length - 1; p1 < polygon.length; p2 = p1++) {
    const x1 = polygon[p1].x, y1 = polygon[p1].y, x2 = polygon[p2].x, y2 = polygon[p2].y;
    if (point.y < y1 !== point.y < y2 && point.x < x1 + (point.y - y1) / (y2 - y1) * (x2 - x1)) {
      inside = !inside;
    }
  }
  return inside;
};
var calculateSafeAreaPolygon = (points) => {
  points.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  if (points.length <= 1) return points;
  const upperHull = [];
  for (const p of points) {
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) {
        upperHull.pop();
      } else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let pointIndex = points.length - 1; pointIndex >= 0; pointIndex--) {
    const p = points[pointIndex];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) {
        lowerHull.pop();
      } else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length == 1 && lowerHull.length == 1 && upperHull[0].x == lowerHull[0].x && upperHull[0].y == lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
};
var tooltip_default = createTooltip;

export { tooltip_default as default };
