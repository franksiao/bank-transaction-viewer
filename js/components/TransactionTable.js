import React, { Component } from 'react';
import TransactionRow from './TransactionRow';

class TransactionTable extends Component {
  render() {
    const { transactions } = this.props;
    return (
      <table className="ui single line table" id="TransactionTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
         {transactions.map( transaction => 
            <TransactionRow transaction={transaction} />
          )}
        </tbody>
      </table>
    );
  }
}

export default TransactionTable;