function reverseInt(n){
  const reversed = n.toString()
  .split('')
  .reverse()
  .join('');
  
  if(n<0){
    return parseInt(reversed, 0) * -1;
  }
  return parseInt(reversed, 0);
}

console.log(reverseInt(-23));
