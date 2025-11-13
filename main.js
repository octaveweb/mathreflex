import qustion from './js/qustion.model.js';

let qsNum = 1;
let currectAns = 0;
let totalQustion = 1;
function colorAddRightWrong(id, backcolor, bordercolor) {
    const id_target = document.getElementById(`${id}`);
    id_target.style.boxShadow = `inset 0px 0px 23px 4px ${backcolor}`;
    id_target.style.border = bordercolor;

    setTimeout(() => {
        id_target.style.boxShadow = `inset 0px 0px 23px 4px none`;
        id_target.style.border = `2px solid transparent`;
    }, 1000);
}

function insertInDom(parent, content) {
    document.getElementById(parent).innerText = content;
}

function countQustion() {
    qsNum = qsNum + 1;
    insertInDom("qustion_no", qsNum);
}

function countCorrectAns() {
    currectAns = currectAns + 1;
    insertInDom("totalCorect", currectAns);
}

function buttonAllDOM(arr, ans) {
    const buttons = [
        document.getElementById("Button1"),
        document.getElementById("Button2"),
        document.getElementById("Button3"),
        document.getElementById("Button4")
    ];

    buttons.forEach((btn, i) => {
        btn.innerText = arr[i];
        btn.onclick = () => {
            if (btn.disabled) return;
            buttons.forEach(b => b.disabled = true);

            setTimeout(() => {
                if (arr[i] === ans) {
                    colorAddRightWrong("qustion-container", "#3da30082");
                    colorAddRightWrong(btn.id, "transparent", "1px solid #3da30082");
                    next(1);
                } else {
                    colorAddRightWrong("qustion-container", "#ff000052");
                    colorAddRightWrong(btn.id, "transparent", "1px solid #ff000052");
                    next(0);
                }

                setTimeout(() => {
                    buttons.forEach(b => b.disabled = false);
                }, 1000);
            }, 1000);

            setTimeout(() => {
                colorAddRightWrong("qustion-container", "transparent");
                colorAddRightWrong(btn.id, "transparent", "1px solid transparent");
            }, 2000);
        };
    });
}

function next(val) {
    let next = document.getElementById("next");
    next.style.zIndex = "888";
    let nextQustion = qustion();
    let { qustions, ans, optionArrNwe } = nextQustion;

    if (val) {
        setTimeout(() => {
            countCorrectAns();
            insertInDom("totalCorect", currectAns);
            countQustion();
            insertInDom("qustion", qustions);
            buttonAllDOM(optionArrNwe, ans);
            next.style.zIndex = "-1";
            colorAddRightWrong("qustion-container", "transparent");
            endgame(totalQustion); // total number of questions
        }, 1000);
    } else {
        setTimeout(() => {
            countQustion();
            insertInDom("totalCorect", currectAns);
            insertInDom("qustion", qustions);
            buttonAllDOM(optionArrNwe, ans);
            next.style.zIndex = "-1";
            colorAddRightWrong("qustion-container", "transparent");
            endgame(totalQustion);
        }, 1000);
    }
}

function endgame(totalQustions) {

    let gameSection = document.querySelector("#game-paly")
    let gameOver = document.querySelector("#gameOver")

 

    if (qsNum > totalQustions) {
           gameSection.style.display = "none";
    gameOver.style.display = "flex";
    document.querySelector(".message").style.display = "none"
        gameOver.innerHTML = `
          <div class="gritBox">
                <div class="content">
                    <h3>Wonderful, <br> #name</h3>
                    
                    <p>You get <span class="scoreBadge"><span class="tinyDot" aria-hidden="true"></span>${currectAns}/${totalQustion}</span></p>
                </div>
                <button id="restartGame" type="button">Replay</button>
            </div>
        `;

        
    }
}

function main() {
    let q = qustion();
    let { qustions, ans, optionArrNwe } = q;

    insertInDom("qustion", qustions);
    buttonAllDOM(optionArrNwe, ans);
    insertInDom("messageData", "Welcome");
}

main();
