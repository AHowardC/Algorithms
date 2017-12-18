function ChunkArrayInGroup(arr, size) {
  var groups = [];
  while (arr.length > 0) {
      groups.push(arr.slice(0, size));
      arr = arr.slice(size);
  }
  return arr;
}

ChunkArrayInGroup([1,2,3,4,5,6,7,8,9], 3);

// methods .push(), .slice()
// .splice() method will change original array
// cmky
