import React, { Component } from 'react';

class TransactionTable extends Component {
  render() {
    const { transaction } = this.props;
    return (
      <tr>
        <td>{transaction.name}</td>
        <td>{transaction.amount < 0 ? 'Withdraw': 'Deposit'}</td>
        <td>{'$' + Math.abs(transaction.amount)}</td>
        <td>{transaction.date.toDateString()}</td>
      </tr>
    );
  }
}

export default TransactionTable;