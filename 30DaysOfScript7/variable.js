// FUNCTION
function printFullName() {
    let firstName = 'Kafilat'
    let lastName = 'Adewumi'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}
printFullName()


const generateFullName = (firstName = 'Kafilat', lastName = 'Adewumi') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(generateFullName())

function addNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}
console.log(addNumbers(20, 20))

function areaOfRectangle(l, w) {
    let area = l * w
    return area
}
console.log(areaOfRectangle(5, 10))

function perimeterOfRectangle(l, w) {
    let perimeter = 2 * (l + w)
    return perimeter
}
console.log(perimeterOfRectangle(5, 10))

function volumeOfRectPrism(l, w, h) {
    let volume = l * w * h
    return volume
}
console.log(volumeOfRectPrism(5, 10, 5))

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(5))

function circumOfCircle(r) {
    let circumference = 2 * Math.PI * r
    return circumference
}
console.log(circumOfCircle(5))

function density(m, v) {
    let d = m / v
    return d
}
console.log(density(10, 5))

function speed(d, t) {
    let s = d / t
    return s
}
console.log(speed(20, 2))

function weight(m, g) {
    let w = m * g
    return w
}
console.log(weight(5, 5))

function convertCelsiusToFahrenheit(oC) {
    let convert = (oC * 9 / 5) + 32
    return convert
}
console.log(convertCelsiusToFahrenheit(5))


// function checkSeason(month){
//         if('September, October, November, December'.includes(month)){
//             return 'the season is Autumn'
//         }else if('December, January, February'.includes(month))
//         return 'the season is Winter'
//         else if ('March, April, May'.includes (month))
//             return 'the season is Spring'
//         else if ('June, July, August'.includes (month))
//         return 'the season is Summer'
//         }
// console.log(checkSeason('February'))

// Math.max returns its largest argument. 
// Write a function findMax that takes three arguments 
// and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

// function findMax(parm1, parm2, parm3)

// function findMax(parm1, parm2, parm3)
// let max = 0
// let min = 0

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function linear(a, x, b, y, c) {
    let linearNumber = a * x + b * y + c
    return linearNumber
}
console.log(linear(2, 3, 5, 2, 1))

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// function quadratic(a, b, c, x){
// let quadraticEquation = (a*x)*2  +  b*x + c
// return quadraticEquation
// }
// console.log(quadratic(1, 4, 4 ))

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

let printArray = ['A', 'B', 'C'];
for (let i = 0; i < printArray.length; i++) {
    console.log(printArray[i])
}

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.


// showDateTime()
// 08/01/2020 04:08
const timing = new Date()
const timing1 = timing.getFullYear()
const timing2 = String(timing.getDate()).padStart(2, '0')
const timing3 = String(timing.getMonth() + 1).padStart(2, '0')
const timing4 = String(timing.getHours()).padStart(2, '0')
const timing5 = timing.getMinutes()
console.log(`${timing2}/${timing3}/${timing1} ${timing4}:${timing5}`)


let a = 3;
let b = 4;
[a, b] = [b, a]
console.log([a, b])

let x = 4;
let y = 5;
[x, y] = [y, x]
console.log([x, y])

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

function reverseArray(arr) {
    const emptyArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        emptyArr.push(arr[i])
    }
    return emptyArr
}

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
    const arrEmpty = []
    for (let i = 0; i < arr.length; i++) {
        arrEmpty.push(arr[i].toUpperCase())
    }
    return arrEmpty
}
console.log(capitalizeArray(["a", "b", "c", "d"]))

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
    const array = []
    for (let i = 0; i < item.length; i++) {
        array.push(item[i])
    }
    return array
}
console.log(addItem(['Kafilat']))

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index) {
    index.pop()
    return index
}
console.log(removeItem(['red', 'blue', 'green', 'purple']))

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (...args) => {
    let sum = 0
    for (const element of args)
        sum += element
    return sum
}
console.log(sumOfNumbers(1, 2, 3, 4, 5))

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (...number) => {
    let sum = 0
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 !== 0) {
            sum = sum + number[i]
        }
    }
    return sum
}
console.log(sumOfOdds(2, 3, 4, 5, 6, 7, 8, 9))

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (...number) => {
    let even = 0
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
            even = even + number[i]
        }
    }
    return even
}
console.log(sumOfEven(2, 3, 4, 5, 6, 7, 8))

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = (positive) => {
    let evens = 0
    let odds = 0
    for (let i = 0; i <= positive; i++) {
        i % 2 == 0 ? evens++ : odds++
    }
    console.log(`The number of odds are ${odds}. \nThe number of evens are ${evens}.`)
}
evensAndOdds(100)

// Write a function which takes any number of arguments and return the sum of the arguments
const arguments = (...args) => {
    let func = 0
    for (const element of args) {
        func = func + element
    }Destructure and assign the elements of countries array to fin, est, sw, den, nor
    return func
}
console.log(arguments(1, 2, 3))
console.log(arguments(1, 2, 3, 4))

const userIp = () => {
    const random1 = Math.floor(Math.random() * 255)
    const random2 = Math.floor(Math.random() * 255)
    const random3 = Math.floor(Math.random() * 255)
    const random4 = Math.floor(Math.random() * 255)
    return `${random1}.${random2}.${random3}.${random4}`
}
console.log(userIp())

