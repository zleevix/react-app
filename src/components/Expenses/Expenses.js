import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
const Expenses = (props) => {
  // const [items, setItems] = useState(props.items);
  const [filteredYear, setFilteredYear] = useState("----");
  const [filterdTitle, setFilteredTitle] = useState("");
  const filterYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterTitleChangeHandler = (titleFilterd) => {
    setFilteredTitle(titleFilterd);
  };
  let filteredExpenses = props.items;
  if (filteredYear !== "----") {
    filteredExpenses = props.items.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );
  }
  if (filterdTitle !== "") {
    filteredExpenses = props.items.filter((expense) =>
      expense.title.includes(filterdTitle)
    );
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilterByYear={filterYearChangeHandler}
          onExpenseFilterByTitle={filterTitleChangeHandler}
          inputted={filterdTitle}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        {/* {filteredExpenses.length === 0 ? (
          <p className={"no-expenses-filtered"}>No expenses found for {filteredYear}</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}

        {/* {[...items].map((item, i) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))} */}
      </Card>
    </div>
  );
};
export default Expenses;
