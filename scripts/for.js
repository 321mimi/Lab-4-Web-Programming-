function setForLoopValues() {
  var minimum = Number(prompt("Enter a value for minimum."));
  var maximum = Number(prompt("Enter a value for maximum."));
  var increase = Number(prompt("Enter a value for increase."));
  for (var index = minimum; index <= maximum; index += increase) {
    document.writeln("value is: " + index + "</br>");
  }
}
setForLoopValues();
