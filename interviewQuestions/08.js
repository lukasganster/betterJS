/*
The arguments object is a collection of parameter values pass in a function.
It's an Array-like object because it has a length property and we can access individual values
using array indexing notation arguments[1] but it does not have the built-in methods in an array forEach,reduce,filter and map.
It helps us know the number of arguments pass in a function */

// We can convert the arguments object into an array using the Array.prototype.slice.
function one(a, b, c) {
  return arguments
}

function two(a, b, c) {
  return Array.prototype.slice.call(arguments)
}

console.log(one(1, 2, 3))
console.log(two(1, 2, 3))

// Note: the arguments object does not work on ES6 arrow functions.
function one() {
  return arguments
}
const two = function () {
  return arguments
}
const three = function three() {
  return arguments
}

const four = () => arguments

four() // Throws an error  - arguments is not defined
