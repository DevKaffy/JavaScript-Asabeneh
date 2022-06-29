import countries from './countries.js'

console.log(countries)
console.log(countries.includes('Ethiopia'))
console.log(countries[4])
let middleCountry=countries[5]
console.log(middleCountry)

let countriesLength= countries.length
if (countriesLength%2===0) {
    let divideArray=(Math.ceil(countries.length/2))
    const firstHalf= countries.splice(0, divideArray )
    const secondHalf= countries.splice(-divideArray )
    console.log(firstHalf)
    console.log(secondHalf)
} else {
    firstHalf.unshift('Dubai')
    console.log(firstHalf)
}

import {webTechs} from './web_techs.js'
console.log(webTechs)
console.log(webTechs.includes('Sass'))
webTechs.unshift('Sass')
console.log(webTechs)

