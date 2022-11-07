import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredDate: '',
  //     enteredAmount: '',
  //   });

  const amountHandler = (ev) => {
    setEnteredAmount(ev.target.value);
    // setUserInput({ ...userInput, enteredAmount: ev.target.value });
  };

  const dateHandler = (ev) => {
    setEnteredDate(ev.target.value);
    // setUserInput({ ...userInput, enteredDate: ev.target.value });
  };

  const titleHandler = (ev) => {
    setEnteredTitle(ev.target.value);
    // setUserInput({ ...userInput, enteredTitle: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
