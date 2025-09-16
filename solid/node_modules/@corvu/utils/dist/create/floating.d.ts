import * as solid_js from 'solid-js';
import { M as MaybeAccessor } from '../types-CfOU1RES.js';
import { OffsetOptions, ShiftOptions, FlipOptions, Padding, DetectOverflowOptions, AutoPlacementOptions, HideOptions, InlineOptions, Placement, Strategy } from '@floating-ui/dom';

type FloatingOptions = {
    offset?: OffsetOptions;
    shift?: boolean | ShiftOptions;
    flip?: boolean | FlipOptions;
    arrow?: Padding;
    size?: DetectOverflowOptions & {
        matchSize?: boolean;
        fitViewPort?: boolean;
    };
    autoPlacement?: boolean | AutoPlacementOptions;
    hide?: boolean | HideOptions;
    inline?: boolean | InlineOptions;
};
type FloatingState = {
    placement: Placement;
    x: number;
    y: number;
    width: number | null;
    height: number | null;
    maxWidth: number | null;
    maxHeight: number | null;
    arrowX: number | null;
    arrowY: number | null;
};
declare const createFloating: (props: {
    enabled?: MaybeAccessor<boolean>;
    reference: MaybeAccessor<HTMLElement | null>;
    floating: MaybeAccessor<HTMLElement | null>;
    arrow?: MaybeAccessor<HTMLElement | null>;
    placement?: MaybeAccessor<Placement>;
    strategy?: MaybeAccessor<Strategy>;
    options?: MaybeAccessor<FloatingOptions | null>;
}) => solid_js.Accessor<FloatingState>;

export { type FloatingOptions, type FloatingState, createFloating as default };
