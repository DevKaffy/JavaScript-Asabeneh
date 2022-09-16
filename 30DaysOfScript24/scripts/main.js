// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
const commentEl = document.querySelector(".comment")

const descEl = document.querySelector(".description")
const containerEl= document.querySelector("#container");
const planetImage =document.getElementById('planet-image')
const imgEl = document.querySelector("img")
const selectEl =document.querySelector('select')
const input = document.querySelector('input')
const button = document.querySelector('button')


const planets =[
    {
        name:"jupiter",
        gravity: 24.79,
        img:"jupiter.png"

    },
    {
        name:"pluto",
        gravity: 0.58,
        img:"pluto.png"

    },
    {
        name: "mercury",
        gravity: 3.7,
        img: "mercury.png"
    },
    {
        name:"Venus",
        gravity: 8.87,
        img:"venus.png"

    },
    {
        name:"mars",
        gravity: 3.71,
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
        gravity: 11.15,
        img:"neptune.png"
    },
    {
        name:"earth",
        gravity: 9.8,
        img:"earth.png"

    },

]
imgEl.setAttribute("src", `./images/${planets[2].img}` )
let gravity=0;

selectEl.addEventListener('change', (e) => {
    const selectedPlanet = planets.find((planet)=>planet.name.toLowerCase()===e.target.value.toLowerCase()) 
   gravity =selectedPlanet?.gravity

})
button.addEventListener("click", ()=>{
    if(!input.value){
       commentEl.textContent="Mass is required"
       return
    }
    if(!selectEl.value){
        commentEl.textContent="planet is required"
        return
    }
    commentEl.textContent=""
   const result = parseInt(input.value) * gravity
   descEl.textContent=`the mass of ${selectEl.value} is ${result}`
})

if(!descEl.textContent) {
    containerEl.removeChild(descEl);
    containerEl.style.justifyContent ="center"
}

// const selectedPlanet = selectEl.value
// planetImage.src = `./images/${selectedPlanet}.png`