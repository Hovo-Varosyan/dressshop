import * as solid_js from 'solid-js';
import { ValidComponent } from 'solid-js';
import { Orientation } from '@kobalte/utils';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface SeparatorRootOptions {
    /** The orientation of the separator. */
    orientation?: Orientation;
}
interface SeparatorRootCommonProps<T extends HTMLElement = HTMLElement> {
    ref: T | ((el: T) => void);
}
interface SeparatorRootRenderProps extends SeparatorRootCommonProps {
    role: "separator" | undefined;
    "aria-orientation": "vertical" | undefined;
    "data-orientation": Orientation | undefined;
}
type SeparatorRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = SeparatorRootOptions & Partial<SeparatorRootCommonProps<ElementOf<T>>>;
/**
 * A separator visually or semantically separates content.
 */
declare function SeparatorRoot<T extends ValidComponent = "hr">(props: PolymorphicProps<T, SeparatorRootProps<T>>): solid_js.JSX.Element;

export { SeparatorRoot as S, SeparatorRootCommonProps as a, SeparatorRootOptions as b, SeparatorRootProps as c, SeparatorRootRenderProps as d };
