export declare const propTraps: ProxyHandler<{
    get: (k: string | number | symbol) => any;
    has: (k: string | number | symbol) => boolean;
    keys: () => string[];
}>;
