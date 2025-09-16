import { useFormControlContext } from './YKGT7A57.js';
import { createTagName } from './ET5T45DO.js';
import { Polymorphic } from './6Y7B2NEO.js';
import { createComponent, mergeProps, memo } from 'solid-js/web';
import { mergeDefaultProps, mergeRefs } from '@kobalte/utils';
import { splitProps, createEffect, onCleanup } from 'solid-js';

function FormControlLabel(props) {
  let ref;
  const context = useFormControlContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("label")
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref"]);
  const tagName = createTagName(() => ref, () => "label");
  createEffect(() => onCleanup(context.registerLabel(others.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "label",
    ref(r$) {
      const _ref$ = mergeRefs((el) => ref = el, local.ref);
      typeof _ref$ === "function" && _ref$(r$);
    },
    get ["for"]() {
      return memo(() => tagName() === "label")() ? context.fieldId() : void 0;
    }
  }, () => context.dataset(), others));
}

export { FormControlLabel };
