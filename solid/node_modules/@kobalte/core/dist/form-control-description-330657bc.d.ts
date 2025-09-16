import * as solid_js from 'solid-js';
import { Accessor, ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { ValidationState } from '@kobalte/utils';

interface FormControlDataSet {
    "data-valid": string | undefined;
    "data-invalid": string | undefined;
    "data-required": string | undefined;
    "data-disabled": string | undefined;
    "data-readonly": string | undefined;
}
interface FormControlContextValue {
    name: Accessor<string>;
    dataset: Accessor<FormControlDataSet>;
    validationState: Accessor<ValidationState | undefined>;
    isRequired: Accessor<boolean | undefined>;
    isDisabled: Accessor<boolean | undefined>;
    isReadOnly: Accessor<boolean | undefined>;
    labelId: Accessor<string | undefined>;
    fieldId: Accessor<string | undefined>;
    descriptionId: Accessor<string | undefined>;
    errorMessageId: Accessor<string | undefined>;
    getAriaLabelledBy: (fieldId: string | undefined, fieldAriaLabel: string | undefined, fieldAriaLabelledBy: string | undefined) => string | undefined;
    getAriaDescribedBy: (fieldAriaDescribedBy: string | undefined) => string | undefined;
    generateId: (part: string) => string;
    registerLabel: (id: string) => () => void;
    registerField: (id: string) => () => void;
    registerDescription: (id: string) => () => void;
    registerErrorMessage: (id: string) => () => void;
}
declare const FormControlContext: solid_js.Context<FormControlContextValue | undefined>;
declare function useFormControlContext(): FormControlContextValue;

interface FormControlDescriptionOptions {
}
interface FormControlDescriptionCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface FormControlDescriptionRenderProps extends FormControlDescriptionCommonProps, FormControlDataSet {
}
type FormControlDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = FormControlDescriptionOptions & Partial<FormControlDescriptionCommonProps<ElementOf<T>>>;
/**
 * The description that gives the user more information on the form control.
 */
declare function FormControlDescription<T extends ValidComponent = "div">(props: PolymorphicProps<T, FormControlDescriptionProps<T>>): solid_js.JSX.Element;

export { FormControlDataSet as F, FormControlDescription as a, FormControlDescriptionOptions as b, FormControlDescriptionCommonProps as c, FormControlDescriptionRenderProps as d, FormControlDescriptionProps as e, FormControlContextValue as f, FormControlContext as g, useFormControlContext as u };
