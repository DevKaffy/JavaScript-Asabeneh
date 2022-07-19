// REGULAR EXPRESSION
//1. Calculate the total annual income of the person from the following text. 
// ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const monthlySalary = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern =  /\d+/g
const matches = monthlySalary.match(pattern)
console.log(matches)
const annual = matches.map((value, index)=> {   
  return index===1 ? value:Number(value*12)
})
console.log(annual)
let result = annual.reduce((acc, cur)=> acc + Number(cur), 0)
console.log(result)

//2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

const extract = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
const direction = /\d+/gi
const numbers = extract.match(direction)
console.log(numbers)