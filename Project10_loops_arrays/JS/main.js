//Loop
var Countries = ["Argentina", "Uruguay", "USA", "Canada", "Chile", "Mexico"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Countries.length; Y ++) {
        Content += Countries [Y] + "<br>";
    }
    document.getElementById("List_of_Countries").innerHTML = Content;
}

//Text Length
let frase = "No soy de aqui ni soy de allá";
let length = frase.length;
document.getElementById("Text_Length").innerHTML = length;

//DOCUMENT.GETELEMENTBYID().INNERHTML ASSIGNMENT
function array_Function(){
    var Name =[];
    Name [0] ="John";
    Name [1] ="Carla";
    Name [2] ="Walter";
    Name [3] ="Jaxon";
    document.getElementById("Array").innerHTML = "Your name is " + Name [1] + ".";
}

//CONST KEYWORD ASSIGNMENT
function constant_function() {
    const Animals = {type:"feline", name:"cat", color:"black"};
    document.getElementById("Constant").innerHTML= "My pet is a " + Animals.color + " " + Animals.name + ". He is a " + Animals.type + ".";
}

//LET KEYWORD ASSIGNMENT
var Z = 10;
{
    let Z=20;
    document.write(Z + "<br>");
}
document.write(Z);

//RETURN STATEMENT CHALLENGE

let car = {
    make: "Subaru",
    model: "Outback",
    year: "2011",
    color: "black",
    description : function () {
        return "My car is a " + this.year + this.color + this.make + this.model;}
};
    document.getElementById("Car_Object").innerHTML = car.description();


//While Loop
let text = "";
let J = 0;
while (J < 20) {
    text += J + "<br>";
    J++;
}
//If J = 10 --> Print " J equals 10"
for (let J = 0; J < 20; J++) {
    if (J === 10) {
        text += "J equals 10<br>";
    } else {
        text += J + "<br>";
    }
}

document.getElementById("while_Loop").innerHTML = text;