function guessTheNumber() {
  var secret = 2;
  do {
    var guess = prompt("Guess a number between 1 and 10.");
  } while (guess != secret);
  document.writeln("Congratulations! You guessed the secret number, which was " + secret + ".");
}
guessTheNumber();
