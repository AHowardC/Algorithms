// return a str '(123) 456-7890'
// this function should take an integer and return a string

function phoneNumber(num){

  // convert the number into a string
  var numToStr = num.toString();
  console.log(numToStr);

  // convert the string to an Array
  var strArr = numToStr.split('');
  console.log(strArr);

  // slice the first three nums in Array and join
  var chunk1 = strArr.slice(0,3).join('');
  console.log(chunk1);

  // slice the second three nums in Array and join
  var chunk2 = strArr.slice(3,6).join('');

  // slice the last four nums in Array and join
  var chunk3 = strArr.slice(6).join('');

  return "(" + chunk1 + ") " + chunk2 + "-" + chunk3;
}
phoneNumber(2431234567);
