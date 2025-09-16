import {
  useFormControlContext
} from "./XUUROM4M.jsx";
import {
  Polymorphic
} from "./FLVHQV4A.jsx";

// src/form-control/form-control-error-message.tsx
import { mergeDefaultProps } from "@kobalte/utils";
import {
  Show,
  createEffect,
  onCleanup,
  splitProps
} from "solid-js";
function FormControlErrorMessage(props) {
  const context = useFormControlContext();
  const mergedProps = mergeDefaultProps(
    {
      id: context.generateId("error-message")
    },
    props
  );
  const [local, others] = splitProps(mergedProps, ["forceMount"]);
  const isInvalid = () => context.validationState() === "invalid";
  createEffect(() => {
    if (!isInvalid()) {
      return;
    }
    onCleanup(context.registerErrorMessage(others.id));
  });
  return <Show when={local.forceMount || isInvalid()}><Polymorphic
    as="div"
    {...context.dataset()}
    {...others}
  /></Show>;
}

export {
  FormControlErrorMessage
};
