import Card from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Health Insurance',
      amount: 89.99,
      date: new Date(2022, 10, 5),
    },
  ];

  return (
    <>
      <Card className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
          />
        ))}
      </Card>
    </>
  );
};

export default ExpensesList;
