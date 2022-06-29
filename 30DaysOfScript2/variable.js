let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(3, 20))
console.log(challenge.substr(0, 3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(challenge.trim(' '))
console.log(challenge.startsWith(30))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match('a'))
console.log(challenge.repeat(2))


let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(string)
console.log(string.split(', '))

let position = 'You can not end a sentence with because because because is a conjuction'
console.log(position.indexOf('because'))
console.log(position.lastIndexOf('because'))
console.log(position.search('because'))

let thirty = '30 Days of'
console.log(thirty.concat('JavaScript'))

let john = "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(john)

let teresa ='"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
console.log(teresa)

let string1 = '10'
let number1 = 10 
console.log(+string1 === number1)

let jargon = 'I hope this course is not full of jargon.'
console.log(jargon.search('jargon'))

console.log('python'.includes('on') && 'jargon'.includes('on'))

let course = 'I hope this course is not full of jargon'
console.log(course.includes('jargon'))

const num = Math.floor(Math.random () * 101) 
console.log(num)

let numBtnFiftyAndHundred = Math.floor(Math.random()*51 + 50)
console.log(numBtnFiftyAndHundred) 

const digit = Math.floor(Math.random () * 251) 
console.log(digit)

let java= 'javaScript'
let javaRandom = Math.floor(Math.random() *java.length)
let javaIndex = java[javaRandom]
console.log(javaIndex)

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

let str = 'You cannot end a sentence with because because because is a conjunction'
console.log(str.substr(31, 23))

let three = 'love is the best thing in this world. Some found their love and some are still looking for their love.'
    let a = /love/g
console.log(three.match(a).length)

let word = 'You cannot end a sentence with because because because is a conjunction'
let b = /because/g
console.log(word.match(b).length)

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`
let c = /[!@#$%^&*();+{}]/g
console.log(sentence.replace(c,""))

let extract = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
extractNum = /\d+/gi
console.log(extract.match(extractNum))