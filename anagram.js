
// checks if string A is equal to string B
function anagrams(strA, strB){
  return cleanStr(strA) === cleanStr(strB);
}

// removes white space, keeps only letters and removes special characters, converts to lowercase and sorts characters
function cleanStr(str){
  return str.replace(/[^\w]/g, '')
  .toLowerCase()
  .split('')
  .sort()
  .join('');
}


console.log(anagrams('hello world','world! HELLO'));

