import * as solid_js from 'solid-js';
import { ValidComponent, JSX, Component, Accessor, Setter } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';
import { d as ButtonRootRenderProps } from './button-root-da654b3e.js';

interface PaginationEllipsisOptions {
}
interface PaginationEllipsisCommonProps<T extends HTMLElement = HTMLElement> {
}
interface PaginationEllipsisRenderProps extends PaginationEllipsisCommonProps {
}
type PaginationEllipsisProps<T extends ValidComponent | HTMLElement = HTMLElement> = PaginationEllipsisOptions & Partial<PaginationEllipsisCommonProps<ElementOf<T>>>;
declare function PaginationEllipsis<T extends ValidComponent = "div">(props: PolymorphicProps<T, PaginationEllipsisProps<T>>): solid_js.JSX.Element;

interface PaginationItemOptions {
    /** The page number of this item. (1-indexed) */
    page: number;
}
interface PaginationItemCommonProps<T extends HTMLElement = HTMLElement> {
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
}
interface PaginationItemRenderProps extends PaginationItemCommonProps, ButtonRootRenderProps {
    "aria-current": "page" | undefined;
    "data-current": "" | undefined;
}
type PaginationItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = PaginationItemOptions & Partial<PaginationItemCommonProps<ElementOf<T>>>;
declare function PaginationItem<T extends ValidComponent = "button">(props: PolymorphicProps<T, PaginationItemProps<T>>): JSX.Element;

interface PaginationItemsProps {
}
declare function PaginationItems(props: PaginationItemsProps): solid_js.JSX.Element;

interface PaginationNextOptions {
}
interface PaginationNextCommonProps<T extends HTMLElement = HTMLElement> {
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
}
interface PaginationNextRenderProps extends PaginationNextCommonProps, ButtonRootRenderProps {
}
type PaginationNextProps<T extends ValidComponent | HTMLElement = HTMLElement> = PaginationNextOptions & Partial<PaginationNextCommonProps<ElementOf<T>>>;
declare function PaginationNext<T extends ValidComponent = "button">(props: PolymorphicProps<T, PaginationNextProps<T>>): JSX.Element;

interface PaginationPreviousOptions {
}
interface PaginationPreviousCommonProps<T extends HTMLElement = HTMLElement> {
    onClick: JSX.EventHandlerUnion<T, MouseEvent>;
}
interface PaginationPreviousRenderProps extends PaginationPreviousCommonProps, ButtonRootRenderProps {
}
type PaginationPreviousProps<T extends ValidComponent | HTMLElement = HTMLElement> = PaginationPreviousOptions & Partial<PaginationPreviousCommonProps<ElementOf<T>>>;
declare function PaginationPrevious<T extends ValidComponent = "button">(props: PolymorphicProps<T, PaginationPreviousProps<T>>): JSX.Element;

interface PaginationRootOptions {
    /** The controlled page number of the pagination. (1-indexed) */
    page?: number;
    /**
     * The default page number when initially rendered. (1-indexed)
     * Useful when you do not need to control the page number.
     */
    defaultPage?: number;
    /** Event handler called when the page number changes. */
    onPageChange?: (page: number) => void;
    /** The number of pages for the pagination. */
    count: number;
    /** The number of siblings to show around the current page item. */
    siblingCount?: number;
    /** Whether to always show the first page item. */
    showFirst?: boolean;
    /** Whether to always show the last page item. */
    showLast?: boolean;
    /**
     * Whether to always show the same number of items (to avoid content shift).
     * Special value: "no-ellipsis" does not count the ellipsis as an item (used when ellipsis are disabled).
     */
    fixedItems?: boolean | "no-ellipsis";
    /** The component to render as an item in the `Pagination.List`. */
    itemComponent: Component<{
        page: number;
    }>;
    /** The component to render as an ellipsis item in the `Pagination.List`. */
    ellipsisComponent: () => JSX.Element;
    /** Whether the pagination is disabled. */
    disabled?: boolean;
}
interface PaginationRootCommonProps<T extends HTMLElement = HTMLElement> {
    id: string;
    children: JSX.Element;
}
interface PaginationRootRenderProps extends PaginationRootCommonProps {
    "data-disabled": "" | undefined;
}
type PaginationRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = PaginationRootOptions & Partial<PaginationRootCommonProps<ElementOf<T>>>;
/**
 * A list of page number that allows users to change the current page.
 */
declare function PaginationRoot<T extends ValidComponent = "nav">(props: PolymorphicProps<T, PaginationRootProps<T>>): JSX.Element;

interface PaginationContextValue {
    count: Accessor<number>;
    siblingCount: Accessor<number>;
    showFirst: Accessor<boolean>;
    showLast: Accessor<boolean>;
    fixedItems: Accessor<boolean | "no-ellipsis">;
    isDisabled: Accessor<boolean>;
    renderItem: (page: number) => JSX.Element;
    renderEllipsis: () => JSX.Element;
    page: Accessor<number>;
    setPage: Setter<number>;
}
declare function usePaginationContext(): PaginationContextValue;

