import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";
const Expenses = (props) => {
  const [items, setItems] = useState(props.items);

  const expenseFilterHandler = (filteredDate) => {
    console.log("in Expenses.js")
    console.log(filteredDate);
    let expenseItemFilter = [...items].filter(i => i.date.getFullYear() == filteredDate);
    console.log(expenseItemFilter);
    setItems(expenseItemFilter);

  };
  console.log(items);

  return (
    <div>
      <ExpenseFilter onExpenseFilter={expenseFilterHandler}/>
      <Card className="expenses">
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
        {[...items].map((item, i) =>
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      )}
      </Card>
    </div>
  );
};
export default Expenses;
