import * as solid_js from 'solid-js';
import { M as MaybeAccessor } from '../types-CfOU1RES.js';
import { FloatingState } from '../create/floating.js';
import '@floating-ui/dom';

declare const getFloatingStyle: (props: {
    strategy: MaybeAccessor<"absolute" | "fixed">;
    floatingState: MaybeAccessor<FloatingState>;
}) => solid_js.Accessor<{
    position: "absolute" | "fixed";
    top: string;
    left: string;
    width: string | undefined;
    height: string | undefined;
    'max-width': string | undefined;
    'max-height': string | undefined;
    '--corvu-floating-transform-origin': string | undefined;
}>;
declare const PositionToDirection: {
    top: string;
    bottom: string;
    left: string;
    right: string;
};

export { PositionToDirection, getFloatingStyle };
