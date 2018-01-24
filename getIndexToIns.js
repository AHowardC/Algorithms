function getIndexToIns(arr, num) {
  // find place in sorted array
  console.log(arr);
  arr.sort(function (a, b) {
    return a - b;
  })

  console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }

  return arr.length;
}

getIndexToIns([40,50,3], 45)
