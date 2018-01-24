function getIndexToIns(arr, num) {
  // find place in sorted array
  arr.sort(function (a, b) {
    return a - b;
  })
  return num;
}

getIndexToIns([40,50], 45)
