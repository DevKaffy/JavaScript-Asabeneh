// CLASS
class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person = new Person()
  
  console.log(person)

//   1. Create an Animal class. The class will have name, age, color, legs properties and create different methods.
class animal {
    constructor(name, age, color, legs){
        console.log(animal)
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
}
const animal1 = new animal ('Bull', 3, 'Brown', 4)
console.log(animal1)

// 2. Create a Dog and Cat child class from the Animal Class.
const dog = new animal ('Lucky', 5, 'Black', 4)
const cat = new animal ('soft', 8, 'white', 4 )
console.log(dog)
console.log(cat)

//   Exercises Level 2
//   1. Override the method you create in Animal class
class goat extends animal {
  saySomething() {
console.log('I am a child of the animal class')
  }
}

let myFunction = function(message){
console.log(message)
}
myFunction('Hello')