// Back End Logic


var pingPong = function(number) {
  var pingPongArray = [];
  for (var i = 1; i <= number; i += 1) {
    if (i % 15 === 0) {
      pingPongArray.push("Ping");
    } else if (i % 5 === 0) {
      pingPongArray.push("Pong");;
    } else if (i % 3 === 0) {
      pingPongArray.push("PingPong");;
    } else {
      pingPongArray.push(i);;
      }
  }
  return pingPongArray;
};

// Front End Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#number").val());

    if (isNaN(input)) {
      return alert("Please enter a number!");
    } else {
        var result = pingPong(input);
      }

      result.forEach(function(result) {
        $("#list").append('<li>' + result  + '</li>');
      });


    });
});