// Write a function which generates a randomMacAddress


function macAddress(){
    let address = '1234567890ABCDEF'
    const random = Math.floor(Math.random() * address.length)
    const random2 = Math.floor(Math.random() * address.length)
    const random3 = Math.floor(Math.random() * address.length) 
    const random4 = Math.floor(Math.random() * address.length) 
    const random5 = Math.floor(Math.random() * address.length) 
    
return`${address[random]}${address[random2]}:${random2}:${[random4]}:${address[random5]}:${address[random4]}${address[random5]}:${address[random3]}${address[random4]}`
    
}
console.log(macAddress())

function randomHexaNumberGenerator(){
    const str = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let randomHexa = '#'
    for (let i = 0; i <5; i++) {
    const randomGenerator=Math.floor(Math.random()*str.length)
    randomHexa +=str[randomGenerator]
    }
    return randomHexa
}
console.log(randomHexaNumberGenerator())

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE

function userIdGenerator (){
    const character = 'ABcdEFGHIjKLMNOPqrsTUVwxyZ1234567890'
    let randomGenerator = ''
    for (let i =0; i<6; i++){
        const randomIdGen = Math.floor(Math.random()*character.length)
        randomGenerator+= character[randomIdGen]
    }
    return randomGenerator
}
console.log(userIdGenerator())

// const generateId = () => {
//     let idLength = prompt("How long is the id")
//     let noOfId = prompt("How many line?")
//     for(let i = 0; i < Number(noOfId); i++) {
//     const random = Math.random().toString(36).substring(2,2+Number(idLength))
//      console.log(random)
//     } 
//     } 
//     generateId()
// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
// It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

// function userIdGeneratedByUser(){
// const input1 = prompt('Number of characters:')
// const input2 = prompt('Number of ids:')
// let randomNumber= ''
// for(let i=0; i<6; i++){
// const math = Math.floor(Math.random()*10)
// randomNumber += math
// }
// return randomNumber
// }
// console.log(userIdGeneratedByUser())

// function userIdGenerCall your function sum, it takes any number of arguments and it returns the sum.atedByUser(){
//     const enter1 = prompt('Number of characters:')
//     const enter2 = prompt('Number of ids:')
//     let randomCharacter= ''
//     for(let i=0; i<17; i++){
//     const math = Math.floor(Math.random()*50)
//     randomCharacter += math
//     }
//     return randomCharacter
//     }
//     console.log(userIdGeneratedByUser())
    
// Write a function name rgbColorGenerator and it generates rgb colors.

// rgbColorGenerator()
// rgb(125,244,255)

function rgbColorGenerator(){
    let rgbColor = Math.floor(Math.random()*255)
    let rgbColor1 = Math.floor(Math.random()*255)
    let rgbColor2 = Math.floor(Math.random()*255)

return `${rgbColor}, ${rgbColor1}, ${rgbColor2}`
}
console.log(rgbColorGenerator())

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
// (RGB,HSL,HSV and CMYK)

function arrayOfHexaColors(){
    const arrayHexa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const arrayy= []
    for (let i=0; i<4; i++){
        const hexa1 = Math.floor(Math.random()*arrayHexa.length)
        const hexa2 = Math.floor(Math.random()*arrayHexa.length)
        const hexa3 = Math.floor(Math.random()*arrayHexa.length)
    arrayy.push(`${arrayHexa[hexa1]}${arrayHexa[hexa2]}${arrayHexa[hexa3]}`)
}
    return arrayy
}
    console.log(arrayOfHexaColors())

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(){
    const arrayOf=[]
    let rgbColor = Math.floor(Math.random()*255)
    let rgbColor1 = Math.floor(Math.random()*255)
    let rgbColor2 = Math.floor(Math.random()*255)
    arrayOf.push(rgbColor,rgbColor1,rgbColor2)
    return arrayOf
 }
console.log(arrayOfRgbColors())

// Call your function shuffleArray, it takes an array
//  as a parameter and it returns a shuffled array
function shuffleArray(arr){
    const emptyArray =[]
    for(let i=0; i<20; i++){
    const floor = Math.floor(Math.random()*arr.length)
    if(emptyArray.indexOf(arr[floor]) === -1 && emptyArray.length !== arr.length){
        emptyArray.push(arr[floor])
    }
}
return emptyArray
}
console.log(shuffleArray([1,2,3,4,5,6]))

// Call your function factorial, it takes a whole number as a 
// parameter and it return a factorial of the number
const factorial =(n) => {
    let fac =1
    for (let i=n; i>0; i--){
        fac = fac*i
    }
    return fac
}
console.log(factorial(4))

// Call your function isEmpty, it takes a parameter 
// and it checks if it is empty or not
// function 
function isEmpty(){
    return (isEmpty === null || isEmpty.length ===0)? true :false
    }
    console.log(isEmpty())

// Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...args){
    let sumArg =0
    for (const element of args)
    sumArg =sumArg+=element
return sumArg
}
console.log(sum(1,2,3,4,0))


