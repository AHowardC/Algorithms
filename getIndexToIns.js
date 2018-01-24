function getIndexToIns(arr, num) {
  // find place in sorted array
  console.log(arr);
  arr.sort(function (a, b) {
    return a - b;
  })
  console.log(arr);
}

getIndexToIns([40,50], 45)
