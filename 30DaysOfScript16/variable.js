// Javascript Object Notation (JSON)
// JSON is mostly used when data is sent from a server to a client.
// JSON keys have double quotes while object keys don't

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
//1. Change skills array to JSON using JSON.stringify()
const txt = JSON.stringify(skills,undefined)
console.log(txt)

// 2. Stringify the age variable
let age = 250;
const text = JSON.stringify(age, undefined)
console.log(text)

let isMarried = true
const newText = JSON.stringify(isMarried)
console.log(newText)

const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
//   3. Stringify the student object
const newStudent = JSON.stringify(student,["firstName", "lastName", "age", "isMarried", "skills"], 4)
console.log(newStudent)

// Exercise 2
// 1. Stringify the students object with only firstName, lastName and skills properties
const std = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(std)


// Exercises Level 3
// 1. Parse the txt JSON to object.
const txtObj = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
const txtObject = JSON.parse(txtObj, undefined, 4)
console.log(txtObject)

// 2. Find the user who has many skills from the variable stored in txt.
    let txtObject2 = Object.entries(txtObject).map((txtObject)=>[txtObject[0], txtObject[1].skills.length]).sort((a,b)=> b[1] - a[1])[0]
console.log(txtObject2)

// const result = Object.entries(users)
// .map((users)=> [users[0], users[1].skills.length]).sort((a,b)=> b[1] - a[1])[0]
// console.log(result)