// src/scroll/lib.ts
var getScrollDimensions = (element, axis) => {
  switch (axis) {
    case "x":
      return [element.clientWidth, element.scrollLeft, element.scrollWidth];
    case "y":
      return [element.clientHeight, element.scrollTop, element.scrollHeight];
  }
};
var isScrollContainer = (element, axis) => {
  const styles = getComputedStyle(element);
  const overflow = axis === "x" ? styles.overflowX : styles.overflowY;
  return overflow === "auto" || overflow === "scroll" || // The HTML element is a scroll container if it has overflow visible
  element.tagName === "HTML" && overflow === "visible";
};
var getScrollAtLocation = (location, axis, stopAt) => {
  const directionFactor = axis === "x" && window.getComputedStyle(location).direction === "rtl" ? -1 : 1;
  let currentElement = location;
  let availableScroll = 0;
  let availableScrollTop = 0;
  let wrapperReached = false;
  do {
    const [clientSize, scrollOffset, scrollSize] = getScrollDimensions(
      currentElement,
      axis
    );
    const scrolled = scrollSize - clientSize - directionFactor * scrollOffset;
    if ((scrollOffset !== 0 || scrolled !== 0) && isScrollContainer(currentElement, axis)) {
      availableScroll += scrolled;
      availableScrollTop += scrollOffset;
    }
    if (currentElement === (stopAt ?? document.documentElement)) {
      wrapperReached = true;
    } else {
      currentElement = currentElement._$host ?? currentElement.parentElement;
    }
  } while (currentElement && !wrapperReached);
  return [availableScroll, availableScrollTop];
};
export {
  getScrollAtLocation
};
