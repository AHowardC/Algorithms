function repeatStringNumTimes(str, num) {
  // #8 repeat after me
  var final = ''
  if(num < 0) {
    return "";
    for (var i = 0; i < num; i++ ){
      final = final + str;
    }
  }
return final;
}

repeatStringNumTimes('abc', 3)

// Works using recurssion.
if(num < 0){
  return '';
}
if(num === 1){
  return str; //base case
}
return str + repeatStringNumTimes(str, num - 1);

// Works using the .repeat() method.
// if (num < 0) {
//   return "";
// }
// return str.repeat(num);
