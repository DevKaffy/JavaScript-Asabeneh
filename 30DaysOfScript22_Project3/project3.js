import {asabenehChallenges2020} from './project3_data.mjs'
console.log(asabenehChallenges2020)

const {description, challengeTitle, challengeSubtitle, challengeYear, keywords, author, challenges} = asabenehChallenges2020

let header = document.createElement('header')
// let challengeDescription = document.createElement('h1')
let challengeHeading = document.createElement('h2')
let challengeSubHeading = document.createElement('h3')
let yearSpan = document.createElement('span')

// h1 = document.querySelector('h1')
let wrapper = document.querySelector('.wrapper')


// challengeDescription.textContent = description
challengeHeading.textContent = `${challengeTitle} in `
challengeSubHeading.textContent = challengeSubtitle
yearSpan.textContent = challengeYear


// console.log(challengeHeading)

wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'



wrapper.appendChild(header)
// header.appendChild(challengeDescription)
header.appendChild(challengeHeading)
header.appendChild(challengeSubHeading)
challengeHeading.appendChild(yearSpan)

let body = document.body
