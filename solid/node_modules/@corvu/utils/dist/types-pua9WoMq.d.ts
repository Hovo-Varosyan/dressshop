type EventHandlerEvent<T, E extends Event> = E & {
    currentTarget: T;
    target: Element;
};
type ElementOf<T> = T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : any;
type Ref<T> = T | ((element: T) => void);

export type { EventHandlerEvent as E, Ref as R, ElementOf as a };
