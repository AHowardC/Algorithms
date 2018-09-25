function reverseInt(n){
  const reversed = n.toString()
  .split('')
  .reverse()
  .join('');
  
  if(n<0){
    return parseInt(reversed, 0) * -1;
  }
  return parseInt(reversed, 0);
}

console.log(reverseInt(-23));


// function revInt(n){
// //make number a string array and use reverse 
// //method on it.
//   let revNum= parseInt(n.toString().split('').reverse().join(''));
//   (n<0)? console.log(revNum* -1):  console.log(revNum); //using ternary
// //   if(n < 0){
// //     return console.log(revNum * -1);
// //   }
// //     return console.log(revNum);
// }
// revInt(-97);

function reverseNum(n){
//make number a string array and use reverse 
//method on it.
  let revNum= parseInt(n.toString().split('').reverse().join(''));
  // (n<0)? console.log(revNum* -1):  console.log(revNum);
  
//     return console.log(revNum * Math.sign(n);
  
}

reverseNum(-97);

function reverseNumber(n){
  let revNum= parseInt(n.toString().split('').reverse().join(''));
  return console.log(revNum * Math.sign(n));  
}
reverseNumber(-927);