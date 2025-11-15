import qustion from './js/qustion.model.js';

let qsNum = 1;
let currectAns = 0;
let totalQustion = 2;
let inp = document.querySelector("#inputName");
let nameValue = "";

inp.addEventListener("input", e => {
    nameValue = e.target.value;
    localStorage.setItem("UserName", nameValue);
    // console.log(localStorage.getItem("UserName"));
});
inp.value = localStorage.getItem("UserName")

let inp2 = document.querySelector("#qustionNumber");
  document.querySelector("#totalQustion").innerText = totalQustion
inp2.addEventListener("input", e => {
    totalQustion = e.target.value;
    localStorage.setItem("TotalQustion", totalQustion);
    // console.log(localStorage.getItem("TotalQustion"));
    document.querySelector("#totalQustion").innerText = localStorage.getItem("TotalQustion")
});
inp2.value = localStorage.getItem("TotalQustion")
setTimeout(() => {
    document.querySelector(".message").classList.remove("up");
    document.querySelector(".message").classList.add("down");
}, 3000);


function colorAddRightWrong(id, backcolor, bordercolor) {
    const id_target = document.getElementById(`${id}`);
    id_target.style.boxShadow = `inset 0px 0px 23px 4px ${backcolor}`;
    id_target.style.border = bordercolor;

    setTimeout(() => {
        id_target.style.boxShadow = `inset 0px 0px 23px 4px none`;
        id_target.style.border = `2px solid transparent`;
    }, 1000);
}

function insertInDom(parent, content, a = 1) {
    document.getElementById(parent).innerText = content;
    if (a) {
        document.getElementById(parent).display = "none"
    }
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
function addInProgres(a) {
    let progress = document.querySelector("#progress-bar");
    let div = document.createElement("div");
    if (a) {
        div.classList = "right";
        progress.appendChild(div);
    } else {
        div.classList = "wrong";
        progress.appendChild(div);

    }
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
            addInProgres(1)
            insertInDom("qustion", qustions);
            buttonAllDOM(optionArrNwe, ans);
            next.style.zIndex = "-1";
            colorAddRightWrong("qustion-container", "transparent");
            endgame(totalQustion); // total number of questions
        }, 1000);
    } else {
        setTimeout(() => {
            countQustion();
            addInProgres(0)
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
    let result = `${currectAns}/${totalQustion}`


    if (qsNum > totalQustions) {
        gameSection.style.display = "none";
        gameOver.style.display = "flex";
        document.querySelector(".message").style.display = "none"
        document.querySelector(".nameUser").innerHTML = localStorage.getItem("UserName");
        
        document.querySelector(".result").innerHTML = result

    }
}

function main() {
    let q = qustion();
    let { qustions, ans, optionArrNwe } = q;

    insertInDom("qustion", qustions);
    buttonAllDOM(optionArrNwe, ans);
    insertInDom("messageData", "Welcome");

    let start = document.querySelector("#startGame");
    document.querySelector("nav p").style.display = "none"
    document.querySelector("#game").style.display = "none"


    let next = document.getElementById("next");


    start.addEventListener("click", () => {
        next.style.zIndex = "888";
        setTimeout(() => {
            document.querySelector(".welcomeSection").style.display = "none";
            document.querySelector(".message").style.display = "none";

            next.style.zIndex = "-1";
            document.querySelector("nav p").style.display = "flex"
            document.querySelector("#game").style.display = "grid";

        }, 1000);
    })
let reset = document.querySelector("#restartGame");

    reset.addEventListener("click", ()=>{
                location.reload();
                
    })


}

main();
