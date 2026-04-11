const { test } = require('node:test');
const assert = require('node:assert');
const { shuffleArray } = require('../js/utils.js');

test('shuffleArray should return the same array instance (in-place mutation)', () => {
    const input = [1, 2, 3];
    const result = shuffleArray(input);
    assert.strictEqual(result, input);
});

test('shuffleArray should handle empty arrays', () => {
    const input = [];
    const result = shuffleArray(input);
    assert.deepStrictEqual(result, []);
});

test('shuffleArray should handle single-element arrays', () => {
    const input = [1];
    const result = shuffleArray(input);
    assert.deepStrictEqual(result, [1]);
});

test('shuffleArray should contain the same elements after shuffling', () => {
    const input = [1, 2, 3, 4, 5];
    const originalSorted = [...input].sort();
    const result = shuffleArray(input);
    const resultSorted = [...result].sort();
    assert.deepStrictEqual(resultSorted, originalSorted);
});

test('shuffleArray should potentially change the order of elements', () => {
    // Note: There's a tiny chance (1/10!) that it remains the same,
    // but for 10 elements it's highly unlikely.
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const inputCopy = [...input];
    shuffleArray(input);

    // We check if it's different. If it's the same, we might want to retry
    // but usually in tests we just want to see it *can* shuffle.
    // For a deterministic test of a random function, we might mock Math.random,
    // but here we just do a basic check.
    let isDifferent = false;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== inputCopy[i]) {
            isDifferent = true;
            break;
        }
    }

    // If it's not different, it doesn't strictly mean it's broken,
    // but for 10 elements it almost certainly should be.
    assert.ok(isDifferent, 'Array should be shuffled');
});
