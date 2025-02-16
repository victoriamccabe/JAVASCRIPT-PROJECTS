//GLOBAL AND LOCAL VARIABLE//

//Global//
var A= 2;
function Add_numbers_1(){
    document.getElementById("Global").innerHTML= 0+A;
}

//Local//
function Add_numbers_2(){
    var B=10
    document.getElementById("Local").innerHTML= 10+B;
}

//METHOD ASSIGMENT//

function method_Function(){
    if (new Date().getHours() <10){
        document.getElementById("day_time").innerHTML = "Good Morning";
    }
}

function cups_Function(){
    cups= document.getElementById("cups").value;
    if (cups>=8) {
        Hydration="You are hydrated!";
    }
    else{
        Hydration="You better drink more watter, bud.";
    }
    document.getElementById("Hydration_Status").innerHTML = Hydration;
}

//ELSE IF TIME//

function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time< 12 == Time>0){
        Reply = "It is morning time!";
    }
    else if (Time >=12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}