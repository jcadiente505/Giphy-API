document.ready(function () {
    // beginning actors array, we will add searched actors into here
    var actors = ["Jim Carrey", "Dwayne Johnson", "Robin Williams"];
    // function to display the gifs of actors
    function gifDisplay() {
        // grabs the data attribute from the selection
        var actorName = $(this).data("actor");
        console.log(actorName);
        // Giphy API with a limit set too 10
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actorName + "&api_key=WQ4ApiFaUDoztB9gT5Es6XglEjXI3acX&limit=10";

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // store the data from the API'S response into a results variable
            var results = response.data;
            console.log(results)
            // loop through the response.data 10 times **which we set in the URL**
            for (var i = 0; i < results.length; i++) {
                // store our HTML div where the actor gifs will go into a variable
                var actorDiv = $("<div class='col-md-4'>");
                // grab the rating for each response
                var rating = results[i].rating;
                // grab the src's for the still and active states
                var activesrc = results[i].images.fixed_height.url;
                var stillsrc = results[i].images.fixed_height_still.url;
                // create an image tag for the gifs
                var showGif = $("<img>");
                // create a p tag for the rating **use the rating var** 
                var p = $("<p>").text("Rating: " + rating)

                // assign the attributes
                // set the default too still
                showGif.attr("src", stillsrc);
                // add the actorGif class for dynamic buttons
                showGif.addClass("actorGif");
                // add both the still and active data state's too switch between
                showGif.attr("data-state", "still");
                showGif.attr("data-still", stillsrc);
                showGif.attr("data-active", activesrc);
                // append the content into our actorDiv
                actorDiv.append(p);
                actorDiv.append(showGif);
                // append the newly created div into our gif section
                $("#gifsection").append(actorDiv);
            };
        });
    };
    // function too loop through array and display buttons
    function displayButtons() {
        // loop through our array
        for (var i = 0; i < actors.length; i++) {
            // create a variable for our dynamic buttons
            var actorBtn = $('<button class="btn btn-warning">');
            actorBtn.attr("id", "actor");
            // create data-search attribute
            actorBtn.attr("data-search", actors[i]);
            actorBtn.text(actors[i]);
            // append the button into our html section
            $("#actorsection").append(actorBtn);
        }
    }


    $("#actor-search").on("click", function (event) {

        event.preventDefault();
        // grab the actor the user searched for
        var newActor = $("#actor-input").val().trim();
        // push the content into our actor array
        actors.push(newActor);
        console.log(actors)
        $("actor-input").val(" ");
    })
});


