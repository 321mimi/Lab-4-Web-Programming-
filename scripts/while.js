function getNumber() {
  var choice = prompt("Enter a number between 0 and 100");
  var index = 0;
  while (choice > index) {
      document.writeln("value is: " + index + "</br>");
      index += 10;
  }
}
getNumber();
