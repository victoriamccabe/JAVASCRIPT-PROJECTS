function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";    
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//GETELEMENTSBYCLASSNAME() METHOD

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "The text has changed!";
}

//CANVAS
function myCanvas() {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("puppy");
ctx.drawImage(img, 10, 10);
}
