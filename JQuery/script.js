$(document).ready(function () {
    function shineLoop() {

        //The shineLoop function uses the chaining technique to utilize multiple animate events methods in the same function.

        //It targets all .shine classes. 
        $(".shine").animate({ backgroundPositionX: '1600px' }, 3000) // backgroundPositionX = targets background in X axis. 3000 miliseconds = 3 seconds animation duration
            .animate({ backgroundPositionX: '-800px' }, 3000);
    };

    setInterval(shineLoop,0);


    //Shrinks header size when the document is scrolled down by 50 pixels
    $(document).on("scroll", function(){
        if($(document).scrollTop() > 50){
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
        });

        //Trigers the images to slide down one after the other when the users mouse enters the div are with the #classicCars ID
        $("#classicCars").on({
            mouseenter: function() {
                $("#titleOne").show(1000);
                $("#titleTwo").show(1500);
                $("#titleThree").show(2000);
            },
//Triggers the images to slide up and hide each title one after the other when the user's mouse eaves the div area with the #classicsCars ID
            mouseleave: function() {
                $("#titleOne").hide(2000);
                $("#titleTwo").hide(1500);
                $("#titleThree").hide(1000);
            }
        })

        //Creates a toggle effect on each FAQ question by checking each element's sibiling so they don't all display when one question is clicked
        
        $('div.question').on('click', function() {
            $(this).next().slideToggle('slow');
        });
})