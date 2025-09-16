import { M as MaybeAccessor } from '../types-CfOU1RES.js';

/**
 * Modifies the given element's style and reverts it back to its original style when `onCleanup` is called.
 *
 * @param props.key - Styles with the same key will be tracked together and only reverted once all of them are cleaned up.
 * @param props.element - The element to modify the style of.
 * @param props.style - Styles to apply to the element.
 * @param props.properties - Properties to set on the element's style.
 * @param props.cleanup - A callback to call after the style is reverted back to its original style.
 */
declare const createStyle: (props: {
    key: string;
    element: HTMLElement;
    style?: MaybeAccessor<Partial<CSSStyleDeclaration>>;
    properties?: MaybeAccessor<{
        key: string;
        value: string;
    }[]>;
    cleanup?: () => void;
}) => void;

export { createStyle as default };
