import * as solid_js from 'solid-js';
import { ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface ButtonRootOptions {
}
interface ButtonRootCommonProps<T extends HTMLElement = HTMLElement> {
    /** Whether the button is disabled. */
    disabled: boolean | undefined;
    type: string | undefined;
    ref: T | ((el: T) => void);
    tabIndex: number | string | undefined;
}
interface ButtonRootRenderProps extends ButtonRootCommonProps {
    role: "menuitem" | "button" | undefined;
    "aria-disabled": boolean | undefined;
    "data-disabled": string | undefined;
}
type ButtonRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ButtonRootOptions & Partial<ButtonRootCommonProps<ElementOf<T>>>;
/**
 * Button enables users to trigger an action or event, such as submitting a form,
 * opening a dialog, canceling an action, or performing a delete operation.
 * This component is based on the [WAI-ARIA Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
 */
declare function ButtonRoot<T extends ValidComponent = "button">(props: PolymorphicProps<T, ButtonRootProps<T>>): solid_js.JSX.Element;

export { ButtonRoot as B, ButtonRootCommonProps as a, ButtonRootOptions as b, ButtonRootProps as c, ButtonRootRenderProps as d };
