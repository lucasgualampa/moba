export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const GET_USER_TRANSACTIONS = "GET_USER_TRANSACTIONS";
export const CLEAR_LAST_TRANSACTION = 'CLEAR_LAST_TRANSACTION'

export const addTransaction = (transferData) => {
    return {
        type: ADD_TRANSACTION,
        transferData
    }
}

export const getTransactions = (transactions) => {
    return {
        type: GET_USER_TRANSACTIONS,
        transactions
    }
};

export const clearTransaction = () => {
    return {
        type: CLEAR_LAST_TRANSACTION,
    }
};