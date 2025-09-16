import { MaybeAccessor } from '@kobalte/utils';
import { Accessor } from 'solid-js';

interface CreateFocusScopeProps {
    /** Whether focus cannot escape the focus scope via keyboard, pointer, or a programmatic focus. */
    trapFocus?: MaybeAccessor<boolean | undefined>;
    /**
     * Event handler called when autofocusing on mount.
     * Can be prevented.
     */
    onMountAutoFocus?: (event: Event) => void;
    /**
     * Event handler called when autofocusing on unmount.
     * Can be prevented.
     */
    onUnmountAutoFocus?: (event: Event) => void;
}
declare function createFocusScope<T extends HTMLElement>(props: CreateFocusScopeProps, ref: Accessor<T | undefined>): void;

export { CreateFocusScopeProps, createFocusScope };
