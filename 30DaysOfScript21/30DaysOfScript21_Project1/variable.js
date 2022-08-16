// DOCUMENT OBJECT MODEL (DOM)
// Exercise: Level 1
// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const p = document.querySelector('p')
p.innerHTML = ''
let firstParagraph = document.querySelector('#first-paragraph')
let secondParagraph = document.querySelector('#second-paragraph')
let thirdParagraph = document.querySelector('#third-paragraph')
let fourthParagraph = document.querySelector('#fourth-paragraph')

let allParagraphs = document.querySelectorAll('p')
allParagraphs.forEach(paragraph => console.log(paragraph))

allParagraphs[0].setAttribute('id', 'paragraph-One')
allParagraphs[0].setAttribute('class', 'paragraphOne')

allParagraphs[1].id = 'paragraph-two'
allParagraphs[1].className = 'paragraphTwo'

allParagraphs[2].setAttribute('id', 'paragraph-Three')
allParagraphs[2].setAttribute('class', 'paragraphThree')

allParagraphs[3].id = 'paragraph-four'
allParagraphs[3].className = 'paragraphFour'

// let allParagraphs = document.querySelectorAll('p')
allParagraphs.forEach((paragraph, i) => {
    paragraph.style.fontSize = '24px'
    if(i % 2 === 0){
        paragraph.style.color = 'blue'
    } else{
        paragraph.style.color = 'yellow'
    }
    })

    allParagraphs.forEach((paragraph, i) => {
    paragraph.style.fontSize = '24px'
    if(i % 2 === 0){
        paragraph.style.backgroundColor = 'red'
    } else{
        paragraph.style.backgroundColor = 'green'
    }
    })

    allParagraphs.forEach((paragraph, i) => {
    paragraph.style.fontSize = '24px'
    if(i % 2 === 0){
        paragraph.style.fontFamily = 'Roboto'
    } else{
        paragraph.style.fontFamily = '"Impact,Charcoal,sans-serif"'
    }
    })

    allParagraphs.forEach((paragraph, i) => {
    paragraph.style.fontSize = '24px'
    if(i % 2 === 0){
        paragraph.style.border = '5px'
    } else{
        paragraph.style.border = '2px'
    }
    })

    allParagraphs[0].textContent = 'Adewumi Kafilat'

    allParagraphs[1].textContent = '30 Days of JavaScript, Asabeneh'

    allParagraphs[2].textContent = 'Codevillage Limited'