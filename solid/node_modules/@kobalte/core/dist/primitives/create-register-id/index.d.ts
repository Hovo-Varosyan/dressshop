import { Setter } from 'solid-js';

/**
 * Create a function that call the setter with an id and return a function to reset it.
 */
declare function createRegisterId(setter: Setter<string | undefined>): (id: string) => () => undefined;

export { createRegisterId };
