var num = 4; //here to trick you
function outer(){
  var num = 2; //here to trick you
  function inner(){
    num++; // this is undefined
    var num = 3;
    console.log(num);
  }
  inner();
}
outer();