import React, { Component } from 'react';
import DropDownMenu from 'material-ui/lib/drop-down-menu';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

const DEPOSIT = 0;
const WITHDRAW = 1;
const MENU_OPTIONS = [
  { payload: DEPOSIT, text: 'Deposit' },
  { payload: WITHDRAW, text: 'Withdraw' }
];

class AddTransactionCard extends Component {
  constructor(props) {
    super(props);
    this.state = { type: DEPOSIT };
  }
  addTransactionHandler() {
    let amount = this.refs.AmountInput.value;
    let date = this.refs.DatePicker.getDate();
    let name =this.refs.NameInput.value;
    //validation
    if (!name.length) {
      alert('Invalid Name');
      return;
    }
    if (!amount.length || isNaN(amount)) {
      alert('Invalid amount');
      return;
    }
    if (Number(amount) <= 0) {
      alert('Amount must be positive');
    }
    if (!date) {
      alert('Invalid Date');
      return;
    }
    let transaction = {
      date: date,
      amount: Number(amount),
      name: name
    }
    if (this.state.type === WITHDRAW) {
      transaction.amount = transaction.amount * -1;
    }
    this.props.addTransaction(transaction);
    this.clearFields();
  }
  typeChangeHandler(event, index) {
    this.setState({
      type: index
    });
  }
  clearFields() {
    this.refs.DatePicker.setDate();
    this.refs.NameInput.value = '';
    this.refs.AmountInput.value = '';
    this.setState({
      type: DEPOSIT
    });
  }
  render() {
    const { addTransaction } = this.props;
    return (
      <div className="ui card" id="AddTransactionCard">
        <div className="content">
          <div className="header">Add Transaction</div>
        </div>
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label>Name</label>
              <div className="ui left input">
                <input ref="NameInput" type="text"/>
              </div>
            </div>
            <div className="field">
              <label>Transaction Type</label>
              <div className="ui left">
                <DropDownMenu 
                  ref="DropDownMenu"
                  menuItems={MENU_OPTIONS}
                  selectedIndex={this.state.type}
                  onChange={this.typeChangeHandler.bind(this)}
                />
              </div>
            </div>
            <div className="field">
              <label>Amount</label>
              <div className="ui left labeled input">
                <div className="ui label">$</div>
                <input ref="AmountInput" type="text"/>
              </div>
            </div>
            <div className="field">
              <label>Transaction Date</label>
              <div className="ui left">
                 <DatePicker ref="DatePicker" container="inline" />
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button" onClick={this.addTransactionHandler.bind(this)}>Add Transaction</button>
        </div>
      </div>
    );
  }
}

export default AddTransactionCard;