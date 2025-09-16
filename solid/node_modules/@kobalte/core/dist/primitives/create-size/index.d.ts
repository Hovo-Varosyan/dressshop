import { Accessor } from 'solid-js';

declare function createSize(ref: Accessor<HTMLElement | undefined>): {
    width: Accessor<number>;
    height: Accessor<number>;
};

export { createSize };
