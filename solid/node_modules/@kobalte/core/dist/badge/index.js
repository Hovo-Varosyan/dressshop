import { Polymorphic } from '../chunk/6Y7B2NEO.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { splitProps } from 'solid-js';

function BadgeRoot(props) {
  const [local, others] = splitProps(props, ["textValue"]);
  return createComponent(Polymorphic, mergeProps({
    as: "span",
    role: "status",
    get ["aria-label"]() {
      return local.textValue;
    }
  }, others, {
    get children() {
      return others.children;
    }
  }));
}

// src/badge/index.tsx
var Badge = BadgeRoot;

export { Badge, BadgeRoot as Root };
