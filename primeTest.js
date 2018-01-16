function primeTest(testValue){
  let isPrime = true;
  for(let i = 2; i<testValue; i++){
    if(testValue % i === 0){
      isPrime = false;
    }
  }
  return isPrime;
}
primeTest(61);
