import {
  createTagName
} from "./OYES4GOP.jsx";
import {
  Polymorphic
} from "./FLVHQV4A.jsx";
import {
  __export
} from "./5WXHJDCZ.jsx";

// src/link/index.tsx
var link_exports = {};
__export(link_exports, {
  Link: () => Link,
  Root: () => LinkRoot
});

// src/link/link-root.tsx
import { mergeRefs } from "@kobalte/utils";
import { splitProps } from "solid-js";
function LinkRoot(props) {
  let ref;
  const [local, others] = splitProps(props, [
    "ref",
    "href",
    "disabled"
  ]);
  const tagName = createTagName(
    () => ref,
    () => "a"
  );
  return <Polymorphic
    as="a"
    ref={mergeRefs((el) => ref = el, local.ref)}
    role={tagName() !== "a" || local.disabled ? "link" : void 0}
    tabIndex={tagName() !== "a" && !local.disabled ? 0 : void 0}
    href={!local.disabled ? local.href : void 0}
    aria-disabled={local.disabled ? true : void 0}
    data-disabled={local.disabled ? "" : void 0}
    {...others}
  />;
}

// src/link/index.tsx
var Link = LinkRoot;

export {
  LinkRoot,
  Link,
  link_exports
};
