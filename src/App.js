import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import MyHeader from "./components/Expenses/MyHeader";
import NewExpense from "./components/NewExpense/NewExpense";
const INITIAL_EXPENSES_DATA =[
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 4, 1),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2019, 4, 2) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 194.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 112.99,
    date: new Date(2022, 3, 12),
  },
  {
    id: "e5",
    title: "iPhone 13 Pro Max",
    amount: 194.12,
    date: new Date(2022, 4, 1),
  },
  { id: "e6", title: "Mac Studio", amount: 99.49, date: new Date(2022, 1, 2) },
  {
    id: "e7",
    title: "iPad Pro M1 2022",
    amount: 194.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e8",
    title: "Macbook Pro 16inch M1 Max",
    amount: 134.88,
    date: new Date(2022, 3, 1),
  },
];
const App = () => {
 
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES_DATA);
  const addExpenseHandler = (newExpenseData) => {
    // // console.log('in App.js');
    // expenses.push(newExpenseData);
    setExpenses(prevExpenses => {
      return [newExpenseData,...prevExpenses];
    });
  }
  return (
    <div>
      <MyHeader header="Tutorial ReactJS+Redux" />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
