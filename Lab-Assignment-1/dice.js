const crypto = require('crypto');
const { log } = require('./utils/logger');

function rollDice() {
  const randomValue = crypto.randomInt(1, 7);
  console.log(`Dice Rolled: ${randomValue}`);
  return randomValue;
}

function simulateRolls(count = 5) {
  log('Dice simulation started', 'START');
  for (let i = 1; i <= count; i += 1) {
    rollDice();
  }
  log(`Completed ${count} dice rolls`, 'SUCCESS');
}

function main() {
  const count = Number(process.argv[2]) || 5;
  simulateRolls(count);
}

main();
