function getIndexToIns(arr, num) {
  // find place in sorted array
  arr.sort(function (a, b) {
    return a - b;
  })
  
}

getIndexToIns([40,50], 45)
