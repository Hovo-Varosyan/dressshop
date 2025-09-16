// src/assertions.ts
var isFunction = (value) => {
  return typeof value === "function" && value.length > 0;
};
var buttonInputTypes = ["button", "color", "file", "image", "reset", "submit"];
var isButton = (tagName, type) => {
  if (tagName === "button") return true;
  if (tagName === "input" && type !== void 0) {
    return buttonInputTypes.indexOf(type) !== -1;
  }
  return false;
};
var dataIf = (condition) => condition ? "" : void 0;

export {
  isFunction,
  isButton,
  dataIf
};
