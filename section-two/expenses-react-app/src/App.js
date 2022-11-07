import ExpensesList from './components/ExpensesApp/ExpensesList';
import { NewExpense } from './components/NewExpense/NewExpense';

function App() {
  return (
    <div>
      <NewExpense />
      <ExpensesList />
    </div>
  );
}

export default App;
