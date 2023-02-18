// Video for loop and while Starts here!
// Loop example
//const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"] ;

//for (name of names){
    //console.log(name) ;
//}

// Loop example 2
//const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"] ;

//for (name of names){
    //console.log(`Hello there ${name}`) ;
//}

// Loop example 3
//const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"] ;

//for (name of names){
    //console.log(name) ;
    //if (name === "Maria") {
        //console.log("Maria is in my list!") ;
        //break ;
    //}
//}

// While loop exmaple
//let loading = 0 ;
//while(loading < 100){
    //console.log("Website is still loading") ;
    //loading++ ;
//}
// Video for loop and while ends here!

// Video for DOM Manipulation Starts here!
//does not work
//const text = document.querySelector(".title") ;
//const changeColor = document.querySelector(".changeColor") ;

//text.classList.add("change") ;
// does not work
//text.style.backgroundColor = "red" ;

// Event Listener
//const text = document.querySelector(".title") ;
//const changeColor = document.querySelector(".changeColor") ;

//changeColor.addEventListener("click", function(){
    //text.classList.add("change");
    //text.classList.toggle("change");
//})

// select list of items event listener example
//const userList = document.querySelectorAll(".name-list li") ;
//console.log(userList) ;

//using loops
//const userList = document.querySelectorAll(".name-list li") ;
//const listInput = document.querySlectpr(".list-input") ;
//for(user of userList){
    //user.addEventListener("click", function(){
        //this.style.color = "red";
    //})
//}


// Event Listener using function to create a list
//const userList = document.querySelector(".name-list") ;
//const listInput = document.querySelector(".list-input") ;
//const addListBtn = document.querySelector(".addListBtn") ;

//addListBtn.addEventListener("click", function() {
    //create an li out of thin air
    //const newLi = document.createElement("LI") ;
    //const liContent = document.createTextNode(listInput.value) ;
    // add the input value inside that new li
    //newLi.appendChild(liContent) ;
    // attaching the li to the user list
    //userList.appendChild(newLi) ;
//}) ;
// Video for DOM Manipulation Ends here!

//Module 5 Assignment Starts Here

// For Loop
const sections = ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6", "Module 7"] ;

for (assignment of sections){
    console.log(assignment) ;
    if (assignment === "Module 5") {
        console.log("Module 5 is due!") ;
        break ;
    }
}

// While Loop
let updating = 0 ;
while(updating < 100){
    console.log("Updating Website") ;
    updating++ ;
}


// Event Listener using function to create a list
const userList = document.querySelector(".items-list") ;
const listInput = document.querySelector(".list-input") ;
const addListBtn = document.querySelector(".addListBtn") ;

addListBtn.addEventListener("click", function() {
    //create an li out of thin air
    const newLi = document.createElement("LI") ;
    const liContent = document.createTextNode(listInput.value) ;
    // add the input value inside that new li
    newLi.appendChild(liContent) ;
    // attaching the li to the user list
    userList.appendChild(newLi) ;
}) ;

// Add/Change CSS properties
document.querySelector("#myButton").onclick = function(){
    const h2 = document.querySelector("#myH2") ;
    console.log(h2.style) ;
    h2.style.color = "white" ;
    h2.style.backgroundColor = "maroon" ;
    h2.style.fontFamily = "consolas" ;
    h2.style.textAlign = "center" ;
    h2.style.border = "4px solid" ;
    h2.style.borderColor = "black" ;
}

// Change CSS based upon a variable value
const makeSmaller = () => {
    let count = getComputedStyle(document.documentElement).getPropertyValue('--twm-count') ;
    const newValue = count / 2 ;
    document.documentElement.style.setProperty('--twm-count', newValue) ;
}
document.getElementById("smaller").addEventListener("click",makeSmaller);

const makeBigger = () => {
    let count = getComputedStyle(document.documentElement).getPropertyValue('--twm-count') ;
    const newValue = count * 2 ;
    alert(newValue) ;
    document.documentElement.style.setProperty('--twm-count', newValue) ;
}
document.getElementById("bigger").addEventListener("click", makeBigger);


//Module 5 Assignment Ends Here