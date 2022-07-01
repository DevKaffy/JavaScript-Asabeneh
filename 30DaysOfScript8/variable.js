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

// Get name, legs, color, age and bark value from the dog object
const properties = Object.keys(dog)
console.log(properties)

// Set new properties the dog object: breed, getDogInfo
// dog = getDogInfo.info.bind(breed)


const users = {
        Alex: {
          email: 'alex@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        Asab: {
          email: 'asab@asab.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
          age: 25,
          isLoggedIn: false,
          points: 50
        },
        Brook: {
          email: 'daniel@daniel.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        Daniel: {
          email: 'daniel@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        John: {
          email: 'john@john.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          points: 50
        },
        Thomas: {
          email: 'thomas@thomas.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        Paul: {
          email: 'paul@paul.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      }

// Find the person who has many skills in the users object.
const result = Object.entries(users)
.map((users)=> [users[0], users[1].skills.length]).sort((a,b)=> b[1] - a[1])[0]
console.log(result)

// Count logged in users, count users
// having greater than equal to 50 points from the following object.
const logged = Object.values(users).filter(user => user.points >= 50).length
console.log('users having greater than or equal to 50 points are ' + logged)

// Find people who are MERN stack developer from the users object
const mern = Object.entries(users).filter(users=>users[1].skills.includes('MongoDB', 'Express', 'React', 'Node'))
console.log(mern.map((mern) =>  mern[0]))

// Set your name in the users object without modifying the original users object
users.Kafilat ={
        email: 'kafilatadewumi61@gmail.com',
        skills:'[HTML, CSS, JavaScript]',
        age:30,
        isLoggedIn:true,
        points:30
}
console.log(users)

// Get all keys or properties of users object
const keys = Object.keys(users)
console.log(keys)

// Get all the values of users object
const items = Object.values(users)
console.log(items)

// Use the countries object to print a country name, capital, populations and languages.
const countries ={
        name : 'Nigeria',
        capital: 'Abuja',
        population: '1 million',
        languages: ['English', 'Hausa', 'Yoruba', 'Igbo']
}
console.log(countries)

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes
// and its description and expenses is a set of incomes and its description.
const personAccount={
        firstName: 'Kafilat',
        lastName: 'Adewumi',
        incomes: 200000,
        expenses:100000,
        totalIncome: 400000,
        totalExpenses:100000,
        accountInfo:'July 1 2022',
        accountBalance:300000,
}
console.log(personAccount)

// Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    let users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

function generateId(length=4){
      const randomId= Math.random().toString(36).substring(2,2+length)
      console.log(randomId)
      return randomId
}
console.log(generateId(6))
console.log(new Date().toLocaleString())
function signUp(name, email, password){
        const userExist = users2.find(user => user.email === email)
        console.log(userExist)
        if(userExist){
                console.log('account already exist, kindly sign in')
                return 
        }
        else{
                const newUser={
                        name,
                        email,
                        password,
                        id:generateId(),
                        createdAt: new Date().toLocaleString(),
                        isLoggedIn:false,
                }
users2.push(newUser)
console.log(users2)
        }
}

function signIn(){
const email = prompt ('Enter your email address:')
const password= prompt ('Enter your password:')
const userExist = users2.find(user => (user.email === email  && user.password === password))
if(userExist){
users2=users2.map(user=>{
        if(userExist.email === user.email){
                        return {
                                ...user,
                                isLoggedIn:true
                        }
        }
        else{
                return user
        }
}) 
console.log(users2)     
}else{
        console.log('wrong credentials,try again' )
}
}
console.log(signIn())

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product 

const productArray ={
        firstProduct :{
                name: 'Cream',
                title: 'Creamy lotion',
                use:'body',
                type:'container',
                color:'white',
                period: 'night',
        },
        secondProduct:{
                name: 'Cream',
                title: 'Creamy yoghurt',
                use:'face',
                type:'cup',
                color:'Off white',
                period: 'day',
        },
        thirdProduct:{
                name: 'Cream',
                title: 'moisturizer',
                use:'hand',
                type:'container',
                color:'pink',
                period:'night'
        }
}
function rateProduct(){

}

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(){

}

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(){

}
