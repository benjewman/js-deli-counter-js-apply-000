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
    for(let i = 0; i < line.length - 1; i++) {
      nameAndNumber += `${i + 1}. ${line[i]}, `
    }
    nameAndNumber += `${line.length}. ${line[line.length - 1]}`
    return `The line is currently: ${nameAndNumber}`
  }
  
}