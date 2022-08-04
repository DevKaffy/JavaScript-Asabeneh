const lists = document.querySelector('.wrapper')
lists.style.display = 'flex'
lists.style.alignItems = 'center'
lists.style.flexDirection = 'column'

const heading = document.querySelector('.title')
heading.style.display = 'flex'
heading.style.alignItems = 'center'
heading.style.flexDirection  = 'column'

const h1= document.querySelector('h1')
h1.style.marginBottom = '10px'



const h2 = document.querySelector('h2')
h2.style.marginBottom = '10px'
h2.style.width ='max-content'
h2.style.borderBottom = '2px solid black'
h2.style.textAlign = 'center'
h2.style.fontSize = '20~px'

const ul = document.querySelector('ul')
ul.style.paddingLeft ='0'


const titles = document.querySelectorAll('li')
titles.forEach(title => {
    title.style.marginBottom = '2px'
    title.style.fontsize = '1rem'
    title.style.padding = '10px'
    title.style.listStyle= 'none'
    title.style.fontFamily ='Roboto'
})

const first = document.querySelector('.first-color')
first.style.backgroundColor = 'green'

const second = document.querySelector('.second-color')
second.style.backgroundColor = 'yellow'

const alls = document.querySelectorAll('.overall')
alls.forEach(all => {
    all.style.backgroundColor = 'red'
})




