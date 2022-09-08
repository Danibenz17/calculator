import calculator from "/home/training/calculator/src/calculator.js"
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test('subtracts 2 - 1 to equal 1', () => {
  expect(calculator.subtraction(2, 1)).toBe(1);
});
test('multilpy 2 * 2 to equal 4', () => {
  expect(calculator.multiplication(2, 2)).toBe(4);
});
test('divide 10 / 2 to equal 5', () => {
  expect(calculator.division(10, 2)).toBe(5);
});
