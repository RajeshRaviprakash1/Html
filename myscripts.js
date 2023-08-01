var equals = document.getElementById("equals");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var division = document.getElementById("division");
var multiply = document.getElementById("multiply");
var textField = document.getElementById("textField");
var numberOne = document.getElementById("numberOne");
var numberTwo = document.getElementById("numberTwo");
var numberThree = document.getElementById("numberThree");
var numberFour = document.getElementById("numberFour");
var numberFive = document.getElementById("numberFive");
var numberSix = document.getElementById("numberSix");
var numberSeven = document.getElementById("numberSeven");
var numberEight = document.getElementById("numberEight");
var numberNine = document.getElementById("numberNine");
var numberZero = document.getElementById("numberZero");
var deleteButton = document.getElementById("deleteButton");
var re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
function test(s) {
    if (re.test(s)) {
        //if expression is valid
        console.log("EXP is valid");
        showResult(eval(textField.value));
    }
    else {
        alert("Expression is not valid")
        console.log("EXP is not valid");
    }
}
equals.addEventListener("click", function () {
    test(textField.value);
});
plus.addEventListener("click", function () {
    if (textField.value !== "") {
        addToExpression("+");
    }
});
minus.addEventListener("click", function () {
    if (textField.value !== "") {
        addToExpression("-");
    }
});
division.addEventListener("click", function () {
    if (textField.value !== "") {
        addToExpression("/");
    }
});
multiply.addEventListener("click", function () {
    if (textField.value !== "") {
        addToExpression("*");
    }
});
numberOne.addEventListener("click", function () {
    addToExpression("1");
});
numberTwo.addEventListener("click", function () {
    addToExpression("2");
});
numberThree.addEventListener("click", function () {
    addToExpression("3");
});
numberFour.addEventListener("click", function () {
    addToExpression("4");
});
numberFive.addEventListener("click", function () {
    addToExpression("5");
});
numberSix.addEventListener("click", function () {
    addToExpression("6");
});
numberSeven.addEventListener("click", function () {
    addToExpression("7");
});
numberEight.addEventListener("click", function () {
    addToExpression("8");
});
numberNine.addEventListener("click", function () {
    addToExpression("9");
});
numberZero.addEventListener("click", function () {
    addToExpression("0");
});
deleteButton.addEventListener("click", function () {
    if (textField.value !== "") {
        removeNumber(textField.value)
    }
});
function addToExpression(arg0) {
    textField.value = textField.value + arg0;
}
function showResult(arg0) {
    textField.value = arg0;
}


function removeNumber(arg0)
{
    textField.value = '';
}
