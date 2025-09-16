import { JSX, ValidComponent } from 'solid-js';
import { F as FormControlDataSet } from './form-control-description-330657bc.js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { ValidationState } from '@kobalte/utils';

interface TextFieldInputOptions {
}
interface TextFieldInputCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    onInput: JSX.EventHandlerUnion<T, InputEvent>;
    "aria-label": string | undefined;
    "aria-labelledby": string | undefined;
    "aria-describedby": string | undefined;
}
interface TextFieldInputRenderProps extends TextFieldInputCommonProps, FormControlDataSet {
    name: string;
    value: string | undefined;
    required: boolean | undefined;
    disabled: boolean | undefined;
    readonly: boolean | undefined;
    "aria-invalid": boolean | undefined;
    "aria-required": boolean | undefined;
    "aria-disabled": boolean | undefined;
    "aria-readonly": boolean | undefined;
}
type TextFieldInputProps<T extends ValidComponent | HTMLElement = HTMLElement> = TextFieldInputOptions & Partial<TextFieldInputCommonProps<ElementOf<T>>>;
declare function TextFieldInput<T extends ValidComponent = "input">(props: PolymorphicProps<T, TextFieldInputProps<T>>): JSX.Element;

interface TextFieldRootOptions {
    /** The controlled value of the text field. */
    value?: string;
    /**
     * The default value when initially rendered.
     * Useful when you do not need to control the value.
     */
    defaultValue?: string;
    /** Event handler called when the value of the text field changes. */
    onChange?: (value: string) => void;
    /**
     * A unique identifier for the component.
     * The id is used to generate id attributes for nested components.
     * If no id prop is provided, a generated id will be used.
     */
    id?: string;
    /**
     * The name of the text field, used when submitting an HTML form.
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    name?: string;
    /** Whether the text field should display its "valid" or "invalid" visual styling. */
    validationState?: ValidationState;
    /** Whether the user must fill the text field before the owning form can be submitted. */
    required?: boolean;
    /** Whether the text field is disabled. */
    disabled?: boolean;
    /** Whether the text field is read only. */
    readOnly?: boolean;
}
interface TextFieldRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
}
interface TextFieldRootRenderProps extends TextFieldRootCommonProps, FormControlDataSet {
    role: "group";
}
type TextFieldRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = TextFieldRootOptions & Partial<TextFieldRootCommonProps<ElementOf<T>>>;
/**
 * A text input that allow users to input custom text entries with a keyboard.
 */
declare function TextFieldRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, TextFieldRootProps<T>>): JSX.Element;

export { TextFieldInputCommonProps as T, TextFieldInputRenderProps as a, TextFieldRoot as b, TextFieldInput as c, TextFieldInputOptions as d, TextFieldInputProps as e, TextFieldRootCommonProps as f, TextFieldRootOptions as g, TextFieldRootProps as h, TextFieldRootRenderProps as i };
