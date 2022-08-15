import {asabenehChallenges2020} from './project3_data.mjs'
console.log(asabenehChallenges2020)

const {description, challengeTitle, challengeSubtitle, challengeYear, keywords, author, challenges} = asabenehChallenges2020

let header = document.createElement('header')
// let challengeDescription = document.createElement('h1')
let challengeHeading = document.createElement('h2')
let challengeSubHeading = document.createElement('h3')
let yearSpan = document.createElement('span')
let container = document.createElement('div')
let challengeOne = document.createElement('div')
let python = document.createElement('div')


container.className = 'container'
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

}, 100)

// console.log(challengeHeading)

wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.alignItems = 'center'
wrapper.style.fontFamily = 'sans-Serif'

yearSpan.style.fontSize = '60px'
header.style.margin = '1rem'

wrapper.appendChild(header)
// header.appendChild(challengeDescription)
header.appendChild(challengeHeading)
header.appendChild(challengeSubHeading)
challengeHeading.appendChild(yearSpan)
wrapper.appendChild(container)
container.appendChild(challengeOne)
challengeOne.appendChild(python)

// let body = document.body
