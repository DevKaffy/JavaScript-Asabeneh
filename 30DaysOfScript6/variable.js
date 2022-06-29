// N0: 3, 4, 6 and 10


//   for(let i=0; i<=10; i++){
//       console.log (i)
//   }

//   let i=0
//   while(i<=10) {
//       console.log(i)
//       i++
//   }

//   do {
//       console.log(i)
//       i++
//   } while (i<=10)

//   Iterate 10 to 0 using for loop, do the same using while and do while loop

// for(let j=10; j>=0; j--){
//     console.log(j)
// }
// let j=10
// while(j>=0) {
//     console.log(j)
//     j--
// }
// do {
//     console.log(j)
//     j--
// } while (j>=0)

// for(let a=0; a<=n; a++){
//     console.log(a)
// }
// for (let i=0; i<=7; i++){
//     console.log('#'.repeat(i))
// }

// for (let i=0; i<=10; i++){
//     console.log(`${i} ${i*i} ${i**i}`)
// }
// let x =""
// for(let i=0; i<7; i++){
//     console.log(x += '#');
// }

// for(let i=0; i<=10; i++){
//     console.log(`${i} * ${i} = ${i * i}`)
// }

// for (let l=0; l<=100; l++){
//     if(l%2==0)
//     console.log(l)
// }

// for (let b=0; b<=100; b++){
//     if((b%2)!==0)
//     console.log(b)
// }

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum =0
// for (let x=0; x<=100; x++){
//     sum = sum+x
// console.log(sum)
// }
// console.log('The sum of all numbers from 0 t0 1 is '+ (sum))

// let even=0
// for (let y=0; y<=100; y++){
//     if (y%2==0)
//     even= even+y
//     console.log(even)
// }
// console.log('The sum of all evens from 0 to 100 is ' + (even))

// let odd=0
// for (let z=0; z<=100; z++){
//     if ((z%2)!==0)
//     odd=odd+z
// console.log(odd)
// }
// console.log('The sum of all odds from 0 to 100 is ' + (odd) )

// let sumOfEven=[]
// let sEven=0
// let sOdd =0
// for(let i=0; i<=100; i++){
//     if (i%2==0) {
        
//         sEven= sEven+i
//     }
//     if ((i%2)!==0){
//         sOdd=sOdd+i
//     }
// }

// sumOfEven.push(sEven)
// sumOfEven.push(sOdd)
// console.log(sumOfEven)


let array=[];
while(array.length<5){
let randomFive = Math.floor(Math.random()*10);
array.push(randomFive);
}
console.log(array)

// OR

const arr=[]
for (let i=1; i<5; i++){
arr.push(Math.floor(Math.random()*10));
}
console.log(arr)

let unique=[]
while (unique.length<5){
    let u= Math.floor(Math.random()* 10);
    if (unique.indexOf (u) === -1) unique.push(u);
}
console.log(unique);

// OR

const arrOfNos =[]
for (let i = 0; i<10; i++){
    const random = Math.floor(Math.random()*10)
    if (arrOfNos.indexOf(random)===-1 && arrOfNos.length<5)
    arrOfNos.push(random)
}
console.log(arrOfNos)

const round = 'abcdefghijklmnopqrstuvwxyz1234567890'
let str = ''
for(let i=0; i<6; i++){
    const round = Math.floor(Math.random()*round.length)
}



// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
