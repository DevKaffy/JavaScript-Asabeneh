// 1. Store you first name, last name, age, country, city in your browser localStorage.
// localStorage.clear()
localStorage.setItem('firstName', 'Kafilat')
console.log(localStorage)
localStorage.setItem('lastName', 'Adewumi')
console.log(localStorage)
localStorage.setItem('age', 20)
localStorage.setItem('country', 'Nigeria')
console.log(localStorage)
localStorage.setItem('city', 'Ilorin')
console.log(localStorage)

//2. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName : 'Kafilat',
    lastName : 'Adewumi',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript'],
    country: 'Nigeria',
}
let studentJSON = JSON.stringify(student)
localStorage.setItem('student', studentJSON)
console.log(localStorage)
// localStorage.clear()

// EXERCISE LEVEL 3
// 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

let personAccount = {
    firstName: 'Kafilat',
    lastName: 'Adewumi',
    incomes: [],
    expenses:[],
    totalIncome() {
     return this.incomes.reduce((a,b)=>a+b, 0)
    },
    totalExpense() {
       return this.expenses.reduce((a,b)=>a+b, 0)
    },
    accountInfo: `${this.firstName} has total income of ${this.totalIncome} and total expenses of ${this.totalExpense}`,
    addIncome: function (val) {
        this.incomes.push(val)
    }, 
    addExpense: function (val) {
        this.expenses.push(val)
    },
    accountBalance () {
       return `${this.totalIncome() - this.totalExpense()}` 
    },
}

personAccount.addIncome(5000)
personAccount.addIncome(5000)
personAccount.addExpense(3000)
console.log(personAccount.incomes)
console.log(personAccount.expenses)
console.log(personAccount.accountBalance())

let personAccountJson = JSON.stringify(personAccount, undefined, 4)
localStorage.setItem(personAccount, personAccountJson)
console.log(localStorage)
