$(document).ready(function () {
    /*
     *  Submit button click
     */
    $("#submit-btn").click(function (e) {
        //Prevent navigation to image page
        e.preventDefault();

        // Get the upper case name of the city, removing all contiguous white spaces
        var city = $("#city-type").val().replace(/\s+/g, '').toUpperCase();
        
        //Clear the input
        $("#city-type").val("").attr("placeholder", "");

        //Add the image class depending on which of the allowed values has been entered
        if (city == "NYC" || city == "NEWYORKCITY" || city == "NEWYORK") {
            $('body').removeClass().addClass("nyc");
        } else if (city == "LA" || city == "LAX" || city == "LOSANGELES") {
            $("body").removeClass().addClass("la");
        } else if (city == "SF"||city=="BAYAREA"||city=="SANFRANCISCO") {
            $("body").removeClass().addClass("sf");
        } else if (city == "ATX"||city=="AUSTIN") {
            $("body").removeClass().addClass("austin");
        } else if (city == "SYD"||city=="SYDNEY") {
            $("body").removeClass().addClass("sydney");
        } else {
            // None of the above.
            $("#city-type").val("").attr("placeholder", "Please choose one we know!");
        }
    });

});
