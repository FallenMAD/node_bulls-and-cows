'use strict';

const readline = require('node:readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();

function startGame() {
  console.log('Game started');

  terminal.question('Please write your number - ', (name) => {
    if (!checkIsValidUserInput(name)) {
      console.log(`Invalid input ${name}, please use example: 1234`);
      startGame();

      return;
    }

    const result = getBullsAndCows(name, randomNumber);

    console.log(`Result: bulls ${result.bulls} & cows ${result.cows}`);
    console.log();

    if (result.bulls !== 4) {
      startGame();

      return;
    }

    console.log('Congratualtions you did it.');

    terminal.close();
  });
}

startGame();
