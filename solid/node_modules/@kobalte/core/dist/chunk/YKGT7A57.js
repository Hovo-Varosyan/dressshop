import { createRegisterId } from './E4R2EMM4.js';
import { Polymorphic } from './6Y7B2NEO.js';
import { mergeDefaultProps, access, createGenerateId } from '@kobalte/utils';
import { createContext, createUniqueId, createSignal, createMemo, useContext, createEffect, onCleanup } from 'solid-js';
import { createComponent, mergeProps } from 'solid-js/web';

var FORM_CONTROL_PROP_NAMES = ["id", "name", "validationState", "required", "disabled", "readOnly"];
function createFormControl(props) {
  const defaultId = `form-control-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    id: defaultId
  }, props);
  const [labelId, setLabelId] = createSignal();
  const [fieldId, setFieldId] = createSignal();
  const [descriptionId, setDescriptionId] = createSignal();
  const [errorMessageId, setErrorMessageId] = createSignal();
  const getAriaLabelledBy = (fieldId2, fieldAriaLabel, fieldAriaLabelledBy) => {
    const hasAriaLabelledBy = fieldAriaLabelledBy != null || labelId() != null;
    return [
      fieldAriaLabelledBy,
      labelId(),
      // If there is both an aria-label and aria-labelledby, add the field itself has an aria-labelledby
      hasAriaLabelledBy && fieldAriaLabel != null ? fieldId2 : void 0
    ].filter(Boolean).join(" ") || void 0;
  };
  const getAriaDescribedBy = (fieldAriaDescribedBy) => {
    return [
      descriptionId(),
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA.
      // See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      errorMessageId(),
      fieldAriaDescribedBy
    ].filter(Boolean).join(" ") || void 0;
  };
  const dataset = createMemo(() => ({
    "data-valid": access(mergedProps.validationState) === "valid" ? "" : void 0,
    "data-invalid": access(mergedProps.validationState) === "invalid" ? "" : void 0,
    "data-required": access(mergedProps.required) ? "" : void 0,
    "data-disabled": access(mergedProps.disabled) ? "" : void 0,
    "data-readonly": access(mergedProps.readOnly) ? "" : void 0
  }));
  const formControlContext = {
    name: () => access(mergedProps.name) ?? access(mergedProps.id),
    dataset,
    validationState: () => access(mergedProps.validationState),
    isRequired: () => access(mergedProps.required),
    isDisabled: () => access(mergedProps.disabled),
    isReadOnly: () => access(mergedProps.readOnly),
    labelId,
    fieldId,
    descriptionId,
    errorMessageId,
    getAriaLabelledBy,
    getAriaDescribedBy,
    generateId: createGenerateId(() => access(mergedProps.id)),
    registerLabel: createRegisterId(setLabelId),
    registerField: createRegisterId(setFieldId),
    registerDescription: createRegisterId(setDescriptionId),
    registerErrorMessage: createRegisterId(setErrorMessageId)
  };
  return {
    formControlContext
  };
}
var FormControlContext = createContext();
function useFormControlContext() {
  const context = useContext(FormControlContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");
  }
  return context;
}
function FormControlDescription(props) {
  const context = useFormControlContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("description")
  }, props);
  createEffect(() => onCleanup(context.registerDescription(mergedProps.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "div"
  }, () => context.dataset(), mergedProps));
}

export { FORM_CONTROL_PROP_NAMES, FormControlContext, FormControlDescription, createFormControl, useFormControlContext };
