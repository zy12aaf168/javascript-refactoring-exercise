export function processTransactions(transActions) {
    if (!validateTransactions(transActions)) throw new Error('Undefined collection of transactions');

    //we use reduce instead of foreach, and we start it off with an initial value of an empty object and that value is populated and returned on each run.
    const txCount = transActions.reduce((acc, transaction) => {
        acc[transaction] ? (acc[transaction] += 1) : (acc[transaction] = 1);
        return acc;
    }, {});
    return sortByAmountThenName(txCount);
}

function sortByAmountThenName(txCount) {
    /* We use the entries method instead of keys, to get a tuple of k,v pairings to perform a sort on, so that we have the key-values in the same place rather 
    than having to refer back to the initial array to pair them up again    
    */       
    const sortedEntries = Object.entries(txCount).sort(([keyOne, valOne], [keyTwo, valTwo]) => valTwo - valOne || keyOne > keyTwo || -(keyOne < keyTwo));

    /* Because sorted entries is an array of tuples of <string, any>, we need to map it so that it fits what the test cases are expecting which is an Array of string
    Throughout both of these methods, we make use of destructuring assignments, to retrieve the values of the tuples.
    */
    return sortedEntries.map(([key, value]) => `${key} ${value}`);
}

/* We used an arrow function here to define validate transactions to make it more concise.
*/
const validateTransactions = (transActions) => transActions !== undefined;