// const {sum, sub, mul} = require('./math');
import { sum, sub, mul } from './math';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds 1 + 2 as string to equal 3', () => {
  expect(sum('1', '2')).toBe(3);
});
test('sum A * B as string to equal NaN', () => {
  expect(sum('A', 'B')).toBe(NaN);
});
test('sub 1 - 2 to equal -1', () => {
  expect(sub(1, 2)).toBe(-1);
});
test('adds 1 + 2 as string to equal 3', () => {
  expect(sub('1', '2')).toBe(-1);
});
test('sum A * B as string to equal NaN', () => {
  expect(sub('A', 'B')).toBe(NaN);
});
test('mul 1 * 2 to equal 2', () => {
  expect(mul(1, 2)).toBe(2);
});

test('mul 2 * 2 as string to equal 2', () => {
  expect(mul('2', '2')).toBe(4);
});
test('mul A * B as string to equal 2', () => {
  expect(mul('A', 'B')).toBe(NaN);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
test('two plus two is four', () => {
  console.log([2 + 2]);
  // Common Matchers
  expect([2 + 2]).toEqual([4]);
  expect([2 + 2]).not.toEqual([6]);
  // Truthiness
  let n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
  // Numbers
  let value = 4;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  const float = 0.1 + 0.2;
  //expect(float).toBe(0.3);           This won't work because of rounding error
  expect(float).toBeCloseTo(0.3); // This works.
  // String
  expect('Christoph').toMatch(/stop/);
  // Arrays and iterables
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  expect(shoppingList).toContain('milk');
  // Exception
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
  }
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
});


// Coverage
// jest --coverage