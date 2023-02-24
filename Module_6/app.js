//Object
const Profile ={
    name: "Ava",
    yearStarted: 2020,
    city: "San Antonio",
}

//Object Method
console.log(Profile) ;

//Array
const supplies = ["Camera", "Tripod", "Photoshop", "Premiere Pro", "Back Drop" ];
//Access an item by its index 
console.log(supplies.indexOf("Photoshop"));

//Array Method
const customers = ["Olivia", "Zach", "Anna", "Josh", "Alina" ];
// Add more things using methods on array
customers.push("A new customer request!") ;
console.log(customers) ;



// Add/Change CSS properties
document.querySelector("#myButton").onclick = function(){
    const h3 = document.querySelector("#myH3") ;
    console.log(h3.style) ;
    h3.style.color = "white" ;
    h3.style.backgroundColor = "maroon" ;
    h3.style.fontFamily = "Times New Roman" ;
    h3.style.textAlign = "center" ;
    h3.style.border = "4px solid" ;
    h3.style.borderColor = "#009999" ;
}

