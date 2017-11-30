function findLongestWord(str){
  return str.split(' ').sort(function(a,b){
    return b.length - a.length;
  })[0];
 
}

findLongestWord('The quick brown fox jumped over the lazy dog');
//  var longest = ''
// var fruits = [
//   'apple',
//   'mango',
//   'cherries'
// ];
// for (var i=0; i<fruits.length; i++){
//   console.log(fruits[i]);
// }
// var words = str.split(' ');
  var longest = '';
  for(var word of words){
    if(word.length > longest.length)
    longest = word;
  }
  return longest.length;
