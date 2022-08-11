let wrapper = document.querySelector('.wrapper')
wrapper.style.display = 'flex'
wrapper.style.alignItems = 'center'
wrapper.style.flexDirection = 'column'



let h1 = document.querySelector('h1')
h1.style.marginTop = '1rem'
h1.style.marginBottom = '0'
h1.style.padding = '0'
h1.style.color = '#5bbc7a'

let dom = document.querySelector('.dom')
dom.style.fontSize = '18px'
dom.style.fontWeight = 100

// let name = document.querySelector('.name')

let number = document.querySelector('.number')
number.style.color ='red'

let input = document.querySelector('input')
input.style.padding = '11px 15rem 11px 4px'
input.style.marginRight = '20px'
input.style.marginTop = 'none'
input.style.border = '2px solid #5bbc7a'
// input.addEventListener('click', e => {

// })
// input.style.backgroundColor = 'red'

let generate = document.querySelector('.generate')


let flex = document.querySelector('.flex')
flex.style.display = 'flex'

let container = document.querySelector('.container')
container.style.display = 'grid'
container.style.gridTemplateColumns = 'repeat(9, 1fr)'
container.style.padding = '20px'
container.style.width = '50%'



let button = document.querySelector('button') 
button.style.backgroundColor = '#5bbc7a'
button.style.color = 'white'
button.style.border = 'none'
button.style.padding = '9.5px'
button.style.fontSize = '20px'

function isPrime(num) {
    if(num < 2) return false;
  
    for (let k = 2; k < num; k++){
      if( num % k == 0){
        return false;
      }
    }
    return true;
  }

const generateNum= (max=51) => {
    container.innerHTML = ''
    Array.from(Array(max).keys()).forEach(num => {
        const eachDiv = document.createElement('div')
        eachDiv.textContent = num
        eachDiv.style.width = '70px'
        eachDiv.style.height = '30px'
        eachDiv.style.display = 'flex'
        eachDiv.style.justifyContent = 'center'
        eachDiv.style.alignItems = 'center'
        eachDiv.style.background = isPrime(num) ?'red' : num % 2 ? 'green':'yellow'
        eachDiv.style.margin= '2px'


        container.appendChild(eachDiv)
    })
}
generateNum()

button.addEventListener('click', () => {
   const inputValue = Number(input.value)
    if(!inputValue){
        number.textContent = 'Input value must be a number'
        return
    }
   generateNum(inputValue)
 })