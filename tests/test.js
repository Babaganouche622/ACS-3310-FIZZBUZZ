const fizzbuzz = require('../fizzbuzz.js');

describe('fizzBuzz', () => {
  test('Returns an object with fizz, buzz, and fizzBuzz counts.', () => {
    const result = fizzbuzz.fizzBuzz(15)
    expect(result).toEqual({
      count: 15,
      fizz: 4,
      buzz: 2,
      fizzBuzz: 1
    });
  });
});

describe('isFizzy', () => {
  test('Returns true when a number is divisible by 3.', () => {
    expect(fizzbuzz.isFizzy(3)).toBe(true);
  });
  test('Returns false when a number is not divisible by 3.', () => {
    expect(fizzbuzz.isFizzy(4)).toBe(false);
  });
});

describe('isBuzzy', () => {
  test('Returns true when a number is divisible by 5.', () => {
    expect(fizzbuzz.isBuzzy(5)).toBe(true);
  });
  test('Returns false when a number is not divisible by 5.', () => {
    expect(fizzbuzz.isBuzzy(4)).toBe(false);
  });
});

describe('fizzyBuzzy', () => {
  test('Returns FIZZ when a number is divisible by 3.', () => {
    expect(fizzbuzz.fizzyBuzzy(3)).toBe('fizz');
  });
  test('Returns BUZZ when a number is divisible by 5.', () => {
    expect(fizzbuzz.fizzyBuzzy(5)).toBe('buzz');
  });
  test('Returns FIZZBUZZ when a number is divisible by 3 and 5.', () => {
    expect(fizzbuzz.fizzyBuzzy(15)).toBe('fizzbuzz');
  });
  test('Returns an empty string when a number is not divisible by 3 or 5.', () => {
    expect(fizzbuzz.fizzyBuzzy(4)).toBe('');
  });
});
