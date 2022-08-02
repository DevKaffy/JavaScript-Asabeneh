localStorage.clear()
// PROMISES
// Exercises: Level 1
// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area

const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
.then(response=> response.json())
.then(data=> {
    console.log(data)
})
.catch(error=>console.error(error))

// Exercises: Level 2
//2. Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI)
.then(response=> response.json())
.then(data=> {
    console.log(data)
})
.catch(error=>console.error(error))

const fetchData = async () => {
    try {
      const response = await fetch(catsAPI)
      const names = await response.json()
      console.log(names)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()


//   Exercises: Level 3
//   1. Read the cats api and find the average weight of cat in metric unit.
  fetch(catsAPI)
  .then(res => res.json())
  .then(data => {
    console.log(data)

const result = data.map((data)=> data.weight.metric.split('-')).map((data)=> (Number(data[0]) + Number(data[1]))/data.length)
console.log({result})

// console.log(finalResult)
// const averageWeight = result/data.length
})
//   .catch(error => console.log(error))



// 2. Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    console.log({countries:data})
let sortedData = data.sort((a,b)=> b.population-a.population)
console.log({sortedData
})
let slicedData = sortedData.slice(0,10)
console.log(slicedData)
})

// 3. Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
.then(response=>response.json())
.then(data => {
    console.log({countries:data})
const countrieslanguagesName = data.map((country)=> country.languages).reduce((a,b) => {
    const languagesName = b.map( b=> b.name)
   return a.concat(...languagesName)
},[])
const uniqueLanguages = Array.from(new Set(countrieslanguagesName))
const totalLanguages = uniqueLanguages.length
console.log({uniqueLanguages, totalLanguages});
})

