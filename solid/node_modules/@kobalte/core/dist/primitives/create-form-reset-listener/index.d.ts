import { Accessor } from 'solid-js';

/**
 * Listens for `reset` event on the closest `<form>` element and execute the given handler.
 */
declare function createFormResetListener(element: Accessor<HTMLElement | null | undefined>, handler: () => void): void;

export { createFormResetListener };
