import { a as FormControlDescription, c as FormControlDescriptionCommonProps, b as FormControlDescriptionOptions, e as FormControlDescriptionProps, d as FormControlDescriptionRenderProps } from './form-control-description-330657bc.js';
import { F as FormControlErrorMessage, b as FormControlErrorMessageCommonProps, a as FormControlErrorMessageOptions, d as FormControlErrorMessageProps, c as FormControlErrorMessageRenderProps } from './form-control-error-message-9efcbea8.js';
import { F as FormControlLabel, b as FormControlLabelCommonProps, a as FormControlLabelOptions, d as FormControlLabelProps, c as FormControlLabelRenderProps } from './form-control-label-2a5ca7a3.js';
import { T as TextFieldInputCommonProps, a as TextFieldInputRenderProps, b as TextFieldRoot, c as TextFieldInput, d as TextFieldInputOptions, e as TextFieldInputProps, f as TextFieldRootCommonProps, g as TextFieldRootOptions, h as TextFieldRootProps, i as TextFieldRootRenderProps } from './text-field-root-0b8dfa5a.js';
import { JSX, ValidComponent, Accessor } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface TextFieldTextAreaOptions {
    /** Whether the textarea should adjust its height when the value changes. */
    autoResize?: boolean;
    /** Whether the form should be submitted when the user presses the enter key. */
    submitOnEnter?: boolean;
}
interface TextFieldTextAreaCommonProps<T extends HTMLElement = HTMLElement> extends TextFieldInputCommonProps<T> {
    ref: T | ((el: T) => void);
    onKeyPress: JSX.EventHandlerUnion<T, KeyboardEvent>;
}
interface TextFieldTextAreaRenderProps extends TextFieldTextAreaCommonProps, TextFieldInputRenderProps {
    "aria-multiline": string | undefined;
}
type TextFieldTextAreaProps<T extends ValidComponent | HTMLElement = HTMLElement> = TextFieldTextAreaOptions & Partial<TextFieldTextAreaCommonProps<ElementOf<T>>>;
/**
 * The native html textarea of the textfield.
 */
declare function TextFieldTextArea<T extends ValidComponent = "textarea">(props: PolymorphicProps<T, TextFieldTextAreaProps<T>>): JSX.Element;

interface TextFieldContextValue {
    value: Accessor<string | undefined>;
    generateId: (part: string) => string;
    onInput: JSX.EventHandlerUnion<HTMLInputElement | HTMLTextAreaElement, InputEvent>;
}
declare function useTextFieldContext(): TextFieldContextValue;

declare const TextField: typeof TextFieldRoot & {
    Description: typeof FormControlDescription;
    ErrorMessage: typeof FormControlErrorMessage;
    Input: typeof TextFieldInput;
    Label: typeof FormControlLabel;
    TextArea: typeof TextFieldTextArea;
};

declare const index_TextField: typeof TextField;
type index_TextFieldContextValue = TextFieldContextValue;
declare const index_TextFieldInputCommonProps: typeof TextFieldInputCommonProps;
declare const index_TextFieldInputOptions: typeof TextFieldInputOptions;
declare const index_TextFieldInputProps: typeof TextFieldInputProps;
declare const index_TextFieldInputRenderProps: typeof TextFieldInputRenderProps;
declare const index_TextFieldRootCommonProps: typeof TextFieldRootCommonProps;
declare const index_TextFieldRootOptions: typeof TextFieldRootOptions;
declare const index_TextFieldRootProps: typeof TextFieldRootProps;
declare const index_TextFieldRootRenderProps: typeof TextFieldRootRenderProps;
type index_TextFieldTextAreaCommonProps<T extends HTMLElement = HTMLElement> = TextFieldTextAreaCommonProps<T>;
type index_TextFieldTextAreaOptions = TextFieldTextAreaOptions;
type index_TextFieldTextAreaProps<T extends ValidComponent | HTMLElement = HTMLElement> = TextFieldTextAreaProps<T>;
type index_TextFieldTextAreaRenderProps = TextFieldTextAreaRenderProps;
declare const index_useTextFieldContext: typeof useTextFieldContext;
declare namespace index {
  export {
    FormControlDescription as Description,
    FormControlErrorMessage as ErrorMessage,
    TextFieldInput as Input,
    FormControlLabel as Label,
    TextFieldRoot as Root,
    TextFieldTextArea as TextArea,
    index_TextField as TextField,
    index_TextFieldContextValue as TextFieldContextValue,
    FormControlDescriptionCommonProps as TextFieldDescriptionCommonProps,
    FormControlDescriptionOptions as TextFieldDescriptionOptions,
    FormControlDescriptionProps as TextFieldDescriptionProps,
    FormControlDescriptionRenderProps as TextFieldDescriptionRenderProps,
    FormControlErrorMessageCommonProps as TextFieldErrorMessageCommonProps,
    FormControlErrorMessageOptions as TextFieldErrorMessageOptions,
    FormControlErrorMessageProps as TextFieldErrorMessageProps,
    FormControlErrorMessageRenderProps as TextFieldErrorMessageRenderProps,
    index_TextFieldInputCommonProps as TextFieldInputCommonProps,
    index_TextFieldInputOptions as TextFieldInputOptions,
    index_TextFieldInputProps as TextFieldInputProps,
    index_TextFieldInputRenderProps as TextFieldInputRenderProps,
    FormControlLabelCommonProps as TextFieldLabelCommonProps,
    FormControlLabelOptions as TextFieldLabelOptions,
    FormControlLabelProps as TextFieldLabelProps,
    FormControlLabelRenderProps as TextFieldLabelRenderProps,
    index_TextFieldRootCommonProps as TextFieldRootCommonProps,
    index_TextFieldRootOptions as TextFieldRootOptions,
    index_TextFieldRootProps as TextFieldRootProps,
    index_TextFieldRootRenderProps as TextFieldRootRenderProps,
    index_TextFieldTextAreaCommonProps as TextFieldTextAreaCommonProps,
    index_TextFieldTextAreaOptions as TextFieldTextAreaOptions,
    index_TextFieldTextAreaProps as TextFieldTextAreaProps,
    index_TextFieldTextAreaRenderProps as TextFieldTextAreaRenderProps,
    index_useTextFieldContext as useTextFieldContext,
  };
}

export { TextFieldTextAreaOptions as T, TextFieldTextAreaCommonProps as a, TextFieldTextAreaRenderProps as b, TextFieldTextAreaProps as c, TextFieldTextArea as d, TextField as e, TextFieldContextValue as f, index as i, useTextFieldContext as u };
