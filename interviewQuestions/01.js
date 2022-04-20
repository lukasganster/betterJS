// Before understanding the differences between undefined and null we must understand the similarities between them.
// They belong to JavaScript's 7 primitive types.
let primitiveTypes = [
  'string',
  'number',
  'null',
  'undefined',
  'boolean',
  'symbol',
  'bigint',
]

// They are falsy values. Values that evaluated to false when converting it to boolean using Boolean(value) or !!value.
console.log(!!null) //logs false
console.log(!!undefined) //logs false

console.log(Boolean(null)) //logs false
console.log(Boolean(undefined)) //logs false

// DIFFERENCES
// undefined is the default value of a variable that has not been assigned a specific value.
// Or a function that has no explicit return value ex. console.log(1).
// Or a property that does not exist in an object. The JavaScript engine does this for us the assigning of undefined value.

let _thisIsUndefined
const doNothing = () => {}
const someObj = {
  a: 'ay',
  b: 'bee',
  c: 'si',
}

console.log(_thisIsUndefined) //logs undefined
console.log(doNothing()) //logs undefined
console.log(someObj['d']) //logs undefined

// null is "a value that represents no value". null is value that has been explicitly defined to a variable.
// In this example we get a value of null when the fs.readFile method does not throw an error.

fs.readFile('path/to/file', (e, data) => {
  console.log(e) //it logs null when no error occurred
  if (e) {
    console.log(e)
  }
  console.log(data)
})

// When comparing null and undefined we get true when using == and false when using ===. You can read the reason here.
console.log(null == undefined) // logs true
console.log(null === undefined) // logs false
