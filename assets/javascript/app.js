
var topics = ["Jim Carrey", "Dwayne Johnson", "Brad Pitt"];
var gifs = "";

// this Function will display all buttons at the top of the page
function actorBtns() {

    $("#actor-search").val().trim();

    for (i = 0; i < topics.length; i++) {

    var actorButton = $("<button class='btn btn-warning'>");
    actorButton.addClass("actor")
    actorButton.attr("type", "button");
    actorButton.attr("data-name", topics[i])
    actorButton.text(topics[i]);
    $("#actorsection").append(actorButton);

    };
};
// call the actorBtns function!
actorBtns();
// Click listener for the search button/adds the new actor into array and creates new button
$("search-btn").on("click", function(event){
    
    event.preventDefault();
// grabs the actor name from the search
    var actorInput = $("#actor-search").val().trim();
    var actorName = $(this).attr("data-name")

    var queryURL = "https://api.giphy.com/v1/gifs/search?" + actorName + "&api_key=WQ4ApiFaUDoztB9gT5Es6XglEjXI3acX&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){

        if (response.pagination.total_count >= 10) {
// push the actor searched for into the topics array
        topics.push(actorInput);
// reload the buttons with new array items
        actorBtns();
        }
// this is displayed if there werent any gifs to show
        else if (response.pagination.total_count === 0 ) {
            $("#gifsection").html("<h1>Sorry no results. Try a Different Actor!</h1>");
        }
// in case there is less than 10 gifs to show
        else {
            $("#gifsection").html("<h1>Sorry, there's only " + response.pagination.total_count + "Try a Different Actor!</h1>")
        };

        console.log(queryURL);
        console.log(response);
    });
});

$(document).on("click", ".actor", gifDisplay)

function gifDisplay() {

    $("#gifsection").empty();

    var actorName = $(this).attr("data-name")

    var queryURL = "https://api.giphy.com/v1/gifs/search?" + actorName + "&api_key=WQ4ApiFaUDoztB9gT5Es6XglEjXI3acX&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){ 
// goes through the length of the giphy pictures which we set too 10
        for (var j = 0; j < response.data.length; j++) {

            var activeGif = response.data[j].images.fixed_width.url;
            var stillGif = response.data[j].images.fixed_width_still.url;
            var rating = "Rating: " + (response.data[j].rating).toUpperCase();

            var actorGif = $("<img>");
            var ratingsection = $("<div id='ratingsection'>" + rating + "</div>");
// this sets the gif to the still state also adds the active state which we will switch on click
            actorGif.attr({"active": active, "still": still, "src": still, "state": "still"});

            var ratedGif = $("<div id=ratedgif>");
            ratedGif.prepend(ratingsection, actorGif);
// displays the gif w/ rating
            $("#gifsection").prepend(ratedGif);
            
        }

    });









}


