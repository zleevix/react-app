import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    { title: "Title 1", amount: 123.3, date: new Date(2022, 4, 1) },
    { title: "Title 2", amount: 234.3, date: new Date(2022, 4, 2) },
    { title: "Title 3", amount: 534.3, date: new Date(2022, 4, 3) },
    { title: "Title 4", amount: 678.3, date: new Date(2022, 4, 4) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
