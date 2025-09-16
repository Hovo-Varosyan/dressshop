import { MaybeAccessor } from '@kobalte/utils';

interface CreateHideOutsideProps {
    /** The elements that should remain visible. */
    targets: MaybeAccessor<Array<Element>>;
    /** Nothing will be hidden above this element. */
    root?: MaybeAccessor<HTMLElement | undefined>;
    /** Whether the hide outside behavior is disabled or not. */
    isDisabled?: MaybeAccessor<boolean | undefined>;
}
/**
 * Hides all elements in the DOM outside the given targets from screen readers
 * using aria-hidden, and returns a function to revert these changes.
 * In addition, changes to the DOM are watched and new elements
 * outside the targets are automatically hidden.
 */
declare function createHideOutside(props: CreateHideOutsideProps): void;
/**
 * Hides all elements in the DOM outside the given targets from screen readers using aria-hidden,
 * and returns a function to revert these changes. In addition, changes to the DOM are watched
 * and new elements outside the targets are automatically hidden.
 * @param targets - The elements that should remain visible.
 * @param root - Nothing will be hidden above this element.
 * @returns - A function to restore all hidden elements.
 */
declare function ariaHideOutside(targets: Element[], root?: HTMLElement): () => void;

export { CreateHideOutsideProps, ariaHideOutside, createHideOutside };
