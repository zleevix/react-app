import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import MyHeader from "./components/Expenses/MyHeader";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
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
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 3, 12),
    },
  ];
  const [expensesData, setExpenseData] = useState(expenses);
  const addExpenseHandler = (newExpenseData) => {
    // console.log('in App.js');
    expenses.push(newExpenseData);
    setExpenseData(expenses);
  }
  return (
    <div>
      <MyHeader header="Tutorial ReactJS+Redux" />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
