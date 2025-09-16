import { MaybeAccessor } from '@kobalte/utils';
import { Accessor } from 'solid-js';

type EventDetails<T> = {
    originalEvent: T;
    isContextMenu: boolean;
};
type PointerDownOutsideEvent = CustomEvent<EventDetails<PointerEvent>>;
type FocusOutsideEvent = CustomEvent<EventDetails<FocusEvent>>;
type InteractOutsideEvent = PointerDownOutsideEvent | FocusOutsideEvent;
interface CreateInteractOutsideProps {
    /** Whether the interact outside events should be listened or not. */
    isDisabled?: MaybeAccessor<boolean | undefined>;
    /**
     * When user interacts with the argument element outside the ref,
     * return `true` if the interaction should not trigger the "interact outside" handlers.
     */
    shouldExcludeElement?: (element: Element) => boolean;
    /**
     * Event handler called when a `pointerdown` event happens outside the ref.
     * Can be prevented.
     */
    onPointerDownOutside?: (event: PointerDownOutsideEvent) => void;
    /**
     * Event handler called when the focus moves outside the ref.
     * Can be prevented.
     */
    onFocusOutside?: (event: FocusOutsideEvent) => void;
    /**
     * Event handler called when an interaction happens outside the ref.
     * Specifically, when a `pointerdown` event happens outside or focus moves outside of it.
     * Can be prevented.
     */
    onInteractOutside?: (event: InteractOutsideEvent) => void;
}
declare function createInteractOutside<T extends Element>(props: CreateInteractOutsideProps, ref: Accessor<T | undefined>): void;

export { CreateInteractOutsideProps, FocusOutsideEvent, InteractOutsideEvent, PointerDownOutsideEvent, createInteractOutside };
