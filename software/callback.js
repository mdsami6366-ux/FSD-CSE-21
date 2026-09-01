function sum(a, b) {
    return a + b;
}

function displaySum(clbk,msg) {
    const result = clbk(30, 34);
    const fresult = "hi " + msg + " your score is " + result;
    console.log(fresult);
}
displaySum(sum, "sami");
