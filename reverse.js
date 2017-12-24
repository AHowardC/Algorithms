function reverseString(str){
  var result = '';
  // var str = 'My name is a bond. A James BOND.';
  var strSplit = str.split('');
  // console.log(strSplit);

  for(let i = strSplit.length; i >= 0; i--){
    result += strSplit[i];
  }
  return result;
}

reverseString('My name is a bond. A James BOND.');
