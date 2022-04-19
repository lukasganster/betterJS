/*
The && or Logical AND operator finds the first falsy expression in its operands and returns it and if it
does not find any falsy expression it returns the last expression. It employs short-circuiting to prevent unnecessary work.
I've used this in the catch block when closing database connection in one of my projects.
*/

console.log(false && 1 && []) //logs false
console.log(' ' && true && 5) //logs 5

const router1 = Router()
router1.get('/endpoint', (req, res) => {
  let conMobile
  try {
    //do some db operations
  } catch (e) {
    if (conMobile) {
      conMobile.release()
    }
  }
})

// ---

const router2 = Router()
router2.get('/endpoint', (req, res) => {
  let conMobile
  try {
    //do some db operations
  } catch (e) {
    conMobile && conMobile.release()
  }
})
