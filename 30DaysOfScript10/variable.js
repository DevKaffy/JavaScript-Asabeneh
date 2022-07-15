import {countries_arr} from "./countries.js"

// 1. create an empty set

console.log(countries_arr)
console.log("hi")
const goodies = new Set()
console.log (goodies)

// 2. Create a set containing 0 to 10 using loop
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let setOfNumbers = new Set()
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
//1. How many languages are there in the countries object file.
const setOfLanguages = new Set()
console.log(setOfLanguages)
for (const obj of countries_arr){
    const {languages} = obj
    languages.forEach(value => setOfLanguages.add(value))
}
console.log(setOfLanguages.size)

// *** 2. Use the countries data to find the 10 most spoken languages:

// const languages = countries_arr.reduce((acc, {languages}) => {

// }, [])

let allLang = countries_arr.map(({languages})=> languages).flat().reduce((acc,cur) => {   
 acc[cur] ? acc[cur] += 1 : acc[cur] = 1
 return acc
}, {})
allLang = Object.entries(allLang).sort((a,b) => b[1]-a[1]).map(value => ({"Language": value[0], "count": value[1]})).slice(0, 10)
console.log(allLang)