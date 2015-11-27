import {ADD_TRANSACTION} from '../constants/ActionTypes';

export function addTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    transaction
  };
}
