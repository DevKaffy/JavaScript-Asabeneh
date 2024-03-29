let wrapper = document.querySelector('.wrapper')
wrapper.style.display = 'flex'
wrapper.style.alignItems = 'center'
wrapper.style.flexDirection = 'column'
wrapper.style.fontFamily = 'Sans-serif'



let h1 = document.querySelector('h1')
h1.style.marginTop = '1rem'
h1.style.marginBottom = '0'
h1.style.padding = '0'
h1.style.color = '#5bbc7a'

let dom = document.querySelector('.dom')
dom.style.fontSize = '18px'
dom.style.fontWeight = 100
dom.style.margin = 0

// let name = document.querySelector('.name')

let number = document.querySelector('.number')
number.style.color ='red'
number.style.marginBottom = 0

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
container.style.marginTop = '20px'
container.style.width = '100%'
// container.style.paddingRight = '50px'



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
        eachDiv.style.height = '50px'
        eachDiv.style.display = 'flex'
        eachDiv.style.justifyContent = 'center'
        eachDiv.style.alignItems = 'center'
        eachDiv.style.background = isPrime(num) ?'#fd5e53' : num % 2 ? '#21bf73':'#fddb3a'
        eachDiv.style.margin= '2px'
        eachDiv.style.color = 'white'
        eachDiv.style.fontSize = '30px'

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