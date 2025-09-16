import * as solid_js from 'solid-js';
import { FlowComponent } from 'solid-js';
import { MaybeAccessor } from '@kobalte/utils';
import { D as DomCollectionItem } from '../../types-6adf33e1.js';

interface CreateDomCollectionProps<T extends DomCollectionItem = DomCollectionItem> {
    /** The controlled items state of the collection. */
    items?: MaybeAccessor<Array<T> | undefined>;
    /** Event handler called when the items state of the collection changes. */
    onItemsChange?: (items: Array<T>) => void;
}
declare function createDomCollection<T extends DomCollectionItem = DomCollectionItem>(props?: CreateDomCollectionProps<T>): {
    DomCollectionProvider: FlowComponent<{}, solid_js.JSX.Element>;
};

interface CreateDomCollectionItemProps<T extends DomCollectionItem = DomCollectionItem> {
    /** A function to map a data source item to a dom collection item. */
    getItem: () => T;
    /** Whether the item should be registered to the state. */
    shouldRegisterItem?: MaybeAccessor<boolean | undefined>;
}
declare function createDomCollectionItem<T extends DomCollectionItem = DomCollectionItem>(props: CreateDomCollectionItemProps<T>): void;

interface DomCollectionContextValue<T extends DomCollectionItem = DomCollectionItem> {
    registerItem: (item: T) => () => void;
}
declare const DomCollectionContext: solid_js.Context<DomCollectionContextValue<DomCollectionItem> | undefined>;
declare function useOptionalDomCollectionContext(): DomCollectionContextValue<DomCollectionItem> | undefined;
declare function useDomCollectionContext<T extends DomCollectionItem = DomCollectionItem>(): DomCollectionContextValue<T>;

export { CreateDomCollectionItemProps, CreateDomCollectionProps, DomCollectionContext, DomCollectionContextValue, DomCollectionItem, createDomCollection, createDomCollectionItem, useDomCollectionContext, useOptionalDomCollectionContext };
