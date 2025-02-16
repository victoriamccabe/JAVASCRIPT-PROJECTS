//CONCAT METHOD//

function full_Sentence(){
    var part_1="I have ";
    var part_2="made this ";
    var part_3="into a complete ";
    var part_4="sentence."
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//SLICE METHOD//
function slice_Method(){
    var Sentence= "All work and no play makes Johnny a dull boy.";
    var Section= Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=Section;
}

//toUpperCase METHOD//
function uppercase_function(){
let text = document.getElementById("text").innerHTML;
let result = text.toUpperCase();

document.getElementById("text").innerHTML = result;
}

//toString METHOD//
function string_Method(){
    var Z=250;
    document.getElementById("Numbers_to_string").innerHTML = Z.toString();
}

//toPrecision METHOD//
function precision_Method(){
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed METHOD: rounds the string to a specified number of decimals//
function tofixed_Method(){
var F= 10.1567;
document.getElementById("tofixed").innerHTML=F.toFixed();
}

//valueOf METHOD: helps to convert objects to their primitive values when needed//
function valueof_Function(){
    let text = new String("Hi Mom!");
    document.getElementById("valueof").innerHTML= text.valueOf();
}