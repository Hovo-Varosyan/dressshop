import { access, getDocument, EventKey } from '@kobalte/utils';
import { createEffect, onCleanup } from 'solid-js';
import { isServer } from 'solid-js/web';

// src/primitives/create-escape-key-down/create-escape-key-down.ts
function createEscapeKeyDown(props) {
  const handleKeyDown = (event) => {
    if (event.key === EventKey.Escape) {
      props.onEscapeKeyDown?.(event);
    }
  };
  createEffect(() => {
    if (isServer) {
      return;
    }
    if (access(props.isDisabled)) {
      return;
    }
    const document = props.ownerDocument?.() ?? getDocument();
    document.addEventListener("keydown", handleKeyDown);
    onCleanup(() => {
      document.removeEventListener("keydown", handleKeyDown);
    });
  });
}

export { createEscapeKeyDown };
