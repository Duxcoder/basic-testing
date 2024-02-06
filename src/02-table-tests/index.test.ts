// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { expected: -1, a: 1, b: 2, action: Action.Subtract },
  { expected: 0, a: 2, b: 2, action: Action.Subtract },
  { expected: -300, a: 200, b: 500, action: Action.Subtract },

  { expected: 2, a: 1, b: 2, action: Action.Multiply },
  { expected: 4, a: 2, b: 2, action: Action.Multiply },
  { expected: 100000, a: 200, b: 500, action: Action.Multiply },

  { expected: 2, a: 4, b: 2, action: Action.Divide },
  { expected: 1, a: 2, b: 2, action: Action.Divide },
  { expected: 4, a: 200, b: 50, action: Action.Divide },

  { expected: 16, a: 4, b: 2, action: Action.Exponentiate },
  { expected: 4, a: 2, b: 2, action: Action.Exponentiate },
  { expected: 3200000, a: 20, b: 5, action: Action.Exponentiate },

  { expected: null, a: 1, b: 2, action: 'plus+' },
  { expected: null, a: 1, b: '2', action: Action.Add },
];

describe('simpleCalculator', () => {
  test.each(testCases)('table test', ({ a, b, action, expected }) =>
    expect(simpleCalculator({ a, b, action })).toBe(expected),
  );
});
