import { MaybeAccessor } from '@kobalte/utils';
import { Accessor } from 'solid-js';

interface CreateToggleStateProps {
    /** The controlled selected state. */
    isSelected?: MaybeAccessor<boolean | undefined>;
    /**
     * The default selected state when initially rendered.
     * Useful when you do not need to control the selected state.
     */
    defaultIsSelected?: MaybeAccessor<boolean | undefined>;
    /** Whether the selected state cannot be changed by the user. */
    isDisabled?: MaybeAccessor<boolean | undefined>;
    /** Whether the selected state cannot be changed by the user. */
    isReadOnly?: MaybeAccessor<boolean | undefined>;
    /** Event handler called when the selected state changes. */
    onSelectedChange?: (isSelected: boolean) => void;
}
interface ToggleState {
    /** The selected state. */
    isSelected: Accessor<boolean>;
    /** Updates the selected state. */
    setIsSelected: (isSelected: boolean) => void;
    /** Toggle the selected state. */
    toggle: () => void;
}
/**
 * Provides state management for toggle components like checkboxes and switches.
 */
declare function createToggleState(props?: CreateToggleStateProps): ToggleState;

export { CreateToggleStateProps, ToggleState, createToggleState };