declare const Pagination: typeof PaginationRoot & {
    Ellipsis: typeof PaginationEllipsis;
    Item: typeof PaginationItem;
    Items: typeof PaginationItems;
    Next: typeof PaginationNext;
    Previous: typeof PaginationPrevious;
};

declare const index_Pagination: typeof Pagination;
type index_PaginationContextValue = PaginationContextValue;
type index_PaginationEllipsisCommonProps<T extends HTMLElement = HTMLElement> = PaginationEllipsisCommonProps<T>;
type index_PaginationEllipsisOptions = PaginationEllipsisOptions;
type index_PaginationEllipsisProps<T extends ValidComponent | HTMLElement = HTMLElement> = PaginationEllipsisProps<T>;
type index_PaginationEllipsisRenderProps = PaginationEllipsisRenderProps;
type index_PaginationItemCommonProps<T extends HTMLElement = HTMLElement> = PaginationItemCommonProps<T>;
type index_PaginationItemOptions = PaginationItemOptions;
type index_PaginationItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = PaginationItemProps<T>;
type index_PaginationItemRenderProps = PaginationItemRenderProps;
type index_PaginationItemsProps = PaginationItemsProps;
type index_PaginationNextCommonProps<T extends HTMLElement = HTMLElement> = PaginationNextCommonProps<T>;
type index_PaginationNextOptions = PaginationNextOptions;
type index_PaginationNextProps<T extends ValidComponent | HTMLElement = HTMLElement> = PaginationNextProps<T>;
type index_PaginationNextRenderProps = PaginationNextRenderProps;
type index_PaginationPreviousCommonProps<T extends HTMLElement = HTMLElement> = PaginationPreviousCommonProps<T>;
type index_PaginationPreviousOptions = PaginationPreviousOptions;
type index_PaginationPreviousProps<T extends ValidComponent | HTMLElement = HTMLElement> = PaginationPreviousProps<T>;
type index_PaginationPreviousRenderProps = PaginationPreviousRenderProps;
type index_PaginationRootCommonProps<T extends HTMLElement = HTMLElement> = PaginationRootCommonProps<T>;
type index_PaginationRootOptions = PaginationRootOptions;
type index_PaginationRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = PaginationRootProps<T>;
type index_PaginationRootRenderProps = PaginationRootRenderProps;
declare const index_usePaginationContext: typeof usePaginationContext;
declare namespace index {
  export {
    PaginationEllipsis as Ellipsis,
    PaginationItem as Item,
    PaginationItems as Items,
    PaginationNext as Next,
    index_Pagination as Pagination,
    index_PaginationContextValue as PaginationContextValue,
    index_PaginationEllipsisCommonProps as PaginationEllipsisCommonProps,
    index_PaginationEllipsisOptions as PaginationEllipsisOptions,
    index_PaginationEllipsisProps as PaginationEllipsisProps,
    index_PaginationEllipsisRenderProps as PaginationEllipsisRenderProps,
    index_PaginationItemCommonProps as PaginationItemCommonProps,
    index_PaginationItemOptions as PaginationItemOptions,
    index_PaginationItemProps as PaginationItemProps,
    index_PaginationItemRenderProps as PaginationItemRenderProps,
    index_PaginationItemsProps as PaginationItemsProps,
    index_PaginationNextCommonProps as PaginationNextCommonProps,
    index_PaginationNextOptions as PaginationNextOptions,
    index_PaginationNextProps as PaginationNextProps,
    index_PaginationNextRenderProps as PaginationNextRenderProps,
    index_PaginationPreviousCommonProps as PaginationPreviousCommonProps,
    index_PaginationPreviousOptions as PaginationPreviousOptions,
    index_PaginationPreviousProps as PaginationPreviousProps,
    index_PaginationPreviousRenderProps as PaginationPreviousRenderProps,
    index_PaginationRootCommonProps as PaginationRootCommonProps,
    index_PaginationRootOptions as PaginationRootOptions,
    index_PaginationRootProps as PaginationRootProps,
    index_PaginationRootRenderProps as PaginationRootRenderProps,
    PaginationPrevious as Previous,
    PaginationRoot as Root,
    index_usePaginationContext as usePaginationContext,
  };
}

export { PaginationRoot as A, Pagination as B, usePaginationContext as C, PaginationContextValue as D, PaginationEllipsisOptions as P, PaginationEllipsisCommonProps as a, PaginationEllipsisRenderProps as b, PaginationEllipsisProps as c, PaginationItemOptions as d, PaginationItemCommonProps as e, PaginationItemRenderProps as f, PaginationItemProps as g, PaginationItemsProps as h, index as i, PaginationNextOptions as j, PaginationNextCommonProps as k, PaginationNextRenderProps as l, PaginationNextProps as m, PaginationPreviousOptions as n, PaginationPreviousCommonProps as o, PaginationPreviousRenderProps as p, PaginationPreviousProps as q, PaginationRootOptions as r, PaginationRootCommonProps as s, PaginationRootRenderProps as t, PaginationRootProps as u, PaginationEllipsis as v, PaginationItem as w, PaginationItems as x, PaginationNext as y, PaginationPrevious as z };
