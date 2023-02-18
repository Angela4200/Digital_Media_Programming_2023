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
