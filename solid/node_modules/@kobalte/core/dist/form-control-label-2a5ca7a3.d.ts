import * as solid_js from 'solid-js';
import { ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { F as FormControlDataSet } from './form-control-description-330657bc.js';

interface FormControlLabelOptions {
}
interface FormControlLabelCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    ref: T | ((el: T) => void);
}
interface FormControlLabelRenderProps extends FormControlLabelCommonProps, FormControlDataSet {
    for: string | undefined;
}
type FormControlLabelProps<T extends ValidComponent | HTMLElement = HTMLElement> = FormControlLabelOptions & Partial<FormControlLabelCommonProps<ElementOf<T>>>;
/**
 * The label that gives the user information on the form control.
 */
declare function FormControlLabel<T extends ValidComponent = "label">(props: PolymorphicProps<T, FormControlLabelProps<T>>): solid_js.JSX.Element;

export { FormControlLabel as F, FormControlLabelOptions as a, FormControlLabelCommonProps as b, FormControlLabelRenderProps as c, FormControlLabelProps as d };
