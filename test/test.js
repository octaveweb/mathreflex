function abcd(){
    function a(){
    console.log("a");
}
function b(){
    console.log("b");
}
function c(){
    console.log("c");
}
function d(){
    console.log("d");
}
return {a,b,c,d}
}

function main(){
    let func = abcd();
    console.log(func);
    
}
main()