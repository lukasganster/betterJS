// Template Literals are a new way of making strings in JavaScript.
// We can make Template Literal by using the backtick or back-quote symbol.

//ES5 Version
var lastWords1 = '\n' + '   I  \n' + '   Am  \n' + 'Iron Man \n'

//ES6 Version
let lastWords2 = `
    I
    Am
  Iron Man   
`

console.log(lastWords1)
console.log(lastWords2)

//In the ES5 version, we need to add this \n to have a new line in our string. In Template Literals, we don't need to do that.

//ES5 Version
function greet(name) {
  return 'Hello ' + name + '!'
}

//ES6 Version
const greet = (name) => {
  return `Hello ${name} !`
}

/*
In the ES5 version, If we need to add an expression or value in a string we need to use the + or string concatenation operator.
In Template Literals, we can embed an expression using ${expr} which makes it cleaner than the ES5 version.
*/
