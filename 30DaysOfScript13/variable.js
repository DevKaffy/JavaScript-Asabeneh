// Console Object Method
import { countriesData } from './countries.mjs'
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text


console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

console.error('This is an error message')
console.error('We all make mistakes')

const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user)

  const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

  const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users)

  const countries2 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries2.length; i++) {
    console.log(countries2[i][0], countries2[i][1])
  }
  console.timeEnd('Regular for loop')

  console.time('for of loop')
for (const [name, city] of countries2) {
  console.log(name, city)
}
console.timeEnd('for of loop')


console.time('forEach loop')
countries2.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')

console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4


// console.group()
const names2 = ['Asabeneh', 'Brook', 'David', 'John']
const countries3 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user2 = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users2 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names2)
console.groupEnd()

console.group('Countries')
console.log(countries3)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users2)
console.groupEnd()

// Exercise 1
// 1. Display the countries array as a table
console.table(countriesData[0])

// 2. Display the countries object as a table
console.table(countriesData)

// 3. Use console.group() to group logs
console.group('CountriesData')
console.group(countriesData)
console.groupEnd()

// Level 2
// 1. 10 > 2 * 10 use console.assert()
console.assert(10>2, '10 is greater than 2')

// 2. Write a warning message using console.warn()
console.warn('This is a warning')

// 3. Write an error message using console.error()
console.error('This is not correct')

// 4. Exercises:Level 3
// Check the speed difference among the following loops: while, for, for of, forEach

console.time('for')
for (let i=0; i<countriesData.length; i++){

}
console.timeEnd('for')

console.time('for...of');
for (let value of countriesData){
}
console.timeEnd('for...of')

console.time('forEach')
countriesData.forEach(value=>{

})
console.timeEnd('forEach')

console.time('while')
let i=0;
while(i<countriesData.length){
i++
}
console.timeEnd('while')

