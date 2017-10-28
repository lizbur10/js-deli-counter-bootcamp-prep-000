function takeANumber(katzDeliLine, name) {
  var position = "Welcome, Ada. You are number " + (katzDeliLine.length + 1) + " in line.";
  katzDeliLine.push(name);
  return position;
}
