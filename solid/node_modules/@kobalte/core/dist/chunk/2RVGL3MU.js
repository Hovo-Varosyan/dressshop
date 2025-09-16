import { Polymorphic } from './6Y7B2NEO.js';
import { __export } from './5ZKAE4VZ.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { mergeDefaultProps } from '@kobalte/utils';
import { combineStyle } from '@solid-primitives/props';
import { createUniqueId, splitProps } from 'solid-js';

// src/skeleton/index.tsx
var skeleton_exports = {};
__export(skeleton_exports, {
  Root: () => Skeleton,
  Skeleton: () => Skeleton2
});
function Skeleton(props) {
  const defaultId = `skeleton-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    visible: true,
    animate: true,
    id: defaultId
  }, props);
  const [local, others] = splitProps(mergedProps, ["style", "radius", "animate", "height", "width", "visible", "circle"]);
  return createComponent(Polymorphic, mergeProps({
    as: "div",
    role: "group",
    get ["data-animate"]() {
      return local.animate || void 0;
    },
    get ["data-visible"]() {
      return local.visible || void 0;
    },
    get style() {
      return combineStyle({
        "border-radius": local.circle ? "9999px" : local.radius ? `${local.radius}px` : void 0,
        width: local.circle ? `${local.height}px` : local.width ? `${local.width}px` : "100%",
        height: local.height ? `${local.height}px` : "auto"
      }, local.style);
    }
  }, others));
}

// src/skeleton/index.tsx
var Skeleton2 = Skeleton;

export { Skeleton, Skeleton2, skeleton_exports };
