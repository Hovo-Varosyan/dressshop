import {
  useFormControlContext
} from "./XUUROM4M.jsx";
import {
  createTagName
} from "./OYES4GOP.jsx";
import {
  Polymorphic
} from "./FLVHQV4A.jsx";

// src/form-control/form-control-label.tsx
import {
  mergeDefaultProps,
  mergeRefs
} from "@kobalte/utils";
import {
  createEffect,
  onCleanup,
  splitProps
} from "solid-js";
function FormControlLabel(props) {
  let ref;
  const context = useFormControlContext();
  const mergedProps = mergeDefaultProps(
    {
      id: context.generateId("label")
    },
    props
  );
  const [local, others] = splitProps(mergedProps, ["ref"]);
  const tagName = createTagName(
    () => ref,
    () => "label"
  );
  createEffect(() => onCleanup(context.registerLabel(others.id)));
  return <Polymorphic
    as="label"
    ref={mergeRefs((el) => ref = el, local.ref)}
    for={tagName() === "label" ? context.fieldId() : void 0}
    {...context.dataset()}
    {...others}
  />;
}

export {
  FormControlLabel
};
