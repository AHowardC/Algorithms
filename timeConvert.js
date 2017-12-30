function TimeConvert(num){

var hour = (num/60);
var min = (num % 60);
return Math.floor(num/60) + ':' + min;

}
TimeConvert(150);

// using the .floor() method
