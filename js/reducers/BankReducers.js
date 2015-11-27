import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  transactions: []
};

export default function bankReducers(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TRANSACTION:
      let transactions = state.transactions;
      transactions.push(action.transaction);
      transactions.sort((a,b) => {
        return a.date > b.date;
      });
      return {
        transactions: transactions
      };
    default:
      return state;
  }
}
