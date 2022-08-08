let wrapperA = document.querySelector('.asabeneh-wrapper')
wrapperA.style.display = 'flex'
wrapperA.style.alignItems = 'center'
wrapperA.style.justifyContents = 'center'
wrapperA.style.flexDirection ='column'
wrapperA.style.marginTop = '1rem'

// let firstA = document.querySelector('h1')
// firstA.style.margin = '0'

let second = document.querySelector('.script')
second.style.marginTop = '0'
second.style.marginBottom = '1rem'
second.style.borderBottom = '2px solid black'

let containerA = document.querySelector('.container-asabeneh')
containerA.style.width = '40%'
containerA.style.height = '70%'
containerA.style.alignItems = 'center'
containerA.style.backgroundColor ='red'

let python = document.querySelector('.python')
python.style.display = 'flex'
// python.style.alignItems = 'center'
python.style.justifyContent = 'space-between'
python.style.padding = '1rem'
python.style.margin = '2px'

let javascript = document.querySelector('.javascript')
javascript.style.display = 'flex'
// javascript.style.alignItems = 'center'
javascript.style.justifyContent = 'space-between'
javascript.style.padding = '1rem'
javascript.style.margin = '2px'

let htmlHead = document.createElement('div')
let html = document.createElement('div')
let css = document.createElement('div')
let coming =document.createElement('div')
let reactHead = document.createElement('div')
let react = document.createElement('div')
let reactSecond = document.createElement('div')
let comingTwo = document.createElement('div')
let reactNative = document.createElement('div')
let reactO = document.createElement('div')
let reactT = document.createElement('div')
let comingThree = document.createElement('div')
let fullStack = document.createElement('div')
let full = document.createElement('div')
let stack = document.createElement('div')
let comingFour = document.createElement('div')



containerA.appendChild(htmlHead)
htmlHead.appendChild(html)
htmlHead.appendChild(css)
htmlHead.appendChild(coming)

containerA.appendChild(reactHead)
reactHead.appendChild(react)
reactHead.appendChild(reactSecond)
reactHead.appendChild(comingTwo)

containerA.appendChild(reactNative)
reactNative.appendChild(reactO)
reactNative.appendChild(reactT)
reactNative.appendChild(comingThree)

containerA.appendChild(fullStack)
fullStack.appendChild(full)
fullStack.appendChild(stack)
fullStack.appendChild(comingFour)


html.className = 'html'
css.className= 'css'
coming.className = 'coming'
react.className = 'react'
reactSecond.className = 'react-second'
comingTwo.className = 'coming-two'

html.textContent = '30 Days Of HTML and CSS'
css.textContent = 'HTML&CSS'
coming.textContent = 'Coming'

react.textContent = '30 Days Of React'
reactSecond.textContent = 'React'
comingTwo.textContent = 'Coming' 

reactO.textContent = '30 Days Of ReactNative'
reactT.textContent = 'ReactNative'
comingThree.textContent = 'Coming' 


full.textContent = '30 Days Of FullStack'
stack.textContent = 'FullStack'
comingFour.textContent = 'Coming' 

htmlHead.style.display = 'flex'
htmlHead.style.justifyContent = 'space-between'
htmlHead.style.padding = '1rem'
htmlHead.style.margin = '2px'

reactHead.style.display ='flex'
reactHead.style.justifyContent = 'space-between'
reactHead.style.padding = '1rem'
reactHead.style.margin = '2px'

reactNative.style.display ='flex'
reactNative.style.justifyContent = 'space-between'
reactNative.style.padding = '1rem'
reactNative.style.margin = '2px'

fullStack.style.display ='flex'
fullStack.style.justifyContent = 'space-between'
fullStack.style.padding = '1rem'
fullStack.style.margin = '2px'


