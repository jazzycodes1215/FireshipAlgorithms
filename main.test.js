import { expect, test } from 'vitest'

// import { cumSum } from './ForEachLoop'
// test('cumulative sum of an array', () => {
//     expect(cumSum([1,3,5,7])).toBe(16);
//     expect(cumSum([-2,-4,-8])).toBe(-14);
// });

import { search } from './BinarySearch'
test('Binary Search Of Array', () => {
    expect(search(['a','b','c','x','y','z'], 'c')).toBe(2);
});

import { LRU } from './LRU'
test('Binary LRU Of Array', () => {
    expect(LRU(['a','b','c','x','y','z'], 'c')).toBe(2);
});
