function factorialize(num) {
  var result = 1;
  for (var i = 0; i <= num; i++){
    result *= i;
  }
  return result;
}

factorialize(5);

const factorial = function fac(num){
  if(num ===1){
    return 1;
  }
  return num * fac(num-1);
};

let final = factorial(5);
console.log(final);