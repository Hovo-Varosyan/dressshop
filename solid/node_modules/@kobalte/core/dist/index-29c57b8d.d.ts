import { u as ListboxRoot, a as ListboxItem, b as ListboxItemDescription, c as ListboxItemLabel, d as ListboxSection, e as ListboxItemCommonProps, f as ListboxItemDescriptionCommonProps, g as ListboxItemDescriptionOptions, h as ListboxItemDescriptionProps, i as ListboxItemDescriptionRenderProps, j as ListboxItemLabelCommonProps, k as ListboxItemLabelOptions, l as ListboxItemLabelProps, m as ListboxItemLabelRenderProps, n as ListboxItemOptions, o as ListboxItemProps, p as ListboxItemRenderProps, v as ListboxRootCommonProps, w as ListboxRootOptions, x as ListboxRootProps, y as ListboxRootRenderProps, q as ListboxSectionCommonProps, r as ListboxSectionOptions, s as ListboxSectionProps, t as ListboxSectionRenderProps } from './listbox-section-58338bda.js';
import { L as ListboxItemIndicator, a as ListboxItemIndicatorCommonProps, b as ListboxItemIndicatorOptions, c as ListboxItemIndicatorProps, d as ListboxItemIndicatorRenderProps } from './listbox-item-indicator-b8390ce9.js';
import { Accessor } from 'solid-js';
import { L as ListState } from './create-list-state-d9a0f1f2.js';

interface ListboxContextValue {
    listState: Accessor<ListState>;
    generateId: (part: string) => string;
    shouldUseVirtualFocus: Accessor<boolean | undefined>;
    shouldSelectOnPressUp: Accessor<boolean | undefined>;
    shouldFocusOnHover: Accessor<boolean | undefined>;
    isVirtualized: Accessor<boolean | undefined>;
}
declare function useListboxContext(): ListboxContextValue;

declare const Listbox: typeof ListboxRoot & {
    Item: typeof ListboxItem;
    ItemDescription: typeof ListboxItemDescription;
    ItemIndicator: typeof ListboxItemIndicator;
    ItemLabel: typeof ListboxItemLabel;
    Section: typeof ListboxSection;
};

declare const index_Listbox: typeof Listbox;
type index_ListboxContextValue = ListboxContextValue;
declare const index_ListboxItemCommonProps: typeof ListboxItemCommonProps;
declare const index_ListboxItemDescriptionCommonProps: typeof ListboxItemDescriptionCommonProps;
declare const index_ListboxItemDescriptionOptions: typeof ListboxItemDescriptionOptions;
declare const index_ListboxItemDescriptionProps: typeof ListboxItemDescriptionProps;
declare const index_ListboxItemDescriptionRenderProps: typeof ListboxItemDescriptionRenderProps;
declare const index_ListboxItemIndicatorCommonProps: typeof ListboxItemIndicatorCommonProps;
declare const index_ListboxItemIndicatorOptions: typeof ListboxItemIndicatorOptions;
declare const index_ListboxItemIndicatorProps: typeof ListboxItemIndicatorProps;
declare const index_ListboxItemIndicatorRenderProps: typeof ListboxItemIndicatorRenderProps;
declare const index_ListboxItemLabelCommonProps: typeof ListboxItemLabelCommonProps;
declare const index_ListboxItemLabelOptions: typeof ListboxItemLabelOptions;
declare const index_ListboxItemLabelProps: typeof ListboxItemLabelProps;
declare const index_ListboxItemLabelRenderProps: typeof ListboxItemLabelRenderProps;
declare const index_ListboxItemOptions: typeof ListboxItemOptions;
declare const index_ListboxItemProps: typeof ListboxItemProps;
declare const index_ListboxItemRenderProps: typeof ListboxItemRenderProps;
declare const index_ListboxRootCommonProps: typeof ListboxRootCommonProps;
declare const index_ListboxRootOptions: typeof ListboxRootOptions;
declare const index_ListboxRootProps: typeof ListboxRootProps;
declare const index_ListboxRootRenderProps: typeof ListboxRootRenderProps;
declare const index_ListboxSectionCommonProps: typeof ListboxSectionCommonProps;
declare const index_ListboxSectionOptions: typeof ListboxSectionOptions;
declare const index_ListboxSectionProps: typeof ListboxSectionProps;
declare const index_ListboxSectionRenderProps: typeof ListboxSectionRenderProps;
declare const index_useListboxContext: typeof useListboxContext;
declare namespace index {
  export {
    ListboxItem as Item,
    ListboxItemDescription as ItemDescription,
    ListboxItemIndicator as ItemIndicator,
    ListboxItemLabel as ItemLabel,
    index_Listbox as Listbox,
    index_ListboxContextValue as ListboxContextValue,
    index_ListboxItemCommonProps as ListboxItemCommonProps,
    index_ListboxItemDescriptionCommonProps as ListboxItemDescriptionCommonProps,
    index_ListboxItemDescriptionOptions as ListboxItemDescriptionOptions,
    index_ListboxItemDescriptionProps as ListboxItemDescriptionProps,
    index_ListboxItemDescriptionRenderProps as ListboxItemDescriptionRenderProps,
    index_ListboxItemIndicatorCommonProps as ListboxItemIndicatorCommonProps,
    index_ListboxItemIndicatorOptions as ListboxItemIndicatorOptions,
    index_ListboxItemIndicatorProps as ListboxItemIndicatorProps,
    index_ListboxItemIndicatorRenderProps as ListboxItemIndicatorRenderProps,
    index_ListboxItemLabelCommonProps as ListboxItemLabelCommonProps,
    index_ListboxItemLabelOptions as ListboxItemLabelOptions,
    index_ListboxItemLabelProps as ListboxItemLabelProps,
    index_ListboxItemLabelRenderProps as ListboxItemLabelRenderProps,
    index_ListboxItemOptions as ListboxItemOptions,
    index_ListboxItemProps as ListboxItemProps,
    index_ListboxItemRenderProps as ListboxItemRenderProps,
    index_ListboxRootCommonProps as ListboxRootCommonProps,
    index_ListboxRootOptions as ListboxRootOptions,
    index_ListboxRootProps as ListboxRootProps,
    index_ListboxRootRenderProps as ListboxRootRenderProps,
    index_ListboxSectionCommonProps as ListboxSectionCommonProps,
    index_ListboxSectionOptions as ListboxSectionOptions,
    index_ListboxSectionProps as ListboxSectionProps,
    index_ListboxSectionRenderProps as ListboxSectionRenderProps,
    ListboxRoot as Root,
    ListboxSection as Section,
    index_useListboxContext as useListboxContext,
  };
}

export { Listbox as L, ListboxContextValue as a, index as i, useListboxContext as u };
