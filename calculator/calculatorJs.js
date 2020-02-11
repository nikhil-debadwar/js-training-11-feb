function addition(){
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("additionResult").innerHTML = parseFloat(firstNumber)+parseFloat(secondNumber);
}
function substraction(){
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("substractionResult").innerHTML = parseFloat(firstNumber)-parseFloat(secondNumber);
}
function multiplication(){
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("multiplicationResult").innerHTML = parseFloat(firstNumber)*parseFloat(secondNumber);
}
function division(){
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;

    document.getElementById("divisionResult").innerHTML = parseFloat(firstNumber)/parseFloat(secondNumber);
}
