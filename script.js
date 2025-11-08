// What is 3 X 2 = ?
// 4 , 12, 30, 15
// total 10 answer correct then win 
// timer 60s
// count of win 
// totla attempt 
// name, age


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


function callOpratio(a, b, oprator) {

    typeof oprator
    switch (oprator) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;

            break;
        case "/":
            return parseFloat(a / b);

            break;
        case "*":
            return a * b;

            break;

        default:
            console.log("Error from call oprator fun!");
            break;
    }
}



function qustion() {
    let qustionEasy = 80;
    let oponents1 = parseInt(Math.random() * `${qustionEasy}`);
    let oponents2 = parseInt(Math.random() * `${qustionEasy}`);
    let op_chose = parseInt(Math.random() * 3); // easy
    // let op_chose = parseInt(Math.random() * 2); // hard 


    let oprator = ["+", "-", "/", "*"] // easy
    // let oprator = ["*", "+", "-"] // hard
    let ans = parseInt(`${callOpratio(oponents1, oponents2, oprator[op_chose])}`);

    let option2 = null;
    let option3 = null;
    let option4 = null;



    option2 = parseInt(Math.random() * `${qustionEasy}`);
    option3 = parseInt(Math.random() * `${qustionEasy}`);
    option4 = parseInt(Math.random() * `${qustionEasy}`);


    // Creating Structure of Qustion
    let qustion = `What is ${oponents1} ${oprator[op_chose]} ${oponents2} = ? `
    let optionArr = [ans, option2, option3, option4];
    // console.log(optionArr);
    console.log(ans);

    // Swapping
    optionArr = swapArray(optionArr);
    console.log(optionArr);



    // Qustion add in DOM
    let qustions = document.getElementById("qustion");
    qustions.innerText = qustion;


    // Buttons add in DOM
    optionArr.forEach((num) => {
        const btn = document.createElement('button');
        let btn_container = document.getElementById("btn-container");
        btn.classList = 'btn';
        btn.textContent = num;
        btn.addEventListener('click', () => {
            if (num === ans) {
                alert("✅ Correct!");
            } else {
                alert(`❌ Wrong! The correct answer was ${ans}.`);
            }
        });
        btn_container.appendChild(btn);
    });

    return qustion;
}
qustion()


// function buttonAddDOM() {}
// buttonAddDOM()
function main() {

    // set all time bg
    // setInterval(() => {
    //     document.body.style.backgroundColor = "#1d1d1d"
    // }, 1000);






}
main()


