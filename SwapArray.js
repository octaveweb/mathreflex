function rainxArray(a) {
  function indexInd(n) {
    let j = Math.floor(Math.random() * 3) + 1;
    return j;
  }


  let arr = a;
  let rn = indexInd();
  console.log(rn);



  let temp;
  temp = arr[0];
  arr[0] = arr[rn];
  arr[rn] = temp

  return arr;
}

// let arrry = [5, 0, 0, 0]
// rainxArray(arrry)