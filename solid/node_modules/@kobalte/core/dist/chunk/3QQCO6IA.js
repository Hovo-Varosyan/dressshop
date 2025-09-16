import { createTagName } from './ET5T45DO.js';
import { Polymorphic } from './6Y7B2NEO.js';
import { __export } from './5ZKAE4VZ.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { mergeRefs } from '@kobalte/utils';
import { splitProps } from 'solid-js';

// src/link/index.tsx
var link_exports = {};
__export(link_exports, {
  Link: () => Link,
  Root: () => LinkRoot
});
function LinkRoot(props) {
  let ref;
  const [local, others] = splitProps(props, ["ref", "href", "disabled"]);
  const tagName = createTagName(() => ref, () => "a");
  return createComponent(Polymorphic, mergeProps({
    as: "a",
    ref(r$) {
      const _ref$ = mergeRefs((el) => ref = el, local.ref);
      typeof _ref$ === "function" && _ref$(r$);
    },
    get role() {
      return tagName() !== "a" || local.disabled ? "link" : void 0;
    },
    get tabIndex() {
      return tagName() !== "a" && !local.disabled ? 0 : void 0;
    },
    get href() {
      return !local.disabled ? local.href : void 0;
    },
    get ["aria-disabled"]() {
      return local.disabled ? true : void 0;
    },
    get ["data-disabled"]() {
      return local.disabled ? "" : void 0;
    }
  }, others));
}

// src/link/index.tsx
var Link = LinkRoot;

export { Link, LinkRoot, link_exports };
