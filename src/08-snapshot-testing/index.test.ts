// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const linkedList = generateLinkedList([1]);

    expect(linkedList).toStrictEqual({
      value: 1,
      next: generateLinkedList([]),
    });
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const linkedList = generateLinkedList([2, 2]);

    expect(linkedList).toMatchSnapshot();
  });
});
