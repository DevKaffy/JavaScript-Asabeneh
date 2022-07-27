import { countries } from './countries_data.js'
console.log(countries)
// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
const country = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = country
console.log(fin, est, sw, den, nor)

// 3. Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
  let {width, height, area, perimeter} = rectangle
  console.log(width, height, area, perimeter)

// Exercises: Level 2
//1. Iterate through the users array and get all the keys of the object using destructuring
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]
    for(const {name, scores, skills, age} of users){
        console.log(name, scores, skills, age)
    }

    // 2.Find the persons who have less than two skills
    for(let i=0; i<users.length; i++){
        if(users[i].skills.length <2){
           console.log( users[i])
        }

}

// Exercises: Level 3
// 1. Destructure the countries object print name, capital, population and languages of all countries.
// for(const{name, capital, population, languages}of countries){
//     console.log(name, capital, population, languages)
// }

// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let[name, skills, score, jsScore = 90, reactScore = 95] = student
  console.log(name, skills, jsScore, reactScore)