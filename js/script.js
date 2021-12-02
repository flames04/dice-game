// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}
// Here's a test roll, check the console!
//console.log(getRandomDiceRoll())

// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"

// 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

// 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

// 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test

// 5) Keep track of the previous roll value, such that if the same number is rolled twice consecutively, the output message will notify the user appropriately
// 6) Add a second dice to the application interface to mimic the results of the popular casino game, "craps". Replace the result message ("Your rolled: ____") with the appropriate roll outcome based on the table below, reflecting the result of rolling both dice together

let lastRoll = 0;

const rollTheDice = function() {
  //step 1)
  
  let diceRollOne = getRandomDiceRoll(); //generates random number
  let diceRollTwo = getRandomDiceRoll (); //second dice
  let diceMessage = `three`

  let diceSum = diceRollOne + diceRollTwo;



  if (diceSum === 2){
    diceMessage = `Snake Eyes`
  } else if (diceSum === 3){
    diceMessage = `Ace Deuce`
  } else if (diceSum === 4 && diceRollOne === 2){
    diceMessage = `Hard Four`
  } else if (diceSum === 4 && diceRollOne != 2){
    diceMessage = `EasyFour`
  } else if (diceSum === 5){
    diceMessage = `Five(Fever Five)`
  } else if (diceSum === 6 && diceRollOne === 3){
    diceMessage = `Hard Six`
  } else if (diceSum === 6 && diceRollOne != 3){
    diceMessage = `Easy Six`
  } else if (diceSum === 7){
    diceMessage = `Natural or Seven Out`
  } else if (diceSum === 8 && diceRollOne === 4){
    diceMessage = `Hard Eight`
  } else if (diceSum === 8 && diceRollOne != 4){
    diceMessage = `Easy Eight`
  } else if (diceSum === 9){
    diceMessage = `Nine(Nina)`
  } else if 





  //step 3)
  const rolledDice = `You rolled: ${diceMessage}`;
  document.querySelector(`h2`).textContent = rolledDice;

  //step 2)
  document.querySelector(`.one`).src = `../img/dice${diceRollOne}.svg`;
  document.querySelector(`.two`).src = `../img/dice${diceRollTwo}.svg`;

  return diceRoll;

}

const rollButton = document.querySelector(`button`);
rollButton.addEventListener(`click`, rollTheDice);