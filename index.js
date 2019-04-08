function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var firstInLine = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstInLine}.`
  }
}

function currentLine(line) {
  var nameAndNumber = ''
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    line.map((name, index) => `${index}. )
    return `The line is currently: ${nameAndNumber}`
  }
  
}

var square = (n) => n * n