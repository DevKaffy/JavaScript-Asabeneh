import {countries_data} from './countries.mjs'
console.log(countries_data)

    // body.style.margin = '0px'
    // body.style.padding= '0px'

// Use the countries array to display all the countries.See the design
let wrapper = document.querySelector('.countries-wrapper')
wrapper.style.display = 'flex'
wrapper.style.alignItems = 'center'
wrapper.style.justifyContent = 'center'
wrapper.style.flexDirection = 'column'
wrapper.style.marginTop = '5rem'
wrapper.style.fontFamily = 'Sans-serif'

let first = document.querySelector('.first')
first.style.display = 'flex'
first.style.margin= '0'
first.style.padding = '0'

let firstHeading = document.querySelectorAll('.first-heading')
firstHeading.forEach((heading, i) => {
    firstHeading[0].style.marginRight = '25px'
    firstHeading[1].style.marginRight = '25px'
})
let secondHeading = document.querySelector('h3')
secondHeading.style.margin = '0'
secondHeading.style.marginBottom = '5px'

let container = document.querySelector('.countries-container')
container.style.display = 'grid'
container.style.gridTemplateColumns = 'repeat(6, 1fr)'
// container.style.backgroundColor = 'red'
container.style.gridGap = '5px'
container.style.padding = '5px'
container.style.margin = '15px auto'
container.style.padding = '15px auto'


for(let i = 0; i<=countries_data.length; i++){
    let countries = document.createElement('div')
    countries.textContent = countries_data[i].name
    countries.style.fontSize = '15px'
    // countries.style.fontWeight = '20rem'
    // countries.style.backgroundColor = 'red'
    countries.style.padding = '50px 0'
    countries.style.textAlign = 'center'
    countries.style.boxShadow = '0 3px 10px  rgba(0, 0, 0, 0.1)'
    container.appendChild(countries)
}
