export function processTransactions(transActions) {
    if(!validateTransactions(transActions)) {
        throw new Error("Undefined collection of transactions")
    }

    let txCount = transActions.reduce((a,t) => {
        a[t] ? a[t] += 1 : a[t] = 1;
        return a;
    },{});

    return sortByAmountThenName(txCount);
}

function sortByAmountThenName(txCount) {
    let sortedKeys = Object.entries(txCount).sort(([itemOneKey, itemOneVal],[itemTwoKey,itemTwoValue]) => {
        return  itemTwoValue - itemOneVal || itemOneKey > itemTwoKey || -(itemOneKey < itemTwoKey)}
    );
    
    return sortedKeys.map(([key,value]) => `${key} ${value}`);
}

function validateTransactions(transactions) {
    return transactions !== undefined;
}