import selfDividingNumbers from '../src/Number/self-dividing-numbers.js'

test('case 1', () => {
  expect(selfDividingNumbers(1,22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22])
})
