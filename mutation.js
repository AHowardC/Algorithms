function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();

  for (var i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i])=== -1) {
      return false;
    }
  }


  return true;
}

// .indexOf() method gives the index Of an array.
// .toLowerCase() method converts array letters to to LowerCase.
mutation(['hello','hey'])
