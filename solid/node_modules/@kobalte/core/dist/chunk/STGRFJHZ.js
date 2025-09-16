import { createTagName } from './ET5T45DO.js';
import { Polymorphic } from './6Y7B2NEO.js';
import { __export } from './5ZKAE4VZ.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { mergeDefaultProps, mergeRefs } from '@kobalte/utils';
import { splitProps } from 'solid-js';

// src/separator/index.tsx
var separator_exports = {};
__export(separator_exports, {
  Root: () => SeparatorRoot,
  Separator: () => Separator
});
function SeparatorRoot(props) {
  let ref;
  const mergedProps = mergeDefaultProps({
    orientation: "horizontal"
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "orientation"]);
  const tagName = createTagName(() => ref, () => "hr");
  return createComponent(Polymorphic, mergeProps({
    as: "hr",
    ref(r$) {
      const _ref$ = mergeRefs((el) => ref = el, local.ref);
      typeof _ref$ === "function" && _ref$(r$);
    },
    get role() {
      return tagName() !== "hr" ? "separator" : void 0;
    },
    get ["aria-orientation"]() {
      return local.orientation === "vertical" ? "vertical" : void 0;
    },
    get ["data-orientation"]() {
      return local.orientation;
    }
  }, others));
}

// src/separator/index.tsx
var Separator = SeparatorRoot;

export { Separator, SeparatorRoot, separator_exports };
