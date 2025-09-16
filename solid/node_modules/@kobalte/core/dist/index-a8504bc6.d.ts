import * as solid_js from 'solid-js';
import { ValidComponent, JSX } from 'solid-js';
import { ElementOf, PolymorphicProps } from './polymorphic/index.js';

interface BreadcrumbsLinkOptions {
    /** Whether the breadcrumb link represents the current page. */
    current?: boolean;
}
interface BreadcrumbsLinkCommonProps<T extends HTMLElement = HTMLElement> {
    /** Whether the breadcrumb link is disabled. */
    disabled: boolean;
    "aria-current": string | undefined;
}
interface BreadcrumbsLinkRenderProps extends BreadcrumbsLinkCommonProps {
    "data-current": string | undefined;
}
type BreadcrumbsLinkProps<T extends ValidComponent | HTMLElement = HTMLElement> = BreadcrumbsLinkOptions & Partial<BreadcrumbsLinkCommonProps<ElementOf<T>>>;
/**
 * The breadcrumbs link.
 */
declare function BreadcrumbsLink<T extends ValidComponent = "a">(props: PolymorphicProps<T, BreadcrumbsLinkProps<T>>): solid_js.JSX.Element;

declare const BREADCRUMBS_INTL_TRANSLATIONS: {
    breadcrumbs: string;
};
type BreadcrumbsIntlTranslations = typeof BREADCRUMBS_INTL_TRANSLATIONS;

interface BreadcrumbsRootOptions {
    /**
     * The visual separator between each breadcrumb item.
     * It will be used as the default children of `Breadcrumbs.Separator`.
     */
    separator?: string | JSX.Element;
    /** The localized strings of the component. */
    translations?: BreadcrumbsIntlTranslations;
}
interface BreadcrumbsRootCommonProps<T extends HTMLElement = HTMLElement> {
}
type BreadcrumbsRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = BreadcrumbsRootOptions & Partial<BreadcrumbsRootCommonProps<ElementOf<T>>>;
/**
 * Breadcrumbs show hierarchy and navigational context for a user’s location within an application.
 */
declare function BreadcrumbsRoot<T extends ValidComponent = "nav">(props: PolymorphicProps<T, BreadcrumbsRootProps<T>>): JSX.Element;

interface BreadcrumbsSeparatorOptions {
}
interface BreadcrumbsSeparatorCommonProps<T extends HTMLElement = HTMLElement> {
}
interface BreadcrumbsSeparatorRenderProps extends BreadcrumbsSeparatorCommonProps {
    children: JSX.Element;
    "aria-hidden": "true";
}
type BreadcrumbsSeparatorProps<T extends ValidComponent | HTMLElement = HTMLElement> = BreadcrumbsSeparatorOptions & Partial<BreadcrumbsSeparatorCommonProps<ElementOf<T>>>;
/**
 * The visual separator between each breadcrumb items.
 * It will not be visible by screen readers.
 */
declare function BreadcrumbsSeparator<T extends ValidComponent = "span">(props: PolymorphicProps<T, BreadcrumbsSeparatorProps<T>>): JSX.Element;

interface BreadcrumbsContextValue {
    separator: () => string | JSX.Element;
}
declare function useBreadcrumbsContext(): BreadcrumbsContextValue;

declare const Breadcrumbs: typeof BreadcrumbsRoot & {
    Link: typeof BreadcrumbsLink;
    Separator: typeof BreadcrumbsSeparator;
};

declare const index_Breadcrumbs: typeof Breadcrumbs;
type index_BreadcrumbsContextValue = BreadcrumbsContextValue;
type index_BreadcrumbsLinkCommonProps<T extends HTMLElement = HTMLElement> = BreadcrumbsLinkCommonProps<T>;
type index_BreadcrumbsLinkOptions = BreadcrumbsLinkOptions;
type index_BreadcrumbsLinkProps<T extends ValidComponent | HTMLElement = HTMLElement> = BreadcrumbsLinkProps<T>;
type index_BreadcrumbsLinkRenderProps = BreadcrumbsLinkRenderProps;
type index_BreadcrumbsRootOptions = BreadcrumbsRootOptions;
type index_BreadcrumbsRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = BreadcrumbsRootProps<T>;
type index_BreadcrumbsSeparatorCommonProps<T extends HTMLElement = HTMLElement> = BreadcrumbsSeparatorCommonProps<T>;
type index_BreadcrumbsSeparatorOptions = BreadcrumbsSeparatorOptions;
type index_BreadcrumbsSeparatorProps<T extends ValidComponent | HTMLElement = HTMLElement> = BreadcrumbsSeparatorProps<T>;
type index_BreadcrumbsSeparatorRenderProps = BreadcrumbsSeparatorRenderProps;
declare const index_useBreadcrumbsContext: typeof useBreadcrumbsContext;
declare namespace index {
  export {
    index_Breadcrumbs as Breadcrumbs,
    index_BreadcrumbsContextValue as BreadcrumbsContextValue,
    index_BreadcrumbsLinkCommonProps as BreadcrumbsLinkCommonProps,
    index_BreadcrumbsLinkOptions as BreadcrumbsLinkOptions,
    index_BreadcrumbsLinkProps as BreadcrumbsLinkProps,
    index_BreadcrumbsLinkRenderProps as BreadcrumbsLinkRenderProps,
    index_BreadcrumbsRootOptions as BreadcrumbsRootOptions,
    index_BreadcrumbsRootProps as BreadcrumbsRootProps,
    index_BreadcrumbsSeparatorCommonProps as BreadcrumbsSeparatorCommonProps,
    index_BreadcrumbsSeparatorOptions as BreadcrumbsSeparatorOptions,
    index_BreadcrumbsSeparatorProps as BreadcrumbsSeparatorProps,
    index_BreadcrumbsSeparatorRenderProps as BreadcrumbsSeparatorRenderProps,
    BreadcrumbsLink as Link,
    BreadcrumbsRoot as Root,
    BreadcrumbsSeparator as Separator,
    index_useBreadcrumbsContext as useBreadcrumbsContext,
  };
}

export { BreadcrumbsLinkOptions as B, BreadcrumbsLinkCommonProps as a, BreadcrumbsLinkRenderProps as b, BreadcrumbsLinkProps as c, BreadcrumbsRootOptions as d, BreadcrumbsRootProps as e, BreadcrumbsSeparatorOptions as f, BreadcrumbsSeparatorCommonProps as g, BreadcrumbsSeparatorRenderProps as h, index as i, BreadcrumbsSeparatorProps as j, BreadcrumbsLink as k, BreadcrumbsRoot as l, BreadcrumbsSeparator as m, Breadcrumbs as n, BreadcrumbsContextValue as o, useBreadcrumbsContext as u };
