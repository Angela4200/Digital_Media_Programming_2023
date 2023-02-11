// Create a concatenated string variable
const course = "Digital media programming " ;
const year = 2023 ;

const combined = course + year ;
console.log(combined) ;

//"if" Conditional Statement
const ageGroup = 11;

if (ageGroup > 21) {
    console.log("Welcome to website!") ;
} else if(ageGroup < 14) {
    console.log("Sorry you are not able to visit this website!") ;
}
else {
    console.log("You need to be at least 18 or older!") ;
}

// Switch Statement
const day = prompt("Enter the day: ") ;

switch (day) {
    case "Monday" :
    case "Tuesday" :
    case "Wednesday" :
    case "Thursday" :
    case "Friday" :
        console.log("Weekday") ;
        break ;
    case "Saturday" :
    case "Sunday" :
        console.log("Weekend") ;
        break ;
    default:
        console.log("Invaild Day") ;
}
document.getElementById("Week Days").innerHTML = "Today is " + day;


// String Method
function myGreeting() {
    let text = document.getElementById("greeting").innerHTML=
    text.toUpperCaes() ;
}

// Number Method 
const decimal = 4.14659 ;
console.log(decimal.toFixed(2)) ;

num2 = decimal.toPrecision(2) ;
console.log(num2) ;

const lightSpeed = 156000 ;
console.log(lightSpeed.toExponential()) ;
