import {
  Polymorphic
} from "./FLVHQV4A.jsx";
import {
  __export
} from "./5WXHJDCZ.jsx";

// src/skeleton/index.tsx
var skeleton_exports = {};
__export(skeleton_exports, {
  Root: () => Skeleton,
  Skeleton: () => Skeleton2
});

// src/skeleton/skeleton-root.tsx
import { mergeDefaultProps } from "@kobalte/utils";
import { combineStyle } from "@solid-primitives/props";
import {
  createUniqueId,
  splitProps
} from "solid-js";
function Skeleton(props) {
  const defaultId = `skeleton-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps(
    {
      visible: true,
      animate: true,
      id: defaultId
    },
    props
  );
  const [local, others] = splitProps(mergedProps, [
    "style",
    "radius",
    "animate",
    "height",
    "width",
    "visible",
    "circle"
  ]);
  return <Polymorphic
    as="div"
    role="group"
    data-animate={local.animate || void 0}
    data-visible={local.visible || void 0}
    style={combineStyle(
      {
        "border-radius": local.circle ? "9999px" : local.radius ? `${local.radius}px` : void 0,
        width: local.circle ? `${local.height}px` : local.width ? `${local.width}px` : "100%",
        height: local.height ? `${local.height}px` : "auto"
      },
      local.style
    )}
    {...others}
  />;
}

// src/skeleton/index.tsx
var Skeleton2 = Skeleton;

export {
  Skeleton,
  Skeleton2,
  skeleton_exports
};
