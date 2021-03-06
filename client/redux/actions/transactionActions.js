import axios from "axios";
import { addTransaction, getTransactions, clearTransaction } from "../types/transactionTypes";
import {apiEndpoint} from '../../const'

export function addNewTransaction(transferData) {
  return async (dispatch) => {
    try {
      const res = axios.post(`http://${apiEndpoint}/transaction`, {
        ...transferData,
      });
      res.then((tr) => {
        console.log("PAYLOADD", tr);
        dispatch(addTransaction(tr.data));
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//Get transactions
export function getUserTransactions(username, token) {
  return (dispatch) => {
    return axios
      .get(`http://${apiEndpoint}/transaction/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((tr) => {
        dispatch(getTransactions(tr.data));
      })
      .catch((err) => console.log(err));
  };
}

export function clearLastTransaction() {
  return async (dispatch) => {
    dispatch(clearTransaction());
  };
}
