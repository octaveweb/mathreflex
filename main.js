import qustion from './js/qustion.model.js';
let qsNum = 1;
let currectAns = 0;

function colorAddRightWrong(id, backcolor, bordercolor) {
    const id_target = document.getElementById(`${id}`);

    id_target.style.boxShadow = `inset 0px 0px 23px 4px ${backcolor}`;
    id_target.style.border = bordercolor;

    setTimeout(() => {
        id_target.style.boxShadow = `inset 0px 0px 23px 4px none`;
        id_target.style.border = ` border: 2px solid none`;

    }, 1000);


}
function next(val) {
    let next = document.getElementById("next");
    next.style.zIndex = "888";
    let nextQustion = qustion()
    let { qustions, ans, optionArrNwe } = nextQustion;

    if (val) {
        setTimeout(() => {
            countCorrectAns()
            // Total correct 
            insertInDom("totalCorect", currectAns)
            // New qustion 
            countQustion();
            insertInDom("qustion", qustions);


            buttonAllDOM(optionArrNwe, ans)
            console.log(ans);

            next.style.zIndex = "-1";
            colorAddRightWrong("qustion-container", "transparent")

        }, 1000);
    } else {
        setTimeout(() => {
            countQustion();
            // Total correct 
            insertInDom("totalCorect", currectAns)
            // New Qustion 
            insertInDom("qustion", qustions);

            buttonAllDOM(optionArrNwe, ans)
            console.log(ans);

            next.style.zIndex = "-1";
            colorAddRightWrong("qustion-container", "transparent")
            colorAddRightWrong("qustion-container", "transparent")
        }, 1000);
    }

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
            console.log(`current qustion number is: ${qsNum}`);

            if (btn.disabled) return; // prevent spam clicking

            // Disable all buttons temporarily
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

                // Re-enable buttons after delay
                setTimeout(() => {
                    buttons.forEach(b => b.disabled = false);
                }, 1000);

            }, 1000);

            setTimeout(() => {
                colorAddRightWrong("qustion-container", "transparent");
                colorAddRightWrong(btn.id, "transparent", "1px solid transparent");
                console.log(btn.id);
            }, 2000);


        };
    });
}



function main() {
    let q = qustion();
    let { qustions, ans, optionArrNwe } = q;

    // qustion
    insertInDom("qustion", qustions)
    // botton
    buttonAllDOM(optionArrNwe, ans)
    console.log(ans);

    insertInDom("messageData", "Welcome")



}
main()


