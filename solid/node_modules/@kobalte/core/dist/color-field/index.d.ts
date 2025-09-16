import { a as FormControlDescription } from '../form-control-description-330657bc.js';
export { c as ColorFieldDescriptionCommonProps, b as ColorFieldDescriptionOptions, e as ColorFieldDescriptionProps, d as ColorFieldDescriptionRenderProps } from '../form-control-description-330657bc.js';
import { F as FormControlErrorMessage } from '../form-control-error-message-9efcbea8.js';
export { b as ColorFieldErrorMessageCommonProps, a as ColorFieldErrorMessageOptions, d as ColorFieldErrorMessageProps, c as ColorFieldErrorMessageRenderProps } from '../form-control-error-message-9efcbea8.js';
import { F as FormControlLabel } from '../form-control-label-2a5ca7a3.js';
export { b as ColorFieldLabelCommonProps, a as ColorFieldLabelOptions, d as ColorFieldLabelProps, c as ColorFieldLabelRenderProps } from '../form-control-label-2a5ca7a3.js';
import { JSX, ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from '../polymorphic/index.js';
import { d as TextFieldInputOptions, a as TextFieldInputRenderProps, g as TextFieldRootOptions, i as TextFieldRootRenderProps } from '../text-field-root-0b8dfa5a.js';
import '@kobalte/utils';

interface ColorFieldInputOptions extends TextFieldInputOptions {
}
interface ColorFieldInputCommonProps<T extends HTMLElement = HTMLInputElement> {
    onBlur: JSX.FocusEventHandlerUnion<T, FocusEvent>;
}
interface ColorFieldInputRenderProps extends ColorFieldInputCommonProps, TextFieldInputRenderProps {
    autoComplete: "off";
    autoCorrect: "off";
    spellCheck: "false";
}
type ColorFieldInputProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorFieldInputOptions & Partial<ColorFieldInputCommonProps<ElementOf<T>>>;
declare function ColorFieldInput<T extends ValidComponent = "input">(props: PolymorphicProps<T, ColorFieldInputProps<T>>): JSX.Element;

interface ColorFieldRootOptions extends TextFieldRootOptions {
}
interface ColorFieldRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface ColorFieldRootRenderProps extends ColorFieldRootCommonProps, TextFieldRootRenderProps {
}
type ColorFieldRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ColorFieldRootOptions & Partial<ColorFieldRootCommonProps<ElementOf<T>>>;
declare function ColorFieldRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, ColorFieldRootProps<T>>): JSX.Element;

interface ColorFieldContextValue {
    onBlur: JSX.FocusEventHandlerUnion<HTMLInputElement, FocusEvent>;
}
declare function useColorFieldContext(): ColorFieldContextValue;

declare const ColorField: typeof ColorFieldRoot & {
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
    Input: typeof ColorFieldInput;
    Label: typeof FormControlLabel;
};

export { ColorField, ColorFieldContextValue, ColorFieldInputCommonProps, ColorFieldInputOptions, ColorFieldInputProps, ColorFieldInputRenderProps, ColorFieldRootCommonProps, ColorFieldRootOptions, ColorFieldRootProps, ColorFieldRootRenderProps, FormControlDescription as Description, FormControlErrorMessage as ErrorMessage, ColorFieldInput as Input, FormControlLabel as Label, ColorFieldRoot as Root, useColorFieldContext };
