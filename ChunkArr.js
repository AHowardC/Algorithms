function ChunkArrayInGroup(arr, size) {
  var groups = [];
  while (arr.length > 0) {
      groups.push(arr.slice(0, size));
      arr = arr.slice(size);
  }
  return arr;
}

ChunkArrayInGroup([1,2,3,4,5,6,7,8,9], 3);

// ChunkArrayInGroup takes two args; first an array, second a number
// methods .push(), .slice()
// .splice() method will change original array
// .reduce(higerOrderFunc) reduces the array to a single value.
()