import { Accessor } from 'solid-js';
import { M as MaybeAccessor } from '../types-CfOU1RES.js';

declare const createTooltip: (props: {
    id: MaybeAccessor<string>;
    group: MaybeAccessor<true | string | null>;
    open: Accessor<boolean>;
    close: () => void;
    trigger: MaybeAccessor<HTMLElement | null>;
    content: MaybeAccessor<HTMLElement | null>;
    openOnFocus: MaybeAccessor<boolean>;
    openOnHover: MaybeAccessor<boolean>;
    closeOnPointerDown: MaybeAccessor<boolean>;
    closeOnScroll: MaybeAccessor<boolean>;
    hoverableContent: MaybeAccessor<boolean>;
    openDelay: MaybeAccessor<number>;
    closeDelay: MaybeAccessor<number>;
    skipDelayDuration: MaybeAccessor<number>;
    onHover?: (event: PointerEvent) => void;
    onLeave?: (event: PointerEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onPointerDown?: (event: PointerEvent) => void;
    onScroll?: (event: Event) => void;
}) => void;

export { createTooltip as default };
