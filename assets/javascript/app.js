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






// change variable names
// how to create buttons from an array
/*
function myFunction() {
    console.log("arr!");

    $("button").on("click", function () {

        console.log("RAR!");
})};


    let toDoTaskArray = ['LEXUS', 'AUDI', 'MAYBACK', 'FERRARI', 'TOYOTA'];
    //the array
    function printBtn() {
        for (var i = 0; i < toDoTaskArray.length; i++) {
            var btn = $("<button>");
            var t = document.createTextNode(toDoTaskArray[i]);
            btn.appendChild(t);
            document.body.appendChild(btn);
            // btn.attr("data-animal", toDoTaskArray[i]);
            toDoTaskArray.forEach(myFunction);
            // but.onclick= callJavascriptFunction;
            //var id= document.querySelector(toDoTaskArray[i]);
            //var id  = document.getElementById("buttonid");

        }
    }

    printBtn();

    //  On Click event associated with the add-to-do function
    $("#add-to-do").on("click", function (event) {
        event.preventDefault();

        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask = $("#to-do").val().trim();

        // Clear the textbox when done
        $("#to-do").val("");
    
        let toDoTaskArray = [];
        //THE ARRAY IS CLEARED


        function printExtra() {
            for (var i = 0; i < toDoTaskArray.length; i++) {
                var btn = document.createElement("button");
                var t = document.createTextNode(toDoTaskArray[i]);
                btn.appendChild(t);
                document.body.appendChild(btn);
                toDoTaskArray.forEach(myFunction);

            }
        }
        toDoTaskArray.push(toDoTask);

        printExtra();
    
    });





/*

$("button").on("click", function() {
  
        console.log ("RAR!");


  
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";

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

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });

*/


