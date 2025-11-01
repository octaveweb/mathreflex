



function indexInd(n) {

  let j = Math.floor(Math.random() * 3)+1;

  n = j;
  console.log(`Granated number: ${n}`);



  return n;

}
let arr = [1, 0, 0, 0];
console.log(`Before swap [${arr}]`);
let rn = indexInd();
console.log(rn);


// console.log(`value of final index swap: ${randomeIndex}`);

if (arr[0] == 1) {
  let temp;
  temp = arr[0];
  arr[0] = arr[rn];
  arr[rn] = temp
}

console.log(`After swap [${arr}]`);

