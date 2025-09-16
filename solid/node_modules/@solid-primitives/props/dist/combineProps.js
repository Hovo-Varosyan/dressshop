import { mergeProps } from "solid-js";
import { access, chain, reverseChain } from "@solid-primitives/utils";
import { propTraps } from "./propTraps.js";
const extractCSSregex = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
/**
 * converts inline string styles to object form
 * @example
 * const styles = stringStyleToObject("margin: 24px; border: 1px solid #121212");
 * styles; // { margin: "24px", border: "1px solid #121212" }
 * */
export function stringStyleToObject(style) {
    const object = {};
    let match;
    while ((match = extractCSSregex.exec(style))) {
        object[match[1]] = match[2];
    }
    return object;
}
export function combineStyle(a, b) {
    if (typeof a === "string") {
        if (typeof b === "string")
            return `${a};${b}`;
        a = stringStyleToObject(a);
    }
    else if (typeof b === "string") {
        b = stringStyleToObject(b);
    }
    return { ...a, ...b };
}
const reduce = (sources, key, calc) => {
    let v = undefined;
    for (const props of sources) {
        const propV = access(props)[key];
        if (!v)
            v = propV;
        else if (propV)
            v = calc(v, propV);
    }
    return v;
};
export function combineProps(...args) {
    const restArgs = Array.isArray(args[0]);
    const sources = (restArgs ? args[0] : args);
    if (sources.length === 1)
        return sources[0];
    const chainFn = restArgs && args[1]?.reverseEventHandlers
        ? reverseChain
        : chain;
    // create a map of event listeners to be chained
    const listeners = {};
    for (const props of sources) {
        const propsObj = access(props);
        for (const key in propsObj) {
            // skip non event listeners
            if (key[0] === "o" && key[1] === "n" && key[2]) {
                const v = propsObj[key];
                const name = key.toLowerCase();
                const callback = typeof v === "function"
                    ? v
                    : // jsx event handlers can be tuples of [callback, arg]
                        Array.isArray(v)
                            ? v.length === 1
                                ? v[0]
                                : v[0].bind(void 0, v[1])
                            : void 0;
                if (callback)
                    listeners[name] ? listeners[name].push(callback) : (listeners[name] = [callback]);
                else
                    delete listeners[name];
            }
        }
    }
    const merge = mergeProps(...sources);
    return new Proxy({
        get(key) {
            if (typeof key !== "string")
                return Reflect.get(merge, key);
            // Combine style prop
            if (key === "style")
                return reduce(sources, "style", combineStyle);
            // chain props.ref assignments
            if (key === "ref") {
                const callbacks = [];
                for (const props of sources) {
                    const cb = access(props)[key];
                    if (typeof cb === "function")
                        callbacks.push(cb);
                }
                return chainFn(callbacks);
            }
            // Chain event listeners
            if (key[0] === "o" && key[1] === "n" && key[2]) {
                const callbacks = listeners[key.toLowerCase()];
                return callbacks ? chainFn(callbacks) : Reflect.get(merge, key);
            }
            // Merge classes or classNames
            if (key === "class" || key === "className")
                return reduce(sources, key, (a, b) => `${a} ${b}`);
            // Merge classList objects, keys in the last object overrides all previous ones.
            if (key === "classList")
                return reduce(sources, key, (a, b) => ({ ...a, ...b }));
            return Reflect.get(merge, key);
        },
        has(key) {
            return Reflect.has(merge, key);
        },
        keys() {
            return Object.keys(merge);
        },
    }, propTraps);
}
// type check
// const com = combineProps(
//   {
//     onSomething: 123,
//     onWheel: (e: WheelEvent) => 213,
//     something: "foo",
//     style: { margin: "24px" },
//     once: true,
//     onMount: (fn: VoidFunction) => undefined
//   },
//   {
//     onSomething: [(n: number, s: string) => "fo", 123],
//     once: "ovv"
//   },
//   {
//     onWheel: false,
//     onMount: (n: number) => void 0
//   }
// );
// com.onSomething; // (s: string) => void;
// com.once; // string;
// com.onWheel; // false;
// com.onMount; // ((fn: VoidFunction) => undefined) & ((n: number) => undefined);
// com.something; // string;
// com.style; // string | JSX.CSSProperties;
