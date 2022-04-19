// The Double NOT operator or !! coerces the value on the right side into a boolean.
// Basically it's a fancy way of converting a value into a boolean.

console.log(!!null) //logs false
console.log(!!undefined) //logs false
console.log(!!'') //logs false
console.log(!!0) //logs false
console.log(!!NaN) //logs false
console.log(!!' ') //logs true
console.log(!!{}) //logs true
console.log(!![]) //logs true
console.log(!!1) //logs true
console.log(!![].length) //logs false
