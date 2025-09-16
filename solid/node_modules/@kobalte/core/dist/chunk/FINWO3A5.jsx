// src/primitives/create-collection/get-item-count.ts
var cache = /* @__PURE__ */ new WeakMap();
function getItemCount(collection) {
  let count = cache.get(collection);
  if (count != null) {
    return count;
  }
  count = 0;
  for (const item of collection) {
    if (item.type === "item") {
      count++;
    }
  }
  cache.set(collection, count);
  return count;
}

export {
  getItemCount
};
