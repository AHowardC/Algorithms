//Create a function that take two arguments (hexadecimal string color 1 and 2)
function averageColor(hexstr1, hexstr2) {

  //convert 1st hexadecimal  number to a decimal number
  var hextoDecimal1 = parseInt(hexstr1, 16);

  //convert 2nd hexadecimal  number to a decimal number
  var hextoDecimal2 = parseInt(hexstr2, 16);

  //find an average of the two numbers
  var average = (hextoDecimal1 + hextoDecimal2)/2;

  //convert the average number back to a hexadecimal
  var decimaltoHeximal = (average).toString(16);

  //return the result
  return decimaltoHeximal;

}

averageColor("fff0ef", "57348d");
