let firstName = 'Kafilat'
let lastName = 'Adewumi'
let country = 'Nigeria'
let age = 30
let city = 'Ilorin'

let string = '10'
let number = 10
console.log(string === number)

let num ='9.8'
let numInt = parseInt('9.8')
let variable = 10
console.log(numInt === variable)

let truValue= 10 > 5
console.log(truValue)

let isLightOn = true
console.log(isLightOn)

if ("Eniola") {
 console.log(true)
} else {
    console.log(false)
}
let falseValue= 10 < 5
console.log(falseValue)

let getMarried= false
console.log(getMarried)

if ("") {
    console.log(true)
} else {
    console.log(false)
}

const greater= 4>3 
console.log(greater)

const than= 4>=3
console.log(than)

let vary= 4<3
console.log(vary)

let read= 4==4
console.log(read)

let reader= 4===4
console.log(reader)

let not = 4 !=4
console.log(not)

let nill = 4 !==4
console.log(nill)

let four = 4!='4'
console.log(four)

let notFour = 4=='4'
console.log(notFour)

let fourFour = 4==='4'
console.log(fourFour)

let python= 'python'
let jargon= 'jargon'
console.log(python.length&&jargon.length)
if (!python.length&&jargon.length) {
    console.log(true)
} else {
    console.log(false)
}
let first= 4>3&&10<12
console.log(first)

let second= 4>3&&10>12
console.log(second)

let third= 4>3 || 10<12
console.log(third)

let fourth= 4>3 || 10>12
console.log(fourth)

let fifth= !(4>3)
console.log(fifth)

let sixth= !(4>3)
console.log(sixth)

let seventh= !(false)
console.log(seventh)

let eigth= !(4>3&&10<12)
console.log(eigth)

let ninth= !(4>3&&10>12)
console.log(ninth)

let tenth= !(4==='4')
console.log(tenth)

let dragon= 'dragon'
let ton= 'python'
if (!dragon.includes('on')&&!ton.includes('on')) {
console.log(true)
} else {
console.log(false)
}

const now = new Date()
console.log(now.getFullYear())

const month = new Date()
console.log(month.getMonth()+1)

const date= new Date()
console.log(date.getDate())

const day= new Date()
console.log(day.getDay()+1)

const hours= new Date()
console.log(hours.getHours())

const minutes= new Date()
console.log(minutes.getMinutes())

const seconds= new Date()
console.log(seconds.getTime())

// const base= prompt('What is the base')
// const height= prompt('What is the height')
// const area= (0.5* +base * +height)
// console.log(area)

// const sideA= prompt('What is side A')
// const sideB= prompt('What is side B')
// const sideC= prompt('What is side C')
// const perimeterOfTriangle= (+sideA + +sideB + +sideC)
// console.log(perimeterOfTriangle)

// const length= prompt('What is length')
// const width= prompt('What is width')
// perimeterOfRectangle= 2 * (+length + +width)
// console.log(perimeterOfRectangle)

// const pi= 3.14
// const radius= prompt('What is radius')
// const areaOfACircle= (pi * +radius * +radius)
// const circumference= (2 * pi * +radius)
// console.log(areaOfACircle)
// console.log(circumference)

// const scriptH = prompt('Enter hours')
// const ratePerHour = prompt('Enter the rate per hour')
// const weeklyEarning = (+scriptH *+ratePerHour)
// console.log(weeklyEarning) 

let fName= 'Mojisola'
let familyName= 'Ayoka'
if (fName.length>familyName) {
    console.log('Your ' + 'first ' + 'name, ' + fName + ' is ' + 'longer ' + 'than ' + 'your ' + 'family ' + 'name ' + familyName )
} else {
    
}

let myAge= 40
let yourAge= 30
var ageRemaining= (40-30)
console.log('I ' + 'am ' + ageRemaining + ' years' + ' older' + ' than' + ' you.')

// let user= prompt('Enter birth year')
// let userYear= new Date().getFullYear()
// let userAge= userYear-Number(user)
// if (userAge>=18) {
//     console.log('You ' + 'are ' + (userAge) + '.' + 'You ' + 'are ' + 'old ' + 'enough ' + 'to ' + 'drive.' )
// } else {
//     console.log('You are ' + (userAge) + '.' + ' You will be allowed to drive after ' + (18 - userAge) + ' years' )
// }

// let live= prompt('Enter the number of years you live')
// const secondsNumber= live * 31536000
// console.log('You lived ' + secondsNumber + ' seconds.')

const period= new Date()
const result= period.getFullYear()
const result1=period.getMonth()+1
const result2=period.getDate()
const result3=period.getHours()
const result4=period.getMinutes()
console.log(`${result}-${result1}-${result2} ${result3}:${result4}`)
console.log(`${result2}-${result1}-${result} ${result3}:${result4}`)
console.log(`${result2}/${result1}/${result} ${result3}:${result4}`)

const timing= new Date()
const timing1= timing.getFullYear()
const timing2= String(timing.getDate()).padStart(2, '0')
const timing3= String(timing.getMonth()+1).padStart(2, '0')
const timing4= String(timing.getHours()).padStart(2, '0')
const timing5= timing.getMinutes()
console.log(`${timing1}-${timing3}-${timing2} ${timing4}:${timing5}`)

