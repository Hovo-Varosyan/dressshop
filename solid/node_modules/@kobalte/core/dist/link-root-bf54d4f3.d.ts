import * as solid_js from 'solid-js';
import { ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface LinkRootOptions {
    /** Whether the link is disabled. */
    disabled?: boolean;
}
interface LinkRootCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
    href: string | undefined;
}
interface LinkRootRenderProps extends LinkRootCommonProps {
    role: "link" | undefined;
    tabIndex: number | undefined;
    "aria-disabled": boolean | undefined;
    "data-disabled": string | undefined;
}
type LinkRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = LinkRootOptions & Partial<LinkRootCommonProps<ElementOf<T>>>;
/**
 * Link allows a user to navigate to another page or resource within a web page or application.
 */
declare function LinkRoot<T extends ValidComponent = "a">(props: PolymorphicProps<T, LinkRootProps<T>>): solid_js.JSX.Element;

export { LinkRoot as L, LinkRootCommonProps as a, LinkRootOptions as b, LinkRootProps as c, LinkRootRenderProps as d };
