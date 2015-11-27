import React, { Component } from 'react';

class BalanceCard extends Component {
  render() {
    const { balance } = this.props;
    return (
      <div className="ui card" id="BalanceCard">
        <div className="content">
          <div className="header">Account Balance</div>
        </div>
        <div className="content">
          <h2>$ {balance.toFixed(2)}</h2>
        </div>
      </div>
    );
  }
}

export default BalanceCard;