// src/slider/utils.ts
function getNextSortedValues(prevValues, nextValue, atIndex) {
  const nextValues = [...prevValues];
  nextValues[atIndex] = nextValue;
  return nextValues.sort((a, b) => a - b);
}
function getClosestValueIndex(values, nextValue) {
  if (values.length === 1)
    return 0;
  const distances = values.map((value) => Math.abs(value - nextValue));
  const closestDistance = Math.min(...distances);
  const closestIndex = distances.indexOf(closestDistance);
  return nextValue < values[closestIndex] ? closestIndex : distances.lastIndexOf(closestDistance);
}
function getStepsBetweenValues(values) {
  return values.slice(0, -1).map((value, index) => values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = getStepsBetweenValues(values);
    const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
    return actualMinStepsBetweenValues >= minStepsBetweenValues;
  }
  return true;
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function stopEventDefaultAndPropagation(event) {
  event.preventDefault();
  event.stopPropagation();
}

export { getClosestValueIndex, getNextSortedValues, hasMinStepsBetweenValues, linearScale, stopEventDefaultAndPropagation };
