const diceMessage = `three`;
const diceSum = diceRollOne + diceRollTwo;

if (diceSum === 2){
    diceMessage = `Snake Eyes`
  } else if (diceSum === 3){
    diceMessage = `Ace Deuce`
  } else if (diceSum === 4 && diceRollOne === 2){
    diceMessage = `Hard Four`
  } else if (diceSum === 4 && diceRollOne != 2){
    diceMessage = `Easy Four`
  }
