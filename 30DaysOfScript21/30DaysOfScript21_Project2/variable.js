let lists = document.querySelector('.wrapper')
lists.style.display = 'flex'
lists.style.alignItems = 'center'
lists.style.flexDirection = 'column'

let heading = document.querySelector('.title')
heading.style.display = 'flex'
heading.style.alignItems = 'center'
heading.style.flexDirection  = 'column'

let h1= document.querySelector('h1')
h1.style.marginBottom = '5px'

let yearSpan = document.querySelector('.year')
yearSpan.style.fontSize = '100px'

let h2 = document.querySelector('h2')
h2.style.marginBottom = '10px'
h2.style.width ='max-content'
h2.style.borderBottom = '2px solid black'
h2.style.textAlign = 'center'
h2.style.fontSize = '20px'

let months = ['January', 'February', 'March', 'April', 'May', 'JUne', 'July', 'August', 'September', 'October', 'November', 'December']
let showDateTime = () => {
    let now = new Date()
    let year = now.getFullYear()
    let month = months[now.getMonth()]
    let date = now.getDate() < 10? '0'+now.getDate() : now.getDate()
    let hours = now.getHours() < 10?'0'+now.getHours() : now.getHours()
    let minutes = now.getMinutes() < 10? '0'+now.getMinutes() : now.getMinutes()
    let seconds = now.getSeconds() < 10? '0'+now.getSeconds():now.getSeconds()
    
    return `${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`
}
let date = document.querySelector('.date')
date.style.padding = '5px'

let randomColor =() => {
    let alphanumeric = '0123456789abcdef'
    let emptystr = ''
    let hexa
    for (let i = 0; i < 6; i++) {
        hexa = Math.floor(Math.random()*alphanumeric.length)
        hexa = alphanumeric[hexa]
        emptystr = emptystr + hexa    
    }
    return '#'+ emptystr 
}

setInterval(()=>{
    date.textContent = showDateTime()
    date.style.backgroundColor = randomColor()
    yearSpan.style.color = randomColor()

},1000)
 let ul = document.querySelector('ul')
ul.style.paddingLeft ='0'


let titles = document.querySelectorAll('li')
titles.forEach(title => {
    title.style.marginBottom = '2px'
    title.style.fontsize = '1rem'
    title.style.padding = '10px'
    title.style.listStyle= 'none'
    title.style.fontFamily ='Roboto'
    title.style.paddingRight = '200px'
})

let first = document.querySelector('.first-color')
first.style.backgroundColor = '#21bf73'

let second = document.querySelector('.second-color')
second.style.backgroundColor = '#fddb3a'

let alls = document.querySelectorAll('.overall')
alls.forEach(all => {
    all.style.backgroundColor = '#fd5e53'
})




