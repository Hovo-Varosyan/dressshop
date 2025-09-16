import { createContext, useContext } from 'solid-js';

// src/create/keyedContext.ts
var keyedContexts = /* @__PURE__ */ new Map();
var createKeyedContext = (key, defaultValue) => {
  if (keyedContexts.has(key)) {
    return keyedContexts.get(key);
  }
  const keyedContext = createContext(defaultValue);
  keyedContexts.set(key, keyedContext);
  return keyedContext;
};
var getKeyedContext = (key) => {
  const keyedContext = keyedContexts.get(key);
  return keyedContext;
};
var useKeyedContext = (key) => {
  const keyedContext = keyedContexts.get(key);
  if (!keyedContext) return void 0;
  return useContext(keyedContext);
};

export { createKeyedContext, getKeyedContext, useKeyedContext };
