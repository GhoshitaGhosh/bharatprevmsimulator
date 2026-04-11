const { test } = require('node:test');
const assert = require('node:assert');
const { shuffleArray, escapeHtml } = require('../js/utils.js');

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

    let isDifferent = false;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== inputCopy[i]) {
            isDifferent = true;
            break;
        }
    }

    assert.ok(isDifferent, 'Array should be shuffled');
});

test('escapeHtml should escape special characters', () => {
    assert.strictEqual(escapeHtml('<script>alert("xss")</script>'), '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
    assert.strictEqual(escapeHtml('A & B'), 'A &amp; B');
    assert.strictEqual(escapeHtml("O'Reilly"), 'O&#039;Reilly');
    assert.strictEqual(escapeHtml('Normal text'), 'Normal text');
});
