// REGULAR EXPRESSION
//1. Calculate the total annual income of the person from the following text. 
// ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const monthlySalary = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern =  /\d+/g
const matches = monthlySalary.match(pattern)
console.log(matches)
const annual = matches.reduce((acc, cur, ind, arr)=> acc += ind === 0 ||ind === arr.length-1 ? Number(cur)*12 : Number(cur), 0)
console.log(annual)


//2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

const extract = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
const direction = /-?\d+/g
const numbers = extract.match(direction)
console.log(numbers)  
const points = numbers.map((value, index)=>Number(value))  
points.sort((a,b) => a-b)
const distancePoints = points[points.length-1]-points[0]
console.log(points);
console.log(distancePoints)

// 3. Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True


const is_valid_variable = 'first_name'
// sentence.replace(/[^\w]/g,'')
if (typeof is_valid_variable === 'string'){
    console.log (true)
}else{
    console.log(false)
}

const isValidVariable= 'first-name'
if (typeof isValidVariable==='string'){
    console.log(true)
}else{
    console.log(false)
}

// LEVEL 2
// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
// paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
// console.log(tenMostFrequentWords(paragraph))

// function tenMostFrequentWords (paragraph){
// const par = /\w+/gi
// const match = paragraph.match(par)
// const frequentWords = match.reduce((acc, cur)=>{ 
//     acc[cur] = acc[cur] + 1 | 1
// }, {})
// return frequentWords
// }
// console.log(tenMostFrequentWords(`I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`))


// LEVEL 3
//1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
  const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
  let cleaning = sentence.replace(/\$|@|%|#|&|;/g,'').match(/[a-z]{1,}/gi)
  console.log(cleaning)
  const frequentTexts = cleaning.reduce((acc, cur)=>{
            acc[cur] = acc[cur] + 1 | 1
      return acc
  }, {})
  console.log(frequentTexts)
