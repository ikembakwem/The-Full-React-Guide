import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [entereDatee, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const amountHandler = (ev) => {
    setEnteredAmount(ev.target.value);
  };

  const dateHandler = (ev) => {
    setEnteredDate(ev.target.value);
  };

  const titleHandler = (ev) => {
    setEnteredTitle(ev.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2025-01-01"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
