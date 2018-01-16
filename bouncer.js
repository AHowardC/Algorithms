function bouncer(arr) {
  var truthy = [];
  for(let i of arr){
   if(i){
     truthy.push(i);
   }
  }
  return truthy;
}
bouncer([7, 'ate', '', false, 8]);
// .filter()
// falsy values {
//   '',
//   null,
//   undefined,
//   false,
//   0,
//   NaN
// }
