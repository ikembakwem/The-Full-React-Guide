import { useState } from 'react';
import Card from '../UI/Card';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

export const ExpenseItem = ({ date, title, amount }) => {
  const [expenseTitle, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">£{amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};
