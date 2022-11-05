import './ExpenseItem.css';

export const ExpenseItem = ({ date, title, price }) => {
  const expenseDate = new Date(2022, 10, 5);
  const expenseTitle = 'Health Insurance';
  const expensePrice = 300.99;

  return (
    <div className="expense-item">
      <div>{date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
};
