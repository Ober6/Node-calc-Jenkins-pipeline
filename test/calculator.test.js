const Calculator = require('../src/calculator');

function runTests() {
  const calc = new Calculator();
  let passed = 0;
  let failed = 0;

  console.log('Running Calculator Tests...');
  console.log('==========================');

  // Test addition
  try {
    const result = calc.add(2, 3);
    if (result === 5) {
      console.log('✅ Addition test passed');
      passed++;
    } else {
      console.log('❌ Addition test failed');
      failed++;
    }
  } catch (error) {
    console.log('❌ Addition test failed:', error.message);
    failed++;
  }
  
   // Test subtraction
  try {
    const result = calc.subtract(10, 6);
    if (result === 4) {
      console.log('✅ Subtraction test passed');
      passed++;
    } else {
      console.log('❌ Subtraction test failed');
      failed++;
    }
  } catch (error) {
    console.log('❌ Subtraction test failed:', error.message);
    failed++;
  }

  // Test multiplication
  try {
    const result = calc.multiply(4, 5);
    if (result === 20) {
      console.log('✅ Multiplication test passed');
      passed++;
    } else {
      console.log('❌ Multiplication test failed');
      failed++;
    }
  } catch (error) {
    console.log('❌ Multiplication test failed:', error.message);
    failed++;
  }

  // Test division
  try {
    const result = calc.divide(12, 3);
    if (result === 4) {
      console.log('✅ Division test passed');
      passed++;
    } else {
      console.log('❌ Division test failed');
      failed++;
    }
  } catch (error) {
    console.log('❌ Division test failed:', error.message);
    failed++;
  }

  // Test division by zero
  try {
    calc.divide(10, 0);
    console.log('❌ Division by zero test failed - should have thrown error');
    failed++;
  } catch (error) {
    console.log('✅ Division by zero test passed - correctly threw error');
    passed++;
  }

  console.log('\nTest Results:');
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);

  if (failed > 0) {
    process.exit(1); // Exit with error code for Jenkins
  } else {
    console.log('All tests passed! 🎉');
    process.exit(0);
  }
}
