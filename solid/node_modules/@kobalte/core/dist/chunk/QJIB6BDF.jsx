// src/primitives/create-form-reset-listener/create-form-reset-listener.ts
import { createEffect, on, onCleanup } from "solid-js";
function createFormResetListener(element, handler) {
  createEffect(
    on(element, (element2) => {
      if (element2 == null) {
        return;
      }
      const form = getClosestForm(element2);
      if (form == null) {
        return;
      }
      form.addEventListener("reset", handler, { passive: true });
      onCleanup(() => {
        form.removeEventListener("reset", handler);
      });
    })
  );
}
function getClosestForm(element) {
  return isFormElement(element) ? element.form : element.closest("form");
}
function isFormElement(element) {
  return element.matches("textarea, input, select, button");
}

export {
  createFormResetListener
};
