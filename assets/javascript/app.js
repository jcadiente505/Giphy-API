
var topics = ["Jim Carrey", "Dwayne Johnson", "Brad Pitt"];
var gifs = "";

// this Function will display all buttons at the top of the page
function actorBtns() {

    $("#search-btn").val().trim();

    for (i = 0; i < topics.length; i++) {

    var actorButton = $("<button class='btn btn-warning'>");
    actorButton.addClass("actor")
    actorButton.attr("type", "button");
    actorButton.attr("data-name", topics[i])
    actorButton.text(topics[i]);
    $("#actorsection").append(actorButton);

    };
};

actorBtns();
// 
$("actorbtn").on("click", function(){

    var actor = $(this).attr("actorbtn");

    var queryURL = "https://api.giphy.com/v1/gifs/search?" + actor + "&api_key=WQ4ApiFaUDoztB9gT5Es6XglEjXI3acX&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){

        console.log(queryURL);
        console.log(response);
    })
})


