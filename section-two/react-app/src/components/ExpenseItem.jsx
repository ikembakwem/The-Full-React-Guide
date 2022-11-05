import './ExpenseItem.css';

export const ExpenseItem = () => {
  const expenseDate = new Date(2022, 10, 5);
  const expenseTitle = 'Health Insurance';
  const expensePrice = 300.99;

  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expensePrice}</div>
      </div>
    </div>
  );
};
