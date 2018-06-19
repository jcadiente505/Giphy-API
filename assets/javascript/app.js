
var topics = ["Jim Carrey", "Dwayne Johnson", "Brad Pitt"];

var queryURL = "https://api.giphy.com/v1/gifs/search?" + topics + "&api_key=WQ4ApiFaUDoztB9gT5Es6XglEjXI3acX&limit=10"
console.log(queryURL)
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response){

    var gifs = $("#gifsection");
    var rating = response.rating;

    $("#search-btn").on("click")
});