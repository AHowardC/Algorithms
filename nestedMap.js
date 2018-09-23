function nestedLoop(arr){
//   return the items inside the nested arr in reverse order
    var results = [];
    var array = arr.map(value=> value.map(value=> results.push(value)))
    var reversed =results.reverse().map(value=> console.log(value))
   
}

nestedLoop([
  ['one',2],
  [3,'four'],
  ['five', 6]
]);