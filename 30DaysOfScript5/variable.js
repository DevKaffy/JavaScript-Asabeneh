const emptyArray=[]
console.log(emptyArray)

const countries=['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'FinLand', 'Germany']
console.log(countries.length)
let firstItem= countries[0]
let middleItem= countries[3]
let lastItem= countries[6]
console.log(firstItem)
console.log(middleItem)
console.log(lastItem)

const mixedDataTypes= ['Baby', 100, 'Table', 'Nigeria', 'CSS', true, 'Asabeneh', 'Kafilat']
console.log(mixedDataTypes.length)

const itCompanies= ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies)
// console.log(itCompanies.length)

// let firstCompany= itCompanies[0]
// console.log(firstCompany)
// let middleCompany= itCompanies[3]
// console.log(middleCompany)
// let lastCompany= itCompanies[6]
// console.log(lastCompany)

// let secondCompany= itCompanies[1]
// console.log(secondCompany)
// let thirdCompany= itCompanies[2]
// console.log(thirdCompany)
// let fifthCompany= itCompanies[4]
// console.log(fifthCompany)
// let sixthCompany=itCompanies[5]
// console.log(sixthCompany)

// let faceBook=itCompanies[0]
// console.log(faceBook.toUpperCase())
// let google=itCompanies[1]
// console.log(google.toUpperCase())
// let microsoft=itCompanies[2]
// console.log(microsoft.toUpperCase())
// let apple=itCompanies[3]
// console.log(apple.toUpperCase())
// let ibm=itCompanies[4]
// console.log(ibm.toUpperCase())
// let oracle=itCompanies[5]
// console.log(oracle.toUpperCase())
// let amazon=itCompanies[6]
// console.log(amazon.toUpperCase())
// console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.')
// console.log(itCompanies.includes('Facebook'))
// if (itCompanies.includes('Facebook')) {
//     console.log('Facebook')
// } else {
//     console.log('a company is not found')
// }
// console.log(itCompanies.includes('Twitter'))
// if (itCompanies.includes('Twitter')) {
//     console.log('return a company')
// } else {
//     console.log('a company is not found')
// }

// for (let i = 0; i < itCompanies.length; i = i + 1) {
//     if (itCompanies[i].split('o').length -1>=2) {
//         console.log(itCompanies[i])
//     }
// }


// itCompanies.sort()
// console.log(itCompanies)
    
// itCompanies.reverse()
// console.log(itCompanies)

// console.log(itCompanies.slice(0, 3))

// console.log(itCompanies.slice(4, 7))

// console.log(itCompanies.slice(3,4))
// itCompanies.splice(0,1)
// console.log(itCompanies)
// itCompanies.splice(3,1)
// console.log(itCompanies)
// itCompanies.splice(0,7)
// console.log(itCompanies)


// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let textRemove=/[,.]/g
// let replace = (text.replace(textRemove,''))
// console.log(replace.split(' '))

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart= ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift('Meat')
// console.log(shoppingCart)

// shoppingCart.pop()
// console.log(shoppingCart)

// shoppingCart.push('Sugar')
// console.log(shoppingCart)

console.log('Green ' + shoppingCart[2])

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack= frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
const min= Math.min(...ages)
console.log(min)
const max= Math.max(...ages)
console.log(max)

const agesLength= ages.length
if (agesLength%2===0) {
    const middle=(agesLength/2)-1
    const secondMiddle=(middle+1)
    console.log((ages[middle]+ages[secondMiddle])/2)

} else {
 const medianIndex=   (agesLength+1)/2 - 1
 console.log(ages[medianIndex])
}


// The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)