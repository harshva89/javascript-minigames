const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeleft= document.querySelector("#time-left");
let score = document.querySelector("#score");

let result =0;
let currentTime = timeleft.textContent;

function randomSquare(){
    square.forEach(className => {
        className.classList.remove('mole');
    })
    let randomPos = square[Math.floor(Math.random()*9)];
    randomPos.classList.add('mole');

    hitPosition = randomPos.id;
}

square.forEach(id =>{
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result+=1;
            score.textContent = result;
        }
        square.forEach(className => {
        className.classList.remove('mole');
    })
    })
})
let timerId2 = null;
function moveMole(){
    
    timerId2 = setInterval(randomSquare, Math.floor(Math.random()*500)+400);
}

moveMole();

function countDown(){
    currentTime--;
    timeleft.textContent = currentTime;
    

    if(currentTime ===0){
        clearInterval(timerId);
        clearInterval(timerId2);
        document.querySelector(".grid").innerHTML = "<h1>Game Over! Your Score: "+result+"</h1>&nbsp;&nbsp;&nbsp;&nbsp;<a href='../ConnectFour/index.html'><button style='padding: 5px;'>Next Game</button></a>"
        
    }
}

let timerId = setInterval(countDown, 1000);

