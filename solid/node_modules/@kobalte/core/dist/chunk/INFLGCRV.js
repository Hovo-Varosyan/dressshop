import { access, createMediaQuery } from '@kobalte/utils';
import { mergeProps, createSignal, createMemo, createEffect, on, onCleanup } from 'solid-js';
import { isServer } from 'solid-js/web';

// src/primitives/create-transition/create-transition.ts

// src/primitives/create-transition/get-transition-styles.ts
var TRANSITION_PHASES_MAP = {
  beforeEnter: "out",
  enter: "in",
  afterEnter: "in",
  beforeExit: "in",
  //"out",
  exit: "out",
  afterExit: "out"
};
function getTransitionStyles(params) {
  const shared = {
    "transition-duration": `${params.duration}ms`,
    "transition-timing-function": params.easing
  };
  return {
    "transition-property": getTransitionProperty(params.transition),
    ...shared,
    ...params.transition.common,
    ...params.transition[TRANSITION_PHASES_MAP[params.phase]]
  };
}
function getTransitionProperty(transitionStyles) {
  return [
    .../* @__PURE__ */ new Set([
      ...Object.keys(transitionStyles.in),
      ...Object.keys(transitionStyles.out)
    ])
  ].join(", ");
}

// src/primitives/create-transition/create-transition.ts
var DEFAULT_DURATION = 250;
var DEFAULT_DELAY = 10;
var DEFAULT_EASING = "ease";
function createTransition(shouldMount, options) {
  const mergedOptions = mergeProps(
    {
      duration: DEFAULT_DURATION,
      delay: DEFAULT_DELAY,
      easing: DEFAULT_EASING,
      get exitDuration() {
        return access(options).duration || DEFAULT_DURATION;
      },
      get exitDelay() {
        return access(options).delay || DEFAULT_DELAY;
      },
      get exitEasing() {
        return access(options).easing || DEFAULT_EASING;
      }
    },
    options
  );
  const reduceMotion = createMediaQuery("(prefers-reduced-motion: reduce)");
  const [duration, setDuration] = createSignal(
    reduceMotion() ? 0 : access(mergedOptions).duration
  );
  const [phase, setPhase] = createSignal(
    access(shouldMount) ? "afterEnter" : "afterExit"
  );
  const [easing, setEasing] = createSignal(access(mergedOptions).easing);
  let timeoutId = -1;
  const handleStateChange = (shouldMount2) => {
    const preHandler = shouldMount2 ? access(mergedOptions).onBeforeEnter : access(mergedOptions).onBeforeExit;
    const postHandler = shouldMount2 ? access(mergedOptions).onAfterEnter : access(mergedOptions).onAfterExit;
    setPhase(shouldMount2 ? "beforeEnter" : "beforeExit");
    window.clearTimeout(timeoutId);
    const newDuration = setDuration(
      reduceMotion() ? 0 : shouldMount2 ? access(mergedOptions).duration : access(mergedOptions).exitDuration
    );
    setEasing(
      shouldMount2 ? access(mergedOptions).easing : access(mergedOptions).exitEasing
    );
    if (newDuration === 0) {
      preHandler?.();
      postHandler?.();
      setPhase(shouldMount2 ? "afterEnter" : "afterExit");
      return;
    }
    const delay = reduceMotion() ? 0 : shouldMount2 ? access(mergedOptions).delay : access(mergedOptions).exitDelay;
    const preStateTimeoutId = window.setTimeout(() => {
      preHandler?.();
      setPhase(shouldMount2 ? "enter" : "exit");
    }, delay);
    timeoutId = window.setTimeout(() => {
      window.clearTimeout(preStateTimeoutId);
      postHandler?.();
      setPhase(shouldMount2 ? "afterEnter" : "afterExit");
    }, delay + newDuration);
  };
  const style = createMemo(
    () => getTransitionStyles({
      transition: access(mergedOptions).transition,
      duration: duration(),
      phase: phase(),
      easing: easing()
    })
  );
  const keepMounted = createMemo(() => phase() !== "afterExit");
  createEffect(
    on(
      () => access(shouldMount),
      (shouldMount2) => handleStateChange(shouldMount2),
      { defer: true }
    )
  );
  onCleanup(() => {
    if (isServer) {
      return;
    }
    window.clearTimeout(timeoutId);
  });
  return { keepMounted, style };
}

export { createTransition };
