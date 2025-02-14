function addition(){
    var addition = 2 + 2;
    document.getElementById("Addition").innerHTML=" 2 + 2 = "+ addition;
}

function substraction(){
    var substraction = 2 - 2;
    document.getElementById("Substraction").innerHTML=" 2 - 2 = "+ substraction;
}

function multiplication(){
    var multiplication = 2 * 2;
    document.getElementById("multiplication").innerHTML=" 2 * 2 = "+ multiplication;
}

function division(){
    var division = 20 / 5;
    document.getElementById("division").innerHTML=" 20 / 5 = "+ division;
}

function more_Math(){
    var simple_Math = (1+2) * 10 / 2-5;
    document.getElementById("more_Math").innerHTML = "1 plus 2, multiplied by 1-, divided in half and then substracted by 5 equals " + simple_Math;
}

function modulus_Operator(){
    var simple_Math = 25 % 6;
    document.getElementById("Math_Operator").innerHTML = "When you divide 25 by 6 you have a remainder of: "+ simple_Math;
}

function negation_Operator(){
    var x=10;
    document.getElementById("Math").innerHTML= -x;
}


// INCREMENT //

var x=5;
x++;
document.write(x);

// DECREMENT //

var y=5.25;
y--;
document.write(y);

// RANDOM //

window.alert(Math.random());
//Random between 0-100//
window.alert(Math.random() *100);


document.write(Math.PI);
