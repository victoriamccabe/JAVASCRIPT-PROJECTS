//TALL ENOUGHT TO RIDE//

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//OLDER ENOUGH TO VOTE//

function Age_Function(){
    var Age, Can_Vote;
    Age= document.getElementById("Age").value;
    Can_Vote= (Age>18)? "You can vote!":"You are not old enough to vote.";
    document.getElementById("Vote").innerHTML = Can_Vote;
}

//OBJECT ORIENTED//

function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep","Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford","Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + " manufactered in " + Erik.Vehicle_Year; 
}

//NESTED FUNCTIONS//
function count_Function(){
    document.getElementById("Counting").innerHTML = Count();
    function Count(){
        var Starting_point = 9;
        function Plus_One() {Starting_point += 1;}
        Plus_One();
        return Starting_point;
    }
}