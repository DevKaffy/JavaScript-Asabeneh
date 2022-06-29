let user=prompt('Enter your age')
if (user>=18) {
    console.log('You are old enough to drive')
} else {
    console.log('You are left with ' + (18-user) + ' years to drive')
    
}

let myAge= prompt('Enter my age')
let yourAge=prompt('Enter your age')
if (yourAge>myAge) {
     console.log('You are ' + (yourAge-myAge) + ' years' + ' older than me')
} else {
    
}

let a = 4
let b = 3
if (a>b) {
    console.log(a + ' is greater than ' + b)
} else {
    console.log(a  + ' is less than ' + b)
}
const output=a > b ? ( a + " is greater than" + b): (a + "is less than " + b);
console.log(output)

let even= prompt('Enter a number:')
if ( even %2 == 0) {
    console.log(even + ' is an even number')
} 
 else {
    console.log(even + ' is an odd number')
}


let grade= 55
if (grade >= 80 ) {
    console.log('A')
} else if (grade >= 70 && grade <=79 ) {
    console.log('B')
}else if (grade >=60 && grade <=69) {
    console.log('C')
}else if (grade >=50 && grade <=59) {
    console.log('E')
}else if (grade>=0 && grade <=49) {
    console.log('F')
}

let season=prompt('Enter a season:')
switch (season) {
case 'September':
case 'October':
case 'November':
console.log('Autumn');
        break;
case 'December':
case 'January': 
case 'February':
console.log('Winter');
        break;
case 'March':
case 'April':
case 'May':
console.log('Spring');
        break;
case 'June': 
case 'July':
case 'August':
console.log('Summer');
        break;
    default:
}

let day=prompt('What is the day today?')
switch(day){
case 'Saturday':
 console.log(day + ' is a weekend.');
 break;
 case 'SaturDaY':
 console.log(day + ' is a weekend.');
 break;
 case 'Friday':
 console.log(day + ' is a working day.');
 break;
 case 'FriDaY':
 console.log(day + ' is a working day.');
 break;
 default:
}

let numberMonth= prompt('Enter a month:')
switch (numberMonth.toLowerCase()){
case 'january':
  console.log(numberMonth + ' has 31 days');
    break;
case 'february':
    console.log(numberMonth + ' has 28 days');
    break;
default:
}

let numberOfDays= prompt('Enter a month:')
switch (numberOfDays.toLowerCase()){
case 'january':
  console.log(numberOfDays+ ' has 31 days');
    break;
case 'february':
    console.log(numberOfDays + ' has 29 days');
    break;
default:
}



