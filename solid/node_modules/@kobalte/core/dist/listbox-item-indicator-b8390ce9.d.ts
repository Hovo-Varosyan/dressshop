import * as solid_js from 'solid-js';
import { ValidComponent } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { L as ListboxItemDataSet } from './listbox-section-58338bda.js';

interface ListboxItemIndicatorOptions {
    /**
     * Used to force mounting when more control is needed.
     * Useful when controlling animation with SolidJS animation libraries.
     */
    forceMount?: boolean;
}
interface ListboxItemIndicatorCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
}
interface ListboxItemIndicatorRenderProps extends ListboxItemIndicatorCommonProps, ListboxItemDataSet {
    "aria-hidden": "true";
}
type ListboxItemIndicatorProps<T extends ValidComponent | HTMLElement = HTMLElement> = ListboxItemIndicatorOptions & Partial<ListboxItemIndicatorCommonProps<ElementOf<T>>>;
/**
 * The visual indicator rendered when the item is selected.
 * You can style this element directly, or you can use it as a wrapper to put an icon into, or both.
 */
declare function ListboxItemIndicator<T extends ValidComponent = "div">(props: PolymorphicProps<T, ListboxItemIndicatorProps<T>>): solid_js.JSX.Element;

export { ListboxItemIndicator as L, ListboxItemIndicatorCommonProps as a, ListboxItemIndicatorOptions as b, ListboxItemIndicatorProps as c, ListboxItemIndicatorRenderProps as d };
