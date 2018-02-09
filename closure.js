// Closures

// var name = 'john doe'
//
// function greet() {
//   console.log(`Hello ${name} !`);
// }
// var outside of function


function greet(name) {

  console.log(`hi ${name}. `);
}
greet('jane smith')

// ways to define functions
// common way to use function which gets hoisted to the top. 
function nameOfFunc(params) {
  //code block
}

// functions held inside var don't get hoisted to the top.
var varFuncName = function(params) {
  //code block
}


// var gets hoisted.
// let does not get hoisted.