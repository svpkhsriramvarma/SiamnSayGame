gameSeq=[];
userSeq = [];

gameStart = false;
level = 0;

let para = document.querySelector("p");

let colors = ["red","yellow","green","blue"];

document.addEventListener("keypress", function(event) {
    if(gameStart === false) {
        gameStart = true;
        levelUp();
    }

});

function btnFlash(btn) {
    btn.classList.add("color");

    setTimeout(function() {
        btn.classList.remove("color");
    },250);
}

function btnPress() {
    let btn = this;
    userBtn(btn);

    let userPressColor = this.getAttribute('id');
    userSeq.push(userPressColor);
    checkAns(userSeq.length-1);
    console.log(userSeq);
}

function userBtn(btn) {
    btn.classList.add("userColor");
    setTimeout(function() {
        btn.classList.remove("userColor");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    para.innerText = `Level ${level}`;
    let randNum = Math.floor(Math.random()*3);
    console.log(randNum);
    let randColor = colors[randNum];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    btnFlash(randBtn);
    console.log(gameSeq + level );
}


function checkAns(idx) {
    if(gameSeq[idx] === userSeq[idx]) {
        if(gameSeq.length === userSeq.length) {
            setTimeout(levelUp,500);
        }
    } else {
        para.innerHTML =`Game ended!,Your core was <b>${level}<b><br>
        press any key to start new game.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

let btns = document.querySelectorAll(".btn");
for(btn of btns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    level = 0;
    gameSeq = [];
    userSeq = [];
    gameStart = false;
}