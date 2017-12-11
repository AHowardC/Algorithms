function repeatStringNumTimes(str, num) {
  // repeat after me #8
  if (num < 0) {
    return "";
  }
  return str.repeat(num);
}

repeatStringNumTimes('abc', 3)

console.log('say hello   '.repeat(3));
