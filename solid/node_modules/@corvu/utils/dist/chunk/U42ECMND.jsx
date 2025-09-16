// src/reactivity/lib.ts
import "solid-js";
var access = (v) => typeof v === "function" ? v() : v;
var chain = (callbacks) => {
  return (...args) => {
    for (const callback of callbacks) callback && callback(...args);
  };
};
var mergeRefs = (...refs) => {
  return chain(refs);
};
var some = (...signals) => {
  return signals.some((signal) => !!signal());
};

export {
  access,
  chain,
  mergeRefs,
  some
};
