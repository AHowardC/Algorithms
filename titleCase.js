function titleCase(str){
  var words = str.toLowerCase().split(' ')
  console.log(words)
  for (i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
  }
  console.log(words)
  return words.join(' ')
}

titleCase('i am a title of some book or movie')


//  put  the words into an Array
//    each Array [0] index make it toUpperCase()
//    join() the Array back to a str

split the string by empty space