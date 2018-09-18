function filteredArray(arr, elem) {
  let newArr = [...arr];
  
  for(let i =0; i < newArr.length; i++){
    for(let j = 0; j < newArr[i].length; j++){
      if(newArr[i][j] === elem){
        newArr.splice(i,1);
        i--;
        break;
      }
    }
  }
  
  return newArr;
}


console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));