var startButton = document.getElementById("startButton");
var egg = document.getElementsByClassName("egg");
var eggArr = Array.from(egg);
var eggL = document.getElementById("eggL");
var eggM = document.getElementById("eggM");
var eggR = document.getElementById("eggR");
var startMain = document.getElementById("startMain");
var eggArr = [];
var score = 0;
var scorePint = ``;
var basketJs = document.getElementById("basketJs");
var chick = document.getElementsByClassName("chick");
var life = document.getElementById("life");
var lifePoint = `20`;
var lifeCount = 20;
// var egg1 = Math.round(Math.random() * 3) + 3;
// var egg2 = Math.round(Math.random() * 3) + 3;
// var egg3 = Math.round(Math.random() * 3) + 3;
var basketPos = Math.floor(basketJs.getBoundingClientRect().left);
var chickM = document.getElementById("chickM");
var chickR = document.getElementById("chickR");
var chickL = document.getElementById("chickL");
var sound = document.getElementById("sound");
var end = document.getElementById("end");
var playAgain = document.getElementById("playAgain");

function resetScoreNlife () {  

    lifeCount=20
    lifePoint = ` <p>
    Life ` + lifeCount + `
</p>`;
score=0
    scorePint = ` <p>
Score ` + score + `
</p>`;
    document.getElementById("score").innerHTML = scorePint;
    
    document.getElementById("life").innerHTML = lifePoint;
   
}
function start(){
    {
            
        eggM.style.display = "block";
        eggR.style.display = "block";
        eggL.style.display = "block";
        startMain.style.display = "none";
        eggM.style.animationDuration = "" + 3 + "s";
        eggR.style.animationDuration = "" + 4 + "s";
        eggL.style.animationDuration = "" + 3.5 + "s";
        resetScoreNlife()
    }
}

function game() {
    
    for (var i = 0; i < egg.length; i++) {
        eggArr.push(egg[i]);
        startButton.addEventListener("click", start )
    }
    var eggLtop;
    var theBacketPos;
    document.body.addEventListener("mousemove", function(e) { //basket position
        basketJs.style.left = e.clientX;
        theBacketPos = e.clientX;
    })
    let coun=0
  let counting=0;

    setInterval(function() { //right egg
        coun++
        eggRtop = Math.floor(eggR.getBoundingClientRect().top);
        if (eggRtop>550) {
            
            
            if (theBacketPos > 1050 && theBacketPos < 1200) {
                addScore()
            } else {
                minLife()
                endGame()
                chickR.style.display = "block";
            }
        }
        
        eggMtop = Math.floor(eggM.getBoundingClientRect().top);
        if (eggMtop >550) {
        
           
            if (theBacketPos > 630 && theBacketPos < 770) {
                
                addScore()
            } else {
                minLife()
                endGame()
                chickM.style.display = "block";
            }
        }

        eggLtop = Math.floor(eggL.getBoundingClientRect().top);
        if (eggLtop> 550) {
           
            
            if (theBacketPos > 210 && theBacketPos < 350) {
                addScore()
            } else {
                minLife()
                 endGame()
                 chickL.style.display = "block";
            }
        }
    },100 )
 
function addScore() {
    score++
    scorePint = ` <p>
Score ` + score + `
</p>`;
    document.getElementById("score").innerHTML = scorePint;
    chickM.style.display = "none";
}
function minLife() {
    lifeCount--
    lifePoint = ` <p>
    Life ` + lifeCount + `
</p>`;
    document.getElementById("life").innerHTML = lifePoint;
 
}
}
function endGame() {
    if (lifeCount <= 0) { 
    
        startMain.style.display="flex"
        eggM.style.display = "none";
        eggR.style.display = "none";
        eggL.style.display = "none";
        chickM.style.display = "none";
        chickR.style.display = "none";
        chickL.style.display = "none";
    }
    
}

game()
