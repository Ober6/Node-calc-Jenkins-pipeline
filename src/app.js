const Calculator = require('./calculator');

const calc = new Calculator();

console.log('Jenkins Demo Calculator');
console.log('======================');
console.log('5 + 3 =', calc.add(5, 3));
console.log('10 - 4 =', calc.subtract(10, 4));
console.log('6 * 7 =', calc.multiply(6, 7));
console.log('15 / 3 =', calc.divide(15, 3));