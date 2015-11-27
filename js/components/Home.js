import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BankActions from '../actions/BankActions';
import BalanceCard from './BalanceCard';
import AddTransactionCard from './AddTransactionCard';
import TransactionTable from './TransactionTable';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Home extends Component {
  render() {
    const {actions, balance, transactions} = this.props;
    return (
      <main>
        <div className="ui two column grid">
          <div className="column">
            <BalanceCard balance={balance}/>
            <AddTransactionCard addTransaction={actions.addTransaction}/>
          </div>
          <div className="column">
            <TransactionTable transactions={transactions}/>
          </div>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  const transactions = state.BankReducers.transactions;
  const total = transactions.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);
  return {
    balance: total,
    transactions: transactions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BankActions, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);