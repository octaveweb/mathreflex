// What is 3 X 2 = ?
// 4 , 12, 30, 15
// total 10 answer correct then win 
// timer 60s
// count of win 
// totla attempt 
// name, age





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
function randomNum(num1, num2, num3, i=0) {
    num1 = parseInt(Math.random() * i);
    num2 = parseInt(Math.random() * i);
    num3 = parseInt(Math.random() * i);
}
function swapRandomElements(arr) {
  if (arr.length < 2) {
    console.log("Array must have at least two elements to swap.");
    return arr;
  }

  // Generate two distinct random indices
  let index1 = Math.floor(Math.random() * arr.length);
  let index2 = Math.floor(Math.random() * arr.length);

  // Ensure the indices are different
  while (index1 === index2) {
    index2 = Math.floor(Math.random() * arr.length);
  }

  // Swap the elements using array destructuring
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

  return arr;
}


function qustion() {
    let oponents1 = parseInt(Math.random() * 10);
    let oponents2 = parseInt(Math.random() * 10);
    let op_chose = parseInt(Math.random() * 3);
    let oprator = ["+", "-", "/", "*"]

    let option2 = null;
    let option3 = null;
    let option4 = null;
    let i = 1;
    for (i = 1; i < 11; i++) {
        i += 2;
        option2 = parseInt(Math.random() * i);
        i += 5;
        option3 = parseInt(Math.random() * i);
        i -= 2;
        option4 = parseInt(Math.random() * i);

    }

    let ans = parseInt(`${callOpratio(oponents1, oponents2, oprator[op_chose])}`);

    if (ans === option2) option2 = parseInt(Math.random() * i);
    if (ans === option3) option3 = parseInt(Math.random() * i);
    if (ans === option4) option4 = parseInt(Math.random() * i);

   
    if (option2 != 0 || option3 != 0 || option4 != 0) {
        randomNum(option2, option3, option4)
    }

    let qustion = `What is ${oponents1} ${oprator[op_chose]} ${oponents2} = ${ans} `

    let optionArr = [ans, option2, option3, option4];
    
    console.log(optionArr);
    

    
    return {qustion,optionArr};
}
function buttonAddInHtml() {
    let obj = qustion();
    // for (let i = 0; i < obj.optionArr.length; i++) {
    //     let btn_container = document.getElementById("btn-container");
    //     let btn = document.createElement("div");
    //     btn.classList = 'btn';
    //     btn.innerText = obj.optionArr[i];
    //     btn_container.appendChild(btn);  
    //     console.log(btn);
        
    //      obj.optionArr[i];
    // }

    for (const i in obj.optionArr) {
        
        console.log(obj.optionArr[i]);
        
        
        
    }
}
function main() {
    let qustions = document.getElementById("qustion");
    
    let obj = qustion();
    
    qustions.innerText = obj.qustion;

    // buttonAddInHtml()
    
    // console.log(obj.optionArr);
    

    
}
main()


