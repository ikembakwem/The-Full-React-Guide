import './ExpenseItem.css';

export const ExpenseItem = () => (
  <div className="expense-item">
    <div>November 5th 2022</div>
    <div className="expense-item__description">
      <h2>Health Insurance</h2>
      <div className="expense-item__price">£300.99</div>
    </div>
  </div>
);
