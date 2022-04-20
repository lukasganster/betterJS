// NOOB CODE

function toAccounting(n) {
  if (n < 0) {
    return '(' + Math.abs(n) + ')'
    // } else if (n >= 0){
  } else {
    // return n.toString()
    return n
  }
}

console.log(toAccounting(0))
console.log(toAccounting(10))
console.log(toAccounting(-5))
console.log(toAccounting(undefined))

// Pretty bad naming. Variable names like 'n' are not speaking
// Care about the type of the return value String / Number
// Avoid reduntant if clauses
// What if the function gets undefined as a parameter?

// ----------------------------------------------------------------------------------
// ADVANCED CODE

function numberToAccountingString(number) {
  // Speaking variable names and better function name
  if (number != null) {
    // Checking parameters for null
    if (number < 0) {
      return `(${Math.abs(number)})` // Using template string instead of concatination
    } else {
      return number.toString()
    }
  }
}

console.log(numberToAccountingString(undefined))
console.log(numberToAccountingString(0))
console.log(numberToAccountingString(10))
console.log(numberToAccountingString(-5))

// ----------------------------------------------------------------------------------
// PRO CODE

function numberToAccountingString(number) {
  if (number == null) return // If checks with return statements -> Guard clause -> https://blog.webdevsimplified.com/2020-01/guard-clauses/
  // It saves computing time and you get rid of ugly nesting issues - Nesting is pretty hard to read
  if (number < 0) return `(${Math.abs(number)})`
  return number.toString()
}

console.log(numberToAccountingString(undefined))
console.log(numberToAccountingString(0))
console.log(numberToAccountingString(10))
console.log(numberToAccountingString(-5))
