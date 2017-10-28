function takeANumber(katzDeliLine, name) {
  var position = "Welcome, " + name + ". You are number " + (katzDeliLine.length + 1) + " in line.";
  katzDeliLine.push(name);
  return position;
}

function nowServing(katzDeliLine) {
  if (length.katzDeliLine > 0) {
    return "Currently serving " +  katzDeliLine.shift + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {

}
