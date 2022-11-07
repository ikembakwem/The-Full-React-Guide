import { useState } from 'react';
import { NewExpense } from '../NewExpense/NewExpense';
import Card from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';
import { ExpensesFilter } from './ExpensesFilter';
import './ExpensesList.css';

const initialExpenses = [
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

export const ExpensesList = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [filteredYear, setFilteredYear] = useState('All');

  const addExpenseHandler = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <>
      <Card className="expenses">
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses.map((expense) => {
          if (filteredYear !== 'All') {
            return filteredYear === expense.date.getFullYear().toString() ? (
              <ExpenseItem
                key={expense.id}
                date={expense.date}
                amount={expense.amount}
                title={expense.title}
              />
            ) : (
              ''
            );
          }
          return (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
            />
          );
        })}
      </Card>
    </>
  );
};

export default ExpensesList;
