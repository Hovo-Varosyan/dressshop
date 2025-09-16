import {
  createTagName
} from "./OYES4GOP.jsx";
import {
  Polymorphic
} from "./FLVHQV4A.jsx";
import {
  __export
} from "./5WXHJDCZ.jsx";

// src/separator/index.tsx
var separator_exports = {};
__export(separator_exports, {
  Root: () => SeparatorRoot,
  Separator: () => Separator
});

// src/separator/separator-root.tsx
import { mergeDefaultProps, mergeRefs } from "@kobalte/utils";
import { splitProps } from "solid-js";
function SeparatorRoot(props) {
  let ref;
  const mergedProps = mergeDefaultProps(
    {
      orientation: "horizontal"
    },
    props
  );
  const [local, others] = splitProps(mergedProps, ["ref", "orientation"]);
  const tagName = createTagName(
    () => ref,
    () => "hr"
  );
  return <Polymorphic
    as="hr"
    ref={mergeRefs((el) => ref = el, local.ref)}
    role={tagName() !== "hr" ? "separator" : void 0}
    aria-orientation={local.orientation === "vertical" ? "vertical" : void 0}
    data-orientation={local.orientation}
    {...others}
  />;
}

// src/separator/index.tsx
var Separator = SeparatorRoot;

export {
  SeparatorRoot,
  Separator,
  separator_exports
};
