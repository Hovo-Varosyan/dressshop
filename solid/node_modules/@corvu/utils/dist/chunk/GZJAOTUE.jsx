// src/dom/lib.ts
var extractCSSregex = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
function stringStyleToObject(style) {
  const object = {};
  let match;
  while (match = extractCSSregex.exec(style)) {
    object[match[1]] = match[2];
  }
  return object;
}
function combineStyle(a, b) {
  if (typeof b === "string") {
    b = stringStyleToObject(b);
  }
  return { ...a, ...b };
}
var afterPaint = (fn) => requestAnimationFrame(() => requestAnimationFrame(fn));
var callEventHandler = (eventHandler, event) => {
  if (eventHandler) {
    if (typeof eventHandler === "function") {
      eventHandler(event);
    } else {
      eventHandler[0](eventHandler[1], event);
    }
  }
  return event.defaultPrevented;
};
var contains = (wrapper, target) => {
  if (wrapper.contains(target)) return true;
  let currentElement = target;
  while (currentElement) {
    if (currentElement === wrapper) return true;
    currentElement = currentElement._$host ?? currentElement.parentElement;
  }
  return false;
};
var sortByDocumentPosition = (a, b) => {
  const relativePosition = a.compareDocumentPosition(b);
  if (relativePosition & Node.DOCUMENT_POSITION_PRECEDING || relativePosition & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  if (relativePosition & Node.DOCUMENT_POSITION_FOLLOWING || relativePosition & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  return 0;
};

export {
  combineStyle,
  afterPaint,
  callEventHandler,
  contains,
  sortByDocumentPosition
};
