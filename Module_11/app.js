// Jumping Block Game Starts Here
/*
var role = document.getElementById("role");
var block = document.getElementById("block");
var startGame1 = document.getElementById("startgame1");

function jump() {
    if(role.classList != "animate"){
    role.classList.add("animate");
    }
    setTimeout(function(){
        role.classList.remove("animate");
    },500);
    
    var checkDead = setInterval(function(){
        var characterTop =
        parseInt(window.getComputedStyle(role).getPropertyValue("top"));
        var blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft<20 && blockLeft>0 && characterTop>=130){
            block.style.animation = "none";
            block.style.display = "none";
            alert("You Lose");
        }
    },10);
}
startGame1.addEventListener("click", jump);
*/
// Jumping Block Game End

// Tic Tac Toe Starts Here
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", "",];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = fasle;
    }
    else if (!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", "",];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
// Tic Tac Toe Ends Here

//Falling Ball Game Starts Here
var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
var currentBlocks = [];
var startGame3 = document.getElementById("startgame3");

function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0){
        character.style.left = left - 2 + "px";
    }
}
function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<380){
        character.style.left = left + 2 + "px";
    }
}
document.addEventListener("keydown", event => {
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            interval = setInterval(moveLeft, 1);
        }
        if(event.key==="ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
    }
});
document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});

function fallGameStart(){
    var blocks = setInterval(function(){
        var blockLast = document.getElementById("block"+(counter-1));
        var holeLast = document.getElementById("hole"+(counter-1));
        if(counter>0){
            var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
            var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
        }
        if(blockLastTop<400||counter==0){
            var block = document.createElement("div");
            var hole = document.createElement("div");
            block.setAttribute("class", "block");
            hole.setAttribute("class", "hole");
            block.setAttribute("id", "block"+counter);
            hole.setAttribute("id", "hole"+counter);
            block.style.top = blockLastTop + 100 + "px";
            hole.style.top = holeLastTop + 100 + "px";
            var random = Math.floor(Math.random() * 360);
            hole.style.left = random + "px";
            game.appendChild(block);
            game.appendChild(hole);
            currentBlocks.push(counter);
            counter++;
        }
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        var drop = 0;
        if(characterTop <= 0){
            alert("Game over. Score: "+(counter-9));
            clearInterval(blocks);
            location.reload();
        }
        for(var i = 0; i < currentBlocks.length;i++){
            let current = currentBlocks[i];
            let iblock = document.getElementById("block"+current);
            let ihole = document.getElementById("hole"+current);
            let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
            let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
            iblock.style.top = iblockTop - 0.5 + "px";
            ihole.style.top = iblockTop - 0.5 + "px";
            if(iblockTop < -20){
                currentBlocks.shift();
                iblock.remove();
                ihole.remove();
            }
            if(iblockTop-20<characterTop && iblockTop>characterTop){
                drop++;
                if(iholeLeft<=characterLeft && iholeLeft+20>=characterLeft){
                    drop = 0;
                }
            }
        }
        if(drop==0){
            if(characterTop < 480){
                character.style.top = characterTop + 2 + "px";
            }
        }else{
            character.style.top = characterTop - 0.5 + "px";
        }
    },1);
}

startGame3.addEventListener("click", fallGameStart);
//Falling Ball Game Ends Here

// Tabs Start here

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className =
        tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
}
 //Tabs Ends Here

 // AJAX Starts Here
const btn = document.querySelector('button');
const main = document.querySelector('.container');
const url = 'data.txt';
//console.log(btn);
btn.onclick = reqData;

//btn.onclick = ()=>{ console.log('clicked');}

function output(data){
    console.log(data);
    console.log(this.responseText);
    main.innerHTML = this.responseText;
}

function reqData(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',output);
    xhr.open('GET', url);
    xhr.send();
    console.log(xhr);
}
// AJAX Ends Here