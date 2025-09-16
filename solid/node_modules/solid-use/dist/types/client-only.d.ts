import type { Component, JSX } from 'solid-js';
export declare const createClientSignal: () => (() => boolean);
export interface ClientOnlyProps {
    fallback?: JSX.Element;
    children?: JSX.Element;
}
export declare const ClientOnly: (props: ClientOnlyProps) => JSX.Element;
export declare function clientOnly<T extends Component<any>>(fn: () => Promise<{
    default: T;
}>): T;
export declare function clientComponent<T extends Component<any>>(Comp: T): T;
//# sourceMappingURL=client-only.d.ts.map