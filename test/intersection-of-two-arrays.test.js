import intersection from '../src/Array/intersection-of-two-arrays.js'

test('case 1', () => {
  expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2])
})

test('case 2', () => {
  expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9])
})
