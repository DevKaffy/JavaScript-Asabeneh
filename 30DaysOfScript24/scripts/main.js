// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
const descEl = document.querySelector(".description")
const containerEl= document.querySelector("#container");
const planetImage =document.getElementById('planet-image')
const imgEl = document.querySelector("img")
const selectEl =document.querySelector('select')
const input = document.querySelector('input')
const button = document.querySelector('button')

if(!descEl.textContent) {
    containerEl.removeChild(descEl);
    containerEl.style.justifyContent ="center"
}

const planets =[
    {
        name:"jupiter",
        gravity: 23.7,
        img:"jupiter.png"

    },
    {
        name:"pluto",
        gravity: 0.7,
        img:"pluto.png"

    },
    {
        name:"Venus",
        gravity: 8.9,
        img:"venus.png"

    },
    {
        name:"mars",
        gravity: 3.7,
        img:"mars.png"

    },
    {
        name:"uranus",
        gravity: 8.87,
        img:"uranus.png"

    },
    {
        name:"saturn",
        gravity: 10.44,
        img:"saturn.png"

    },
    {
        name:"moon",
        gravity: 1.6,
        img:"moon.png"

    },
    {
        name:"neptune",
        gravity: 1.6,
        img:"neptune.png"
    },
    {
        name:"earth",
        gravity: 9.8,
        img:"earth.png"

    },

]
imgEl.setAttribute("src", `./images/${planets[2].img}` )
selectEl.addEventListener('change', () => {
    const selectedPlanet = selectEl.value
    planetImage.src = `./images/${selectedPlanet}.png`

})
