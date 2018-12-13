function palindrome(str) {
	var reg = /[\W_]/g;
	var smallStr = str.toLowerCase().replace(reg, '');

	var reversed = smallStr.split('').reverse().join('');
	if (reversed === str) {
		return true	

	}
	return false
}



palindrome('racecar')
// .split('')
// .reverse()
// .join('')

// if reversed str is the same as forward str then it is a palindrome
// return a boolean

function palindrome(str){
  let reversed = '';
  

  for(let i of str){
    reversed = i + reversed;
    console.log(reversed);
  }
  // const reversed = str.split('').reverse().join('');
  if(str == reversed){
    return true;
  }
  return false;
}


console.log(palindrome('hello world!'));

// // reverse a str
// const someStr = '89889';
// function revStr(str){
// //   let reversed =str.split('').reverse().join('');
// //   console.log(reversed);
//   let reversed = '';
//   for(let i of str){
//     reversed = i + reversed;
//   }
//   if(reversed == str){
//     return console.log(`${str} is a palindrome`);
//   }else{
//     return console.log(`${str} is not a palindrome`);
//   }
// }

// revStr(someStr);