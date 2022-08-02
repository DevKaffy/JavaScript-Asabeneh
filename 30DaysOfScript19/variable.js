localStorage.clear()
// Exercises: Level 1
// 1. Create a closure which has one inner function

function outerFunction (){
    let count = 0;
    function innerFunction (){
        count++
        return count
    }
    return innerFunction
}
let innerFunc= outerFunction()

console.log(innerFunc())


// Exercises: Level 2
// 2. Create a closure which has three inner functions
function outFunction(){
    let countING =0;
    function functionOne(){
        countING++
        return countING
    }
    function functionTwo(){
        countING--
        return countING
    }
    function functionThree(){
        countING++
        return countING
    }
    return {
        functionOne,
        functionTwo,
        functionThree,
    }
}
const innerFunct = outFunction()

console.log(innerFunct.functionOne())
console.log(innerFunct.functionTwo())
console.log(innerFunct.functionThree())

// Exercises: Level 3
//1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount(inc, exp) {
    let firstName = 'Kafilat';
    let lastName = 'Adewumi';
    let incomes = [];
    let expenses = [];

    function totalIncome() {
     return incomes.reduce((a,b)=> a+b, 0)
    }

    function totalExpense() {
return expenses.reduce((a,b)=> a+b, 0)
    }

    function accountInfo() {
return `${firstName} has the total income of ${totalIncome} `
    }

    function addIncome() {
      incomes.push(inc)
    }

    function addExpense() {
     expenses.push(exp)
    }

    function accountBalance(){
    return `${totalIncome()-totalExpense()}`
    }

    return {
       totalIncome: totalIncome(),
        totalExpense: totalExpense(),
        accountInfo: accountInfo(),
        addIncome: addIncome(),
        addExpense: addExpense(),
        accountBalance: accountBalance(),
    }
}
totalFunc = personAccount()

// totalFunc.addIncome(1000)
// totalfFunc.addExpense(500)
console.log(totalFunc.totalIncome)

