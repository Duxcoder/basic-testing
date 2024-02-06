// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const mockData = [
      [1, 2, 3],
      [2, 2, 4],
      [200, 500, 700],
      [0, 0, 0],
      [700, -700, 0],
    ];
    mockData.map(([a, b, answer]) =>
      expect(simpleCalculator({ a, b, action: Action.Add })).toBe(answer),
    );
  });

  test('should subtract two numbers', () => {
    const mockData = [
      [1, 2, -1],
      [2, 2, 0],
      [200, 500, -300],
      [0, 0, 0],
      [700, -700, 1400],
    ];
    mockData.map(([a, b, answer]) =>
      expect(simpleCalculator({ a, b, action: Action.Subtract })).toBe(answer),
    );
  });

  test('should multiply two numbers', () => {
    const mockData = [
      [1, 2, 2],
      [2, 2, 4],
      [200, 500, 100000],
      [0, 0, 0],
      [700, -700, -490000],
    ];
    mockData.map(([a, b, answer]) =>
      expect(simpleCalculator({ a, b, action: Action.Multiply })).toBe(answer),
    );
  });

  test('should divide two numbers', () => {
    const mockData = [
      [4, 2, 2],
      [2, 2, 1],
      [200, 50, 4],
      [0, 0, NaN],
      [700, -700, -1],
    ];
    mockData.map(([a, b, answer]) =>
      expect(simpleCalculator({ a, b, action: Action.Divide })).toBe(answer),
    );
  });

  test('should exponentiate two numbers', () => {
    const mockData = [
      [4, 2, 16],
      [2, 2, 4],
      [20, 5, 3200000],
      [0, 0, 1],
      [7, 7, 823543],
    ];
    mockData.map(([a, b, answer]) =>
      expect(simpleCalculator({ a, b, action: Action.Exponentiate })).toBe(
        answer,
      ),
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 1, b: 2, action: 'plus+' })).toBeNull();
    expect(simpleCalculator({ a: 1, b: 2, action: Action.Add })).not.toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 1, b: '2', action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 1, b: 2, action: Action.Add })).not.toBeNull();
  });
});
