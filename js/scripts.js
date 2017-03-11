// Back End Logic

var branchEquation = function(number) {

  if (number % 15 === 0) {
    $("#list").append('<li>' + "ping" + '</li>');
  } else if (number % 5 === 0) {
      $("#list").append('<li>' + "Pong" + '</li>');
  } else if (number % 3 === 0) {
      $("#list").append('<li>' + "pingPong" + '</li>');
  } else {
      $("#list").append('<li>' + number + '</li>');
    }

};

// Front End Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number").val());
    var result = branchEquation(input);
    console.log(result);
  });
});
