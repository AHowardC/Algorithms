function maxChar(str){
  const charMap ={};
  let max =0;
  let maxChar ='';
  
  for(let char of str){
    if(charMap[char]){
      charMap[char]++;
    }else{
      charMap[char] =1;
    }
  }
//   console.log(charMap);
  
  for(let char in charMap){
    if(charMap[char]> max){
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxChar('Hello There!'));

function max(str){
//     find the count of each character in a string
//     3 variables needed :max counter :maxChar :charObj
    const charMap = {};
    let max =0;
    let maxChar ='';
    
    //     loop through the string and put characters into obj
    for(let i of str){
      charMap[i] = charMap[i] +1 || 1;
    }
    
    //     loop through the object to find largest character count
    for(let i in charMap){
      //     if object prop is > than max update the max
      if(charMap[i]> max){
        max= charMap[i];
        maxChar =i;
      }
    }
    return maxChar;
}

console.log(max('hello'));