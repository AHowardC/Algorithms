function Slasher(arr, rm) {
  arr.splice(0,rm)
  return arr;
}

Slasher([1,2,3,4,5,6,7], 2)

// .splice() method changes the original array.
// .slice() method does not change the original array.
