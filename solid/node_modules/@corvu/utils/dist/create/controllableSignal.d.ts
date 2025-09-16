import { Accessor, Signal } from 'solid-js';

/**
 * Creates a simple reactive state with a getter and setter. Can be controlled by providing your own state through the `value` prop.
 * @param props.value - Controlled value of the state.
 * @param props.initialValue - Initial value of the state.
 * @param props.onChange - Callback fired when the value changes.
 * @returns ```typescript
 * [state: Accessor<T>, setState: Setter<T>]
 * ```
 */
declare function createControllableSignal<T>(props: {
    value?: Accessor<T | undefined>;
    onChange?: (value: T) => void;
}): Signal<T | undefined>;
declare function createControllableSignal<T>(props: {
    value?: Accessor<T | undefined>;
    initialValue: T;
    onChange?: (value: T) => void;
}): Signal<T>;

export { createControllableSignal as default };
