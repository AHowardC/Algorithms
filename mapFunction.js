// the map function makes a copy of an original array
// and manipulates the copied version.
var array = [1,2,3,4,5];
var newArray = array.map(function(index){
  return index * 2;
})

var array = [1,2,3,4,5];
var newArray = array.map(function(index){
  return index * 2;
});
console.log(newArray);
console.log(newArray.join('').repeat(2));
