import { count } from "./countries.js"
console.log(count)
//1. Explain the difference between forEach, map, filter, and reduce
// forEach: is only used with arrays. It's index and array call back function are optional and it doesn't return.
// map:It iterates and modify the array elements and also returns new array.
// filter: it filters out item and return a new array
// reduce:it takes accumulator, current, and optional initial value as a parameter and returns a single value.

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
// A callback function is the function passed as a parameter to other functions.
// forEach takes element, index parameter and Array as callback.
// map takes element, index parameter and Array as callback.
// reduce takes accumulator, current and optional initial value as parameter 

// 3. Use forEach to console.log each country in the countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// countries.forEach((element)=> console.log(element))
countries.forEach((element)=>{
console.log(element)
})

// 4.Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach((element)=>console.log(element))

5. // Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach((num)=>console.log(num))

// 6.Use map to create a new array by changing each country to uppercase in the countries array.
const countriesToUpperCase= countries.map((countries)=>countries.toUpperCase())
console.log(countriesToUpperCase)

//7. Use map to create an array of countries length from countries array.
const countriesLength= countries.map((countries)=>countries.length)
console.log(countriesLength)

// 8. Use map to create a new array by changing each number to square in the numbers array
const numbersSquare= numbers.map((num)=>num*num)
console.log(numbersSquare)

// 9. Use map to change to each name to uppercase in the names array
const namesUpperCase =names.map((names)=> names.toUpperCase())
console.log(namesUpperCase)

// 10. Use map to map the products array to its corresponding prices.
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
const productsPrice= products.map((product)=>`${product.product}:${product.price}`)
console.log(productsPrice)

// 11. Use filter to filter out countries containing land.
const filterLand= countries.filter((countries)=>countries.includes('land'))
console.log(filterLand)

// 12. Use filter to filter out countries having six character.
const countriesCharacters= countries.filter((countries)=>countries.length===6)
console.log(countriesCharacters)

// 13. Use filter to filter out countries containing six letters and more in the country array.
const countriesSixLetters= countries.filter((countries)=>countries.length>=6)
console.log(countriesSixLetters)

// 14. Use filter to filter out country start with 'E';
const countriesE= countries.filter((countries)=>countries.includes('E'))
console.log(countriesE)

// 15.Use filter to filter out only prices with values.
const productsPrices=products.filter((price)=> typeof(price.price)== 'number')
console.log(productsPrices)

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// const getStringLists =

// 17. Use reduce to sum all the numbers in the numbers array.
const sum =numbers.reduce((acc, cur)=> acc + cur, 0)
console.log(sum)

//18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const countries2 = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countriesResult= countries2.reduce((acc, cur, i, arr)=>{
  const lastindex = arr[arr.length - 1]
  acc+= cur !== lastindex ? cur + ', ': 'and ' + cur + ' are north European countries'
   return acc}, '')
console.log(countriesResult)

// 19. Explain the difference between some and every
// - They both return boolean but some is used to check if some of the elements in an array are similar in one aspect.
// while
// - Every is used to check if all of the elements are similar in one aspect.

// 20. Use some to check if some names' length greater than seven in names array.
const namesSome = names.some((name)=>names.length>7)
console.log(namesSome)

// 21. Use every to check if all the countries contain the word land
const countriesEvery = countries.every((countries)=>countries.includes('land'))
console.log(countriesEvery)

// 22. Explain the difference between find and findIndex.
// - Find returns element which satisfies the condition
// while
// - FindIndex returns the position of the first element which satisfies the condition

// 23. Use find to find the first country containing only six letters in the countries array
const findCountry = countries.find((countries)=>countries.length==6)
console.log(findCountry)

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const countryIndex= countries.findIndex((countries)=>countries.length==6)
console.log(countryIndex)

//25.  Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norway = countries.findIndex((countries)=>countries==='Norway')
console.log(norway)

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russia = countries.findIndex((countries)=>countries==='Russia')
console.log(russia)

// Exercises: Level 2
//1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]
const totalPrice= products.map((product)=>product.price).reduce((acc, cur)=>typeof cur !== 'number'? acc:
    acc + cur  
 ,0)
console.log(totalPrice)
 
// 2. Find the sum of price of products using only reduce reduce(callback))
const reduce = products.reduce((acc, cur)=> {
   typeof cur.price === 'number' ? acc += cur.price : acc
    return acc
} , 0)
console.log(reduce)

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).


console.log(count)
function categorizeCountries (countries, keyword){
  return countries.filter((count)=> count.name.endsWith(keyword))
  
}
console.log(categorizeCountries(count, 'ia'))
console.log(categorizeCountries(count, 'land'))

//4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(){
  return count.filter((count)=>count.name.length===10)
  
}
console.log(getFirstTenCountries())

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// function getLastTenCountries(){
//   return count.filter((count)=>count.name.substr(-1, 10))
  
// }
// console.log(getLastTenCountries())

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
let manyInitial = count.reduce((acc, {name})=>{
  const firstLetter = name[0]
  acc[firstLetter] = acc[firstLetter] + 1 || 1
return acc
}, {})
manyInitial = Object.entries(manyInitial).sort((a,b)=> b[1]-a[1])[0][0]
console.log(manyInitial)

// Exercises: Level 3
// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
// const countriesSort=count.map((count)=>count.sort())
// console.log(countriesSort)


// Find the 10 most spoken languages:

// //2. Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```