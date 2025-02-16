document.write("Hello"+ 105);

function my_Function() {
    document.getElementById("Test").innerHTML=isNaN('007');
}

document.write(2E310);
document.write(-2E310);

document.write(10>2);
document.write(10<2);

console.log(5+5);

console.log(20<2);

document.write(7==8);
console.log(7==8);

//TRIPLE EQUAL SIGNS ASSIGNMENT//

//Return true by ensuring to match the data type and value//
A=1
B=1
document.write(A===B);

//Return false by writing a different data type and different value//
C=2
D=3
document.write(C===D);

//Return false by writing a different data type but the same value for both//
E=4
F="5"
document.write(E===F);

//Return false by writing the same data type but a different value for both//
G="6"
H="7"
document.write(G===F);

document.write(5>2 && 2<5);
document.write(8>6 || 1>8);


//NOT FUNCTION (!)//
function not_Function() {
    document.getElementById("Not").innerHTML= !(5>10);
}

function not2_Function() {
    document.getElementById("Not2").innerHTML= !(10>5);
}