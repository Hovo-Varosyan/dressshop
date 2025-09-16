import * as solid_js from 'solid-js';
import { ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { F as FormControlDataSet } from './form-control-description-330657bc.js';

interface FormControlErrorMessageOptions {
    /**
     * Used to force mounting when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
}
interface FormControlErrorMessageCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface FormControlErrorMessageRenderProps extends FormControlErrorMessageCommonProps, FormControlDataSet {
}
type FormControlErrorMessageProps<T extends ValidComponent | HTMLElement = HTMLElement> = FormControlErrorMessageOptions & Partial<FormControlErrorMessageCommonProps<ElementOf<T>>>;
/**
 * The error message that gives the user information about how to fix a validation error on the form control.
 */
declare function FormControlErrorMessage<T extends ValidComponent = "div">(props: PolymorphicProps<T, FormControlErrorMessageProps<T>>): solid_js.JSX.Element;

export { FormControlErrorMessage as F, FormControlErrorMessageOptions as a, FormControlErrorMessageCommonProps as b, FormControlErrorMessageRenderProps as c, FormControlErrorMessageProps as d };
