import {
  access
} from "./U42ECMND.jsx";

// src/create/tagName.ts
import { createMemo } from "solid-js";
var createTagName = (props) => {
  const tagName = createMemo(
    () => access(props.element)?.tagName.toLowerCase() ?? props.fallback
  );
  return tagName;
};
var tagName_default = createTagName;

export {
  tagName_default
};
