$(document).ready(function () {
    /*
     *  Submit button click
     */
    $("#submit-btn").click(function (e) {
        //Prevent navigation to image page
        e.preventDefault();

        // Get the name of the city, removing all contiguous white spaces
        var city = $("#city-type").val().replace(/\s+/g, '');
        
        //Clear the input
        $("#city-type").val("").attr("placeholder", "");

        //Add the image class depending on which of the allowed values has been entered
        if (city == "NYC" || city == "NewYorkCity" || city == "NewYork") {
            $('body').removeClass().addClass("nyc");
        } else if (city == "LA" || city == "LAX" || city == "LosAngeles") {
            $("body").removeClass().addClass("la");
        } else if (city == "SF"||city=="Bay Area"||city=="SanFrancisco") {
            $("body").removeClass().addClass("sf");
        } else if (city == "ATX"||city=="Austin") {
            $("body").removeClass().addClass("austin");
        } else if (city == "SYD"||city=="Sydney") {
            $("body").removeClass().addClass("sydney");
        } else {
            // None of the above.
            $("#city-type").val("").attr("placeholder", "Please choose one we know!");
        }
    });

});
