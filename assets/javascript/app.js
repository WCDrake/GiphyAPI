function myFunction() {

    event.preventDefault();
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("newPlayer");
    btn.appendChild(t);
    document.getElementById("buttons").appendChild(btn);
    
}





  $("button").on("click", function() {
    var player = $(this).attr("data-player");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      player + "&api_key=mKJDb0fun16luHjx4PVcZjbItBG94JpA&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var playerImage = $("<img>");
          playerImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(playerImage);

          $("#showGifs").prepend(gifDiv);
        }
      });
  });




