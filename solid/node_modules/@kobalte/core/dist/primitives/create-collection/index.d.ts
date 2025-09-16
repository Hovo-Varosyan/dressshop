import { Accessor } from 'solid-js';
import { C as Collection, a as CollectionNode, b as CollectionBase } from '../../types-f8ae18e5.js';
export { d as CollectionItem, c as CollectionItemWithRef } from '../../types-f8ae18e5.js';
import '@kobalte/utils';
import '../../types-6adf33e1.js';

type CollectionFactory<C extends Collection<CollectionNode>> = (node: Iterable<CollectionNode>) => C;
interface CreateCollectionProps<C extends Collection<CollectionNode>> extends CollectionBase {
    factory: CollectionFactory<C>;
}
declare function createCollection<C extends Collection<CollectionNode>>(props: CreateCollectionProps<C>, deps?: Array<Accessor<any>>): Accessor<C>;

declare function getItemCount(collection: Iterable<CollectionNode>): number;

export { Collection, CollectionBase, CollectionNode, CreateCollectionProps, createCollection, getItemCount };
