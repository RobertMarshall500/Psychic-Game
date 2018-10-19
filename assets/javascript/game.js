
var computerchoice = ["r", "p", "s"];
var numbguess = 10;
var index = Math.floor(Math.random()* computerchoice.length)

var randletter = computerchoice[index]
// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;

 $( document).keydown(function(e) {
  alert( "guess" );
  checker (randletter, e.key);
  var userChoiceText = ($("#userchoice-text"));
userChoiceText.html(e.key)
var computerChoiceText = ($("#computerchoice-text"));
computerChoiceText.html(randletter)
var winsText = ($("#wins-text"));
winsText.html(wins + "Wins")
var lossesText = ($("#losses-text"));
lossesText.html(losses + "Losses")

});

function checker(randletter, userkey) {
  randletter.computerchoice = "W";
  if (randletter == userkey) {
    alert("You win!");
    numbguess = 0
     wins += 1
  }
  
  else  {
    alert("You lose!");
    numbguess = 0;
    losses += 1
}
index = Math.floor(Math.random()* computerchoice.length)
randletter = computerchoice[index]
}




