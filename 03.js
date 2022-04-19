/*
The || or Logical OR operator finds the first truthy expression in its operands and returns it.
This too employs short-circuiting to prevent unnecessary work.
It was used before to initialize default parameter values IN functions before ES6 Default function parameters was supported.
*/

console.log(null || 1 || undefined) //logs 1

function logName(name) {
  var n = name || 'Mark'
  console.log(n)
}

logName() //logs "Mark"
