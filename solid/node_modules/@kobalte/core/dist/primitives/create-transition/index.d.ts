import { MaybeAccessor } from '@kobalte/utils';
import { JSX, Accessor } from 'solid-js';

interface TransitionStyles {
    /** Styles for mounted state. */
    in: JSX.CSSProperties;
    /** Styles for unmounted state. */
    out: JSX.CSSProperties;
    /** Styles for both mounted and unmounted states. */
    common?: JSX.CSSProperties;
}

interface TransitionOptions {
    /** The transition styles. */
    transition: TransitionStyles;
    /** Transitions duration (in ms). */
    duration?: number;
    /** Exit transition duration (in ms). */
    exitDuration?: number;
    /** Delay before starting transitions (in ms). */
    delay?: number;
    /** Delay before starting the exit transition (in ms). */
    exitDelay?: number;
    /** Transitions timing function. */
    easing?: JSX.CSSProperties["transition-timing-function"];
    /** Exit transition timing function. */
    exitEasing?: JSX.CSSProperties["transition-timing-function"];
    /** A function that will be called when enter transition starts. */
    onBeforeEnter?: () => void;
    /** A function that will be called when enter transition ends. */
    onAfterEnter?: () => void;
    /** A function that will be called when exit transition starts. */
    onBeforeExit?: () => void;
    /** A function that will be called when exit transition ends. */
    onAfterExit?: () => void;
}
interface TransitionResult {
    /** Whether the element should be kept in the DOM. */
    keepMounted: Accessor<boolean>;
    /** The transition style to apply on the element. */
    style: Accessor<JSX.CSSProperties>;
}
/**
 * Primitive for working with enter/exit transitions.
 *
 * @param shouldMount Whether the component should be mounted.
 * @param options The transition options.
 */
declare function createTransition(shouldMount: MaybeAccessor<boolean>, options: MaybeAccessor<TransitionOptions>): TransitionResult;

export { TransitionOptions, TransitionResult, TransitionStyles, createTransition };
