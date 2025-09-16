import * as solid_js from 'solid-js';
import { ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface AlertRootOptions {
}
interface AlertRootCommonProps<T extends HTMLElement = HTMLElement> {
}
interface AlertRootRenderProps extends AlertRootCommonProps {
    role: "alert";
}
type AlertRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = AlertRootOptions & Partial<AlertRootCommonProps<ElementOf<T>>>;
/**
 * Alert displays a brief, important message
 * in a way that attracts the user's attention without interrupting the user's task.
 */
declare function AlertRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, AlertRootProps<T>>): solid_js.JSX.Element;

declare const Alert: typeof AlertRoot;

declare const index_Alert: typeof Alert;
type index_AlertRootCommonProps<T extends HTMLElement = HTMLElement> = AlertRootCommonProps<T>;
type index_AlertRootOptions = AlertRootOptions;
type index_AlertRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = AlertRootProps<T>;
type index_AlertRootRenderProps = AlertRootRenderProps;
declare namespace index {
  export {
    index_Alert as Alert,
    index_AlertRootCommonProps as AlertRootCommonProps,
    index_AlertRootOptions as AlertRootOptions,
    index_AlertRootProps as AlertRootProps,
    index_AlertRootRenderProps as AlertRootRenderProps,
    AlertRoot as Root,
  };
}

export { AlertRootOptions as A, AlertRootCommonProps as a, AlertRootRenderProps as b, AlertRootProps as c, AlertRoot as d, Alert as e, index as i };
