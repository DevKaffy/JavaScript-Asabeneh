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
class Animal {
    constructor(name, age, color, legs){
        console.log(Animal)
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
}
const Animal1 = new Animal ('Bull', 3, 'Brown', 4)
console.log(Animal1)

// 2. Create a Dog and Cat child class from the Animal Class.
const dog = new Animal ('Lucky', 5, 'Black', 4)
const cat = new Animal ('soft', 8, 'white', 4 )
console.log(dog)
console.log(cat)

//   Exercises Level 2
//   1. Override the method you create in Animal class
class goat extends Animal {
constructor(name, age, color, legs, eyes){
super(name, age, color, legs)
this.eyes = eyes
}
}
const newGoat = new goat ('Tanwa', 4, 'black', 4, 2)
console.log(newGoat)


// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.



// 2.Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
// class PersonAccount {
//   constructor (firstname, lastName, incomes, expenses)
// }
