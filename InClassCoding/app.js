function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result)
}

function displayResult(data) {
    console.log("The result is : " + data);
}

function displayResultPassive(data) {
    console.log("The result was : " + data);
}

sum(1,2,displayResultPassive)
