import {
  Polymorphic
} from "../chunk/FLVHQV4A.jsx";
import "../chunk/5WXHJDCZ.jsx";

// src/badge/badge-root.tsx
import { splitProps } from "solid-js";
function BadgeRoot(props) {
  const [local, others] = splitProps(props, ["textValue"]);
  return <Polymorphic
    as="span"
    role="status"
    aria-label={local.textValue}
    {...others}
  >{others.children}</Polymorphic>;
}

// src/badge/index.tsx
var Badge = BadgeRoot;
export {
  Badge,
  BadgeRoot as Root
};
