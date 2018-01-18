// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// Note: keep the original order of the names in the output.

function filterStr(namesArr){
  var result = [];
  friends = namesArr.filter(function(name){
     if(name.length == 4){result.push(name)}
  });
  return result;
}

filterStr(['ryan','tim','bobb','tom']);
