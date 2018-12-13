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
// the order at which you call this funtion does not matter.
// you can call this function before defining it.
function nameOfFunc(params) {
  //code block
}

// functions held inside var don't get hoisted to the top.
var varFuncName = function(params) {
  //code block
}


// var gets hoisted.
// let does not get hoisted.
// closure is a function inside another functions
// body that has access to its outer functions
// variable scope

// inturpreted langs reads one line at a time
// compiled langs looks at all lines before running

var a = 'outside';

function closure(b){
  console.log(a + b);
}
closure(' done right');