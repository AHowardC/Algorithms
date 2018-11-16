var num = 4; //trick 
function outer(){
  var num = 2; // trick 
  function inner(){
    num++; // this is undefined
    var num = 3;
    console.log(num);
  }
  inner();
}
outer();