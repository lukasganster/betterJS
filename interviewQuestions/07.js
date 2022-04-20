// Object Destructuring is a new and cleaner way of getting or extracting values from an object or an array.

// Suppose we have an object that looks like this
const employee = {
  firstName: 'Marko',
  lastName: 'Polo',
  position: 'Software Developer',
  yearHired: 2017,
}

/* The old way of getting properties from an object is we make a variable that has the same
name as the object property. This way is a hassle because we're making a new variable for every property.
Imagine we have a big object with lots of properties and methods using this way in extracting properties will be irritating.
*/

var firstName = employee.firstName
var lastName = employee.lastName
var position = employee.position
var yearHired = employee.yearHired

/* If we use object destructuring it looks cleaner and takes a little time than the old way.
The syntax for object destructuring is that if we are getting properties in an object we use the {} and inside that,
we specify the properties we want to extract and if we are getting data from an array we use the [].
*/

let { firstName, lastName, position, yearHired } = employee

/* If we want to change the variable name we want to extract we use the propertyName:newName syntax.
In this example the value of fName variable will hold the value of the firstName property and lName variable
will hold the value of the lastName property.*/

let { firstName: fName, lastName: lName1, position, yearHired } = employee

/* We can also have default values when destructuring. In this example, if the firstName property holds
an undefined value in the object then when we destructure the firstName variable will hold a default of "Mark"*/
let { firstName = 'Mark', lastName: lName2, position, yearHired } = employee
