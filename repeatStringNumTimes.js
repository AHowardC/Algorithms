function repeatStringNumTimes(str, num) {
  // #8 repeat after me
  var final = ''
  if(num < 0) {
    return "";
    for (var i = 0; i < num; i++){
      final = final + str;
    }
  }
return final;
}

repeatStringNumTimes('abc', 3)


// Works
// if (num < 0) {
//   return "";
// }
// return str.repeat(num);
