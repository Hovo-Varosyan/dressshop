import { useFormControlContext } from './YKGT7A57.js';
import { Polymorphic } from './6Y7B2NEO.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { mergeDefaultProps } from '@kobalte/utils';
import { splitProps, createEffect, onCleanup, Show } from 'solid-js';

function FormControlErrorMessage(props) {
  const context = useFormControlContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("error-message")
  }, props);
  const [local, others] = splitProps(mergedProps, ["forceMount"]);
  const isInvalid = () => context.validationState() === "invalid";
  createEffect(() => {
    if (!isInvalid()) {
      return;
    }
    onCleanup(context.registerErrorMessage(others.id));
  });
  return createComponent(Show, {
    get when() {
      return local.forceMount || isInvalid();
    },
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "div"
      }, () => context.dataset(), others));
    }
  });
}

export { FormControlErrorMessage };
