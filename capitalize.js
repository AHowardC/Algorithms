// function capitalize(str){
// //   split(' ') string of words into array of words
// //   word[0].toUpperCase()
// //   .join('') back into string
//     const word = str.split(' ');
//   console.log(word);
   
// //   loop through string
// //   if(str[i] == ' '){
// //     str[i]+1 .toUpperCase()
// //     return string
// //   }
// }
// capitalize('this is a sentence');

// // const someStr = 'this is a sentence';
// // const word = 'here';
// // const start = word[0].toUpperCase();
// // const rest = word.slice(1);
// // console.log(start + rest);

// make an empty array 'words'
// split the input string by spaces to get an array
// for each word in the array
// uppercase the first letter of the word
// join first letter with rest of the string
// push result into words array
// join words into a string and return it

// function capitalize(str){
//   const words = [];
  
//   for(let word of str.split(' ')){
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return console.log(words.join(' '));
// }
function capitalize(str){
  let result = str[0].toUpperCase();
  for(let i=1; i<str.length; i++){
    if(str[i-1] === ' '){
      result += str[i].toUpperCase();
    }else{
      result += str[i];
    }
  }
  return console.log(result);
}
capitalize('hey there mr nice guy');

