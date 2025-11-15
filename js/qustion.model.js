function callOpratio(a, b, oprator) {
    switch (oprator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "/":
            return parseFloat(a / b).toFixed(2);
        case "*":
            return a * b;

        default:
            console.log("Error from call oprator fun!");
            break;
    }
}

// my creation of swap elements
function swapArray(a) {
    function indexInd(n) {
        let j = Math.floor(Math.random() * 3) + 1;
        return j;
    }


    let arr = a;
    let rn = indexInd();
    //   console.log(`index of ${rn} swap array`);



    let temp;
    temp = arr[0];
    arr[0] = arr[rn];
    arr[rn] = temp

    return arr;
}
function qustion() {

    let qustionEasy = 40;


    let oprator = ["+", "-", "/", "*"] // easy
    // let oprator = ["*", "+", "-"] // hard

    let op_chose = parseInt(Math.random() * 3); // easy
    // let op_chose = parseInt(Math.random() * 2); // hard 


    let op1 = parseInt(Math.random() * `${qustionEasy}`);
    let op2 = parseInt(Math.random() * `${qustionEasy}`);

    if (op1 < op2 && oprator[op_chose] === "/" ) {
        op1 = parseInt(Math.random() * `${qustionEasy}`);
        op2 = parseInt(Math.random() * `${qustionEasy}`);

    }






    let option2 = null;
    let option3 = null;
    let option4 = null;


    option2 = parseInt(Math.random() * `${qustionEasy}`);
    option3 = parseInt(Math.random() * `${qustionEasy}`);
    option4 = parseInt(Math.random() * `${qustionEasy}`);


    if (oprator[op_chose] === "/" || oprator[op_chose] === "*") {
        if (option2 > option3) {
            option2 = parseInt(Math.random() * `${qustionEasy}`);
        }
        if (option3 < op1) {
            option3 = parseInt(Math.random() * `${qustionEasy}`);
        }
        if (op1 < option2) {
            option4 = parseInt(Math.random() * `${qustionEasy}`);
        }
        option2 = callOpratio(option2, option3, oprator[op_chose]);
        option3 = callOpratio(option3, op1, oprator[op_chose]);
        option4 = callOpratio(op1, option2, oprator[op_chose]);
    }
    
    let ans = callOpratio(op1, op2, oprator[op_chose]);
    
    if (option2 === ans) {
        option2 = parseInt(Math.random() * `${qustionEasy}`);
    }else if(option3 === ans){
        option3 = parseInt(Math.random() * `${qustionEasy}`);
    }else if(option4 === ans){
        option4 = parseInt(Math.random() * `${qustionEasy}`);
    }


    // Creating Structure of Qustion
    let qustions = `What is ${op1} ${oprator[op_chose]} ${op2} = ? `;


    let optionArr = [ans, option2, option3, option4];

    // Swapping
    let optionArrNwe = swapArray(optionArr);




    // // Qustion add in DOM
    // let qustions = document.getElementById("qustion");
    // qustions.innerText = qustion;


    // Buttons add in DOM
    // optionArrNwe.forEach((num) => {
    //     const btn = document.createElement('button');
    //     let btn_container = document.getElementById("btn-container");
    //     btn.classList = 'btn';
    //     btn.textContent = num;
    //     btn.addEventListener('click', () => {
    //         if (num === ans) {
    //             // alert("✅ Correct!");
    //             colorAddRightWrong("#3da30082");
    //            qustionNum++
    //            next()

    //         } else {
    //             // alert(`❌ Wrong! The correct answer was ${ans}.`);
    //             colorAddRightWrong("#ff000052")
    //         }
    //     });
    //     btn_container.appendChild(btn);
    // });

    return { qustions, ans, optionArrNwe };
}

export default qustion;