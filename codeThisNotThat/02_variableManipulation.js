// ----------------------------------------------------------------------------------
// NOOB CODE

function calculateTotal(items, options) {
  let t = 0
  items.forEach((i) => {
    t += i.price * i.quan
  })
  t = t - t * (options.dis || 0)
  t = t * 1.1
  t = t + (options.ship || 5)
  return t
}

// Variable names are not speaking
// What does 1.1 mean? Is this the tax? It is not really clear
// What means (options.ship || 5) ? Is 5 the default value
// What happens if we have a shipping of 0?
// What happens if we have zero items?

const testItems = [
  { price: 15, quan: 2 },
  { price: 20, quan: 1 },
  { price: 5, quan: 4 },
]

// console.log(calculateTotal())
// console.log(calculateTotal(testItems))
// console.log(calculateTotal(undefined, {}))
console.log(calculateTotal([], {})) // What happens if we pass an empty array?
console.log(calculateTotal(testItems, {})) // What happens if we pass no options? -> Line 28
console.log(calculateTotal(testItems, { ship: 0 }))
console.log(calculateTotal(testItems, { dis: 0.75 }))
console.log(calculateTotal(testItems, { ship: 12 }))

// ----------------------------------------------------------------------------------
// ADVANCED CODE

const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

function calculateTotal(items, options = {}) {
  if (items == null || items.length === 0) return 0

  let total = 0
  items.forEach((item) => {
    total += item.price * item.quantity
  })
  total = total - total * (options.discount || 0)
  total = total * TAX_RATE
  if (options.shipping !== 0) {
    total = total + (options.shipping || SHIPPING_DEFAULT)
  }
  return total
}

/* const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 },
] */

// console.log(calculateTotal())
// console.log(calculateTotal(testItems))
// console.log(calculateTotal(undefined, {}))
// console.log(calculateTotal([], {}))
console.log(calculateTotal(testItems, {}))
console.log(calculateTotal(testItems, { shipping: 0 }))
console.log(calculateTotal(testItems, { discount: 0.75 }))
console.log(calculateTotal(testItems, { shipping: 12 }))

// Constants for TAX_RATE and SHIPPING_DEFAULT
// Variables name are better
// Default value for optional paramters
// Guard clause to avoid errors (zero items, null as input,...)
// Think of the edge cases e.g.: shipping 0, passing [] as items,...

// ----------------------------------------------------------------------------------
// PRO CODE

const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

function calculateTotal(
  items,
  { shipping = SHIPPING_DEFAULT, discount = 0 } = {},
) {
  if (items == null || items.length === 0) return 0

  const itemCost = items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
  const discountRate = 1 - discount

  return itemCost * discountRate * TAX_RATE + shipping
}
/*
const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 },
]*/

// console.log(calculateTotal())
// console.log(calculateTotal(testItems))
// console.log(calculateTotal(undefined, {}))
// console.log(calculateTotal([], {}))
console.log(calculateTotal(testItems, {}))
console.log(calculateTotal(testItems, { shipping: 0 }))
console.log(calculateTotal(testItems, { discount: 0.75 }))
console.log(calculateTotal(testItems, { shipping: 12 }))

// Uses object destructing in parameters for shipping and discount - with a default value {}
// Uses a guard clause
// Instead of iterating through the array it uses modern array methods like reduce
// Avoids reallocations of the total variable -> calculating it at the return statement
// Avoid a variable that gets often modified -> It requires a lot of brain power to keep the state of that variable in mind
// Uses constant variables -> Easier to maintain
