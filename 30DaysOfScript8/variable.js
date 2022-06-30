// OBJECTS
// Create an empty object called dog
const dog ={}

// Print the the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = 'Brownie',
dog.legs = 2,
dog.color = 'Brown',
dog.age = 5,
dog.bark = 'woof woof'

dog.getBark = function (){
        return this.bark
}
console.log(dog)

const values = Object.values(dog)
console.log(values)

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'getDogInfo'

// const users = {
//         Alex: {
//           email: 'alex@alex.com',
//           skills: ['HTML', 'CSS', 'JavaScript'],
//           age: 20,
//           isLoggedIn: false,
//           points: 30
//         },
//         Asab: {
//           email: 'asab@asab.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//           age: 25,
//           isLoggedIn: false,
//           points: 50
//         },
//         Brook: {
//           email: 'daniel@daniel.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//           age: 30,
//           isLoggedIn: true,
//           points: 50
//         },
//         Daniel: {
//           email: 'daniel@alex.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//           age: 20,
//           isLoggedIn: false,
//           points: 40
//         },
//         John: {
//           email: 'john@john.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//           age: 20,
//           isLoggedIn: true,
//           points: 50
//         },
//         Thomas: {
//           email: 'thomas@thomas.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//           age: 20,
//           isLoggedIn: false,
//           points: 40
//         },
//         Paul: {
//           email: 'paul@paul.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//           age: 20,
//           isLoggedIn: false,
//           points: 40
//         }
//       }

// Find the person who has many skills in the users object.
const result = Object.entries(users).sort((a, b) => a[1].skills.length - b[1].skills.length).pop()
console.log(result())