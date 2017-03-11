// Back End Logic



// Front End Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());

    if (number % 15 === 0) {
      $("#left").append('<li>' + "ping" + '</li>');
    }
      else if (number % 5 === 0) {
        $("#right").append('<li>' + "Pong" + '</li>');
    }
      else if (number % 3 === 0) {
        $("#left").append('<li>' + "pingPong" + '</li>');
    }
      else {
        $("#netCenter").append('<li>' + number + '</li>');
      }
  });
});
