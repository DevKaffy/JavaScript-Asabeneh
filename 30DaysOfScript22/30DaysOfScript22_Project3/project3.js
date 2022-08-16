import {asabenehChallenges2020} from './project3_data.mjs'
console.log(asabenehChallenges2020)

const {description, challengeTitle, challengeSubtitle, challengeYear, keywords, author, challenges} = asabenehChallenges2020

let header = document.createElement('header')
// let challengeDescription = document.createElement('h1')
let challengeHeading = document.createElement('h2')
let challengeSubHeading = document.createElement('h3')
let yearSpan = document.createElement('span')
let dateContainer = document.createElement('div')
let mainContainer = document.createElement('main')
let challengeOne = document.createElement('div')
let python = document.createElement('div')


mainContainer.className = 'container'
challengeOne.className = 'challenge-one'
python.className = 'python'
// h1 = document.querySelector('h1')
let wrapper = document.querySelector('.wrapper')



// challengeDescription.textContent = description
challengeHeading.textContent = `${challengeTitle} in `
challengeSubHeading.textContent = challengeSubtitle
yearSpan.textContent = challengeYear
python.textContent = challenges[0]
console.log(python)



function randomNoGen () {
    const str = "abcdef1234567890"
    let randomNo = "#"
    for (let i = 0; i < 6; i++) {
      const rand = Math.floor(Math.random() * str.length)
      randomNo+=str[rand]
    }
      return randomNo
    }
    
setInterval (()=>{
yearSpan.style.color = randomNoGen()
dateContainer.textContent = dateFunction()
dateContainer.style.backgroundColor =randomNoGen()
}, 100)

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let dateFunction = () =>{
  let now = new Date();
  let year = now.getFullYear()
  let month = months[now.getMonth()]
  let date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
  let hours = now.getHours() < 10 ? '0' + now.getHours() :now.getHours()
  let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes : now.getMinutes()
  let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds : now.getSeconds()
  return `${month} ${date}, ${year} ${hours}:${minutes}:${seconds} `
}


wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.alignItems = 'center'
wrapper.style.fontFamily = 'sans-Serif'

yearSpan.style.fontSize = '60px'
challengeHeading.style.margin = 0
challengeSubHeading.style.margin = 0

header.style.margin = '1rem'
header.style.display = 'flex'
header.style.alignItems = 'center'
header.style.flexDirection = 'column'

wrapper.appendChild(header)
// header.appendChild(challengeDescription)
header.appendChild(challengeHeading)
header.appendChild(challengeSubHeading)
header.appendChild(dateContainer)
challengeHeading.appendChild(yearSpan)
wrapper.appendChild(mainContainer)
container.appendChild(challengeOne)
challengeOne.appendChild(python)

// let body = document.body
