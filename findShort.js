// return the shortest word in a String
function findShort(str){
  // turn the string into an array
  var strArr = str.split(' ');

  // map through the array and put it into a var
  var lengths = strArr.map(function(word){
    return word.length;
  });

  // sort the array
  var sortedArr = lengths.sort(function(a, b){
  return a - b;
  });

  // return sorted array[0]
  return sortedArr[0];
}

findShort('will find th shortesiit word');
