function reverseString(str){
  var result = '';
  // var str = 'My name is a bond. A James BOND.';
  var strSplit = str.split('');
  // console.log(strSplit);

  for(let i = strSplit.length; i >= 0; i--){
    result += strSplit[i];
  }
  return result;
}

reverseString('My bond.');

// function reverse(str){
//   let reversed = '';
//   for(let char of str){
//     reversed = char + " _ " + reversed
//   }
//   return reversed;
// }


function reverse(str){
  return str.split('').reduce((reversed, char)=>
     char + reversed
  , "");
}


console.log(reverse('apple'));