// Back End Logic

var branchEquation = function(number) {
  for (var i = 1; i <= number; i += 1) {
    if (i % 15 === 0) {
      $("#list").append('<li>' + "ping" + '</li>');
    } else if (i % 5 === 0) {
        $("#list").append('<li>' + "Pong" + '</li>');
    } else if (i % 3 === 0) {
        $("#list").append('<li>' + "pingPong" + '</li>');
    } else {
        $("#list").append('<li>' + i + '</li>');
      }
  }
};

// Front End Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var input = $("#number").val();

    if (isNaN(input)) {
      return alert("Please enter a number!");
    } else {
        var result = branchEquation(input);
      }

  });
});
