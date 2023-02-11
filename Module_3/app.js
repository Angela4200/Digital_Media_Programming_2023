// function
function Artist() {
    console.log ("Art Practice") ;
    console.log ("Photography") ;
    console.log ("Digital Media") ;
    console.log ("Studio Artist") ;
}

//global scope
Artist(); 

// Object with Property Accessing Object Methods
const person = {
    firstName: "Digital",
    lastName: "Media",
    id: 20202023,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
} ;

// Event and Display data from the object:
document.getElementById("test").innerHTML = person.fullName();

// JS String Method
function myGreeting() {
    let text = document.getElementById("example").innerHTML=
    text.toUpperCaes() ;
}

//Invoke your functions
(function() {
    console.log("My favorite art medium is digital art. ") ;
})() ;

// Pass Parameters in and out
function art (x) {
    alert("Digital media " + x) ;
    return x ;
}

art("programming course 2023.") ;

function sum (x, y) {
    return x + y ;
}



