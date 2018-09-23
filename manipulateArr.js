
function manipulateArr(arr){
  const even = [];
    for(let i=arr.length - 1; i >=0; i--){
//       console.log(arr[i])
      for(let j =0; j <=arr[i].length -1; j++){
        if(arr[i][j] % 2 == 0){
          even.push(arr[i][j]);
        }
          console.log(arr[i][j]);
        console.log(even);
      }
      
    }
}
manipulateArr([
        [1,
        2],
        [3,
        4],
        [5,
        6]
        ]);

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