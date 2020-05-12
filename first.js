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
var lifePoint = `10`;
var lifeCount = 10;
var egg1 = Math.round(Math.random() * 3) + 3;
var egg2 = Math.round(Math.random() * 3) + 3;
var egg3 = Math.round(Math.random() * 3) + 3;
var basketPos = Math.floor(basketJs.getBoundingClientRect().left);
var chickM = document.getElementById("chickM");
var chickR = document.getElementById("chickR");
var chickL = document.getElementById("chickL");
var sound = document.getElementById("sound");
var end = document.getElementById("end");
var playAgain = document.getElementById("playAgain");


function game() {
    
    for (var i = 0; i < egg.length; i++) {
        eggArr.push(egg[i]);
        startButton.addEventListener("click", function() {
            eggM.style.display = "block";
            eggR.style.display = "block";
            eggL.style.display = "block";
            startMain.style.display = "none";
            eggM.style.animationDuration = "" + egg1 + "s";
            eggR.style.animationDuration = "" + egg2 + "s";
            eggL.style.animationDuration = "" + egg3 + "s";
        })
    }
    var eggLtop;
    var theBacketPos;
    document.body.addEventListener("mousemove", function(e) { //basket position
        basketJs.style.left = e.clientX;
        theBacketPos = e.clientX;
    })
    let coun=0
    setInterval(function() { //LEFT egg 
        eggLtop = Math.floor(eggL.getBoundingClientRect().top);

        if (eggLtop == 500) {
            coun++
            console.log(coun)
            if (theBacketPos > 150 && theBacketPos < 250) {
                addScore()
            } else {
                minLife()
                 endGame()
            }
        }
    },20 )
    setInterval(function() { //right egg
        eggRtop = Math.floor(eggR.getBoundingClientRect().top);
       
        if (eggRtop == 500) {
            coun++
            console.log(coun)
            if (theBacketPos > 950 && theBacketPos < 1100) {
           
                addScore()
            } else {
                minLife()
                endGame()
            }
        }
    },20 )
    setInterval(function() { //MIDDLE egg
        eggMtop = Math.floor(eggM.getBoundingClientRect().top);
        if (eggMtop == 500) {
           coun++
            console.log(coun)

            if (theBacketPos > 550 && theBacketPos < 700) {
                addScore()
            } else {
                minLife()
                endGame()
            }
        }

    },20)


function endGame() {
    if (lifeCount < 0) {
        eggM.style.display = "none";
        eggR.style.display = "none";
        eggL.style.display = "none";
        chickM.style.display = "none";
        chickR.style.display = "none";
        chickL.style.display = "none";
        end.style.display = "flex";
    }
}

function addScore() {
    console.log('yes')
    score++
    scorePint = ` <p>
Score ` + score + `
</p>`;
    document.getElementById("score").innerHTML = scorePint;
    chickM.style.display = "none";
}

function minLife() {
    console.log('yes')
    lifeCount--
    lifePoint = ` <p>
    life ` + lifeCount + `
</p>`;
    document.getElementById("life").innerHTML = lifePoint;
    chickM.style.display = "block";
}
// playAgain.addEventListener("click", function() {
//     game()

// })
}


game()