import * as solid_js from 'solid-js';
import { M as MaybeAccessor } from '../types-CfOU1RES.js';

declare const createSize: (props: {
    element: MaybeAccessor<HTMLElement | null>;
    dimension: MaybeAccessor<"width" | "height">;
}) => solid_js.Accessor<number>;

export { createSize as default };
