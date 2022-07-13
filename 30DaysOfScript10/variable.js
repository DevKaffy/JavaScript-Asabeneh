import { countries } from './countries'

// 1. create an empty set
const goodies = new Set()
console.log (goodies)

// 2. Create a set containing 0 to 10 using loop
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
setOfNumbers = new Set()
for (const number of numbers){
    setOfNumbers.add(number)
}
console.log(setOfNumbers)

// 3. Remove an element from a set
setOfNumbers.delete(9)
console.log(setOfNumbers)

// 4. Clear a set
setOfNumbers.clear()
console.log(setOfNumbers)

// 5. Create a set of 5 string elements from array
const toiletries = ['detergent', 'tissues', 'harpick', 'handwash', 'sponge', 'tissues', 'detergent']
const setOfToiletries= new Set(toiletries)
console.log(setOfToiletries)

const country =[
 ['Finland', 'Sweden',],
 ['Helsinki', 'Oslo'],
]
// 6. Create a map of countries and number of characters of a country
const map = new Map(country)
console.log(map)
console.log(map.size)

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
//7. Find a union b
const c= [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)

//8. Find a intersection b
let d = new Set(a.filter((num)=>B.has(num)))
// let D = new Set(d)
console.log(d)

// 9. Find a with b
let e = new Set(a.filter((num)=>!B.has(num)))
// let E = new Set(e)
console.log(e)


// LEVEL 3
// How many languages are there in the countries object file.
const setOfLanguages = new Set(languages)
for (const language of setOfLanguages){
    console.log(setOfLanguages)
}