var txr = [];

function processTransactions(transActions) {

    if(!validateTransactions(transActions)) {
        throw new Error("Undefined collection of transactions")
    }

    const numberOfTransactions = transActions.length;
    for(var i = 0; i < numberOfTransactions; i++) {

    }

    return txr;
}


function validateTransactions(transactions) {
    if(transactions === undefined) {
        return false;
    } 

    return true;
}

module.exports = processTransactions;