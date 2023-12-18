function reduce(arr, fn, init, index = 0) {
  // Base case: if the index reaches the end of the array, return the accumulated result
  if (index === arr.length) {
    return init;
  }

  // Recursive case: call reduce with updated values
  const currentValue = arr[index];
  const accumulator = fn(init, currentValue, index, arr);

  return reduce(arr, fn, accumulator, index + 1);
}
module.exports = reduce;
