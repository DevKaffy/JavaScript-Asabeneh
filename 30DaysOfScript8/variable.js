// OBJECTS
// Create an empty object called dog
const dog ={}

// Print the the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Brownie',
dog.legs = 2,
dog.color = 'Brown',
dog.age = 5,
dog.bark = 'woof woof'

dog.getBark = function (){
        return this.bark
}
console.log(dog)




