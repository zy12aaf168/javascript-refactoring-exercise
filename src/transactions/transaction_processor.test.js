const processTransactions = require('./transaction_processor')

test('check transaction processing when empty', () => {
    expect(processTransactions([])).toEqual([]);
});

test('check transaction processing exception thrown when null passed', () => {
    expect(() => processTransactions(null)).toThrow();
});