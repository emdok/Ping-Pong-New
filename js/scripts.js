// Back End Logic



// Front End Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());

    if (number % 15 === 0) {
      $("#leftResult").text("ping");
    }
      else if (number % 5 === 0) {
        $("#rightResult").text("pong");
    }
      else if (number % 3 === 0) {
        $("#leftResult").text("pingPong");
      }
  });
});
