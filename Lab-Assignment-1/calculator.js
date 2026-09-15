const { isEven } = require('./utils/isEven');
const { log } = require('./utils/logger');

function calculate(operation, a, b) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    throw new Error('Both values must be valid numbers.');
  }

  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      if (num2 === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return num1 / num2;
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

function printUsage() {
  console.log('Usage: node calculator.js <add|subtract|multiply|divide> <number1> <number2>');
}

function main() {
  const args = process.argv.slice(2);

  log('CLI calculator started', 'START');
  console.log('Command arguments:', args);

  if (args.length < 3) {
    printUsage();
    return;
  }

  const [operation, value1, value2] = args;

  try {
    const result = calculate(operation.toLowerCase(), value1, value2);
    console.log(`Result: ${result}`);
    console.log(`Is result even? ${isEven(result) ? 'Yes' : 'No'}`);
    log(`Calculation completed: ${operation} ${value1} ${value2} = ${result}`, 'RESULT');
  } catch (error) {
    console.error('Error:', error.message);
    printUsage();
    log(`Calculation failed: ${error.message}`, 'ERROR');
  }
}

main();
