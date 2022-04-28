const sum = require('./index');

test('Sum should return sum of two integers', () => {
    expect(sum(2, 2)).toBe(4)
})
