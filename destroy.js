// Takes optional arguments with the arr

function destroy(arr) {
  // Remove all the values
  // should filter out elements from arr that match optional args
  var args = Array.from(arguments);
  args.splice(0,1);
  var targets = args;

  console.log(arr);
  return arr.filter(function(num){
    return targets.indexOf(num) === -1;
    
  });
}

// filter out the optional args

// array.from(takes an object)
// .filter(function(){}) a higher order function
// .indexOf()method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// .includes() returns boolean if found or not
// arguments keyword gives everything back in object format
