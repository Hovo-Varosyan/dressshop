import { createComponent, Dynamic, mergeProps } from 'solid-js/web';
import { splitProps } from 'solid-js';

// src/polymorphic/polymorphic.tsx
function Polymorphic(props) {
  const [local, others] = splitProps(props, ["as"]);
  if (!local.as) {
    throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");
  }
  return (
    // @ts-ignore: Props are valid but not worth calculating
    createComponent(Dynamic, mergeProps(others, {
      get component() {
        return local.as;
      }
    }))
  );
}

export { Polymorphic };
