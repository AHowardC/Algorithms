function findLongestWord(str){
  return str.split(' ').sort(function(a,b){
    return b.length - a.length;
  })[0];
 
}

findLongestWord('The quick brown fox jumped over the lazy dog');
//  var words = str.split(' ');
//  var longest = ''
// var fruits = [
//   'apple',
//   'mango',
//   'cherries'
// ];
// for (var i=0; i<fruits.length; i++){
//   console.log(fruits[i]);
// }