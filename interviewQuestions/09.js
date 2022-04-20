// The ternary operator is one of the most used operators in javascript, it's the short form for IF / ELSE

//ternary
const person = {
  name: 'sud',
  age: 16,
}

let result = person.name === 'sud' ? 'Howdy Sud ' : 'Howdy Stranger'
console.log(result)

// It is pretty straight forward. before ? is the condition. immediately after ? symbol is the
// block for true value of condition and other is for false result of condition

// Nested Ternary operator

// Ternary operator really shines when it is nested with itself and can be replace
// if ...... else ladder completely is used properly. In the following snippet,
// I used the operator as the if else block and made the code more readable for anyone

//ternary as if else

// It's pretty simple here, Append multiple conditions with consecutive block and then put last else block for default condition
let isAdult =
  person.age > 18
    ? ' You are adult :)'
    : person.age < 15 && person.age > 10
    ? 'You are on the way '
    : 'No Kids here '
console.log(isAdult)
