function bouncer(arr) {
  var truthy = [];
  for(let i of arr){
   if(i){
     truthy.push(i);
   }
  }
  return truthy;
}

function bouncer(arr){
  return arr.filter(function(truthyI){
    return truthyI;
  });
}

bouncer([7, 'ate', '', false, 8]);
// .filter(function(item){})
// falsy values {
//   '',
//   null,
//   undefined,
//   false,
//   0,
//   NaN
// }
