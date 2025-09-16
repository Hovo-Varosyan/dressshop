import { isString } from '@kobalte/utils';
import { createSignal, createEffect } from 'solid-js';

// src/primitives/create-tag-name/create-tag-name.ts
function createTagName(ref, fallback) {
  const [tagName, setTagName] = createSignal(stringOrUndefined(fallback?.()));
  createEffect(() => {
    setTagName(ref()?.tagName.toLowerCase() || stringOrUndefined(fallback?.()));
  });
  return tagName;
}
function stringOrUndefined(value) {
  return isString(value) ? value : void 0;
}

export { createTagName };
