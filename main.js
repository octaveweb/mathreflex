import qustion from './js/qustion.model.js';

function colorAddRightWrong(color) {
    const qust_bg = document.getElementById("qustion-container");
    qust_bg.style.boxShadow = `inset 0px 0px 23px 4px ${color}`;
    setInterval(() => {
        qust_bg.style.boxShadow = `inset 0px 0px 23px 4px none`;

    }, 2000);
}
function next() {
    let next = document.getElementById("next");
    next.style.zIndex = "888";
    let nextQustion = qustion()
    let { qustions, ans, optionArrNwe } = nextQustion;

    setTimeout(() => {
        // New Qustion 
        insertInDom("qustion", qustions);


       buttonAllDOM(optionArrNwe,ans)
       console.log(ans);
       colorAddRightWrong("transparent")
       
       next.style.zIndex = "-1";
       
    }, 2000);
    
}

function insertInDom(parent, content) {
    document.getElementById(parent).innerText = content;
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
           setTimeout(() => {
             if (arr[i] === ans) {
                colorAddRightWrong("#3da30082");
                next();
            } else {
                colorAddRightWrong("#ff000052");
            }
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



    //  optionArrNwe.forEach((num) => {
    //     let btn = document.createElement('button');
    //     let btn_container = document.getElementById("btn-container");
    //     btn.classList = 'btn';
    //     btn.textContent = num;
    //     btn.addEventListener('click', () => {
    //         if (num === ans) {
    //             // alert("✅ Correct!");
    //             colorAddRightWrong("#3da30082");
    //         //    qustionNum++
    //            next()

    //         } else {
    //             // alert(`❌ Wrong! The correct answer was ${ans}.`);
    //             colorAddRightWrong("#ff000052")
    //         }
    //     });
    //     btn_container.appendChild(btn);
    // });


}
main()


