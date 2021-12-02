// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function(sides=6) {
    return Math.floor( Math.random() * sides ) + 1
  }
  
  let lastRoll = 0
  
  const rollTheDice = function() {
    
    // Selecting UI elements
    const eleMessage = document.querySelector(`#message`)
    const eleDice = document.querySelector(`.face`)
  
    // Random number between 1 and 6 (inclusive)
    const rollNum = getRandomDiceRoll()
  
  
  
    // Write a condition(s) that checks the rollNum and write the string value of the number to the variable rollStr for output
    let rollStr = `three`
    
  if (rollNum === 3){
    let rollStr = "three"
  } else if (rollNum === 4) {
    rollStr = "four"
  } else if (rollNum === 5) {
    rollStr = "five"
  } else if (rollNum === 6) {
    rollStr = "six"
  } else if (rollNum === 2) {
    rollStr = "two"
  } else if (rollNum === 1) {
    rollStr = "one"
  } else {
    rollStr = rollNum
  }
    if (rollNum === lastRoll) {
      console.log(`${rollNum} is the same as ${lastRoll}`)
  
      // Update the #message's textContent
      eleMessage.textContent = `You rolled: ${rollStr} again!`
    } else {
      console.log(`${rollNum} is NOT the same as ${lastRoll}`)
  
      // Update the #message's textContent
      eleMessage.textContent = `You rolled: ${rollStr}`
    }
    lastRoll = rollNum
  
  
  
  
    // Update the #dice's src attribute
    eleDice.setAttribute(`src`, `../img/dice3.svg`)
  
    return rollNum
  }
  
  
  const eleRoll = document.querySelector(`#roll`)
  
  eleRoll.addEventListener(`click`, rollTheDice)
  
  
  // TO DO:
  // Add "again" if you roll the same value twice in a row
  
  
  