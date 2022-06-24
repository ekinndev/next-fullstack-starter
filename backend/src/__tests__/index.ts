const sum = (a, b) => {
    return a + b;
};

test('3 plus 4 must be equal 7', () => {
    const result = sum(3, 4);

    expect(result).toBe(7);
});

test('3 plus 5 must not be equal 7', () => {
    const result = sum(3, 6);

    expect(result).not.toBe(7);
});
