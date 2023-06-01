export function processTransactions(transActions) {
    if (!validateTransactions(transActions)) throw new Error('Undefined collection of transactions');
    const txCount = transActions.reduce((acc, transaction) => {
        acc[transaction] ? (acc[transaction] += 1) : (acc[transaction] = 1);
        return acc;
    }, {});
    return sortByAmountThenName(txCount);
}
function sortByAmountThenName(txCount) {
    const sortedKeys = Object.entries(txCount).sort(([keyOne, valOne], [keyTwo, valTwo]) => valTwo - valOne || keyOne > keyTwo || -(keyOne < keyTwo));
    return sortedKeys.map(([key, value]) => `${key} ${value}`);
}
const validateTransactions = (transActions) => transActions !== undefined;