import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
const Expenses = (props) => {
  // const [items, setItems] = useState(props.items);
  const [filteredYear, setFilteredYear] = useState('2019');
  
  const filterChangeHandler = (selectedYear) => {
    console.log("in Expenses.js: " + selectedYear);
    setFilteredYear(selectedYear);
    // let expenseItemsFiltered = [...items].filter(
    //   (i) => i.date.getFullYear() == selectedYear
    // );
    // console.log("expenseItemsFiltered" +expenseItemsFiltered);
    // if (expenseItemsFiltered.length == 0) {
    //   setItems(items);
    // }
    // else {
    //   setFilteredYear(selectedYear);
    //   setItems(expenseItemsFiltered);
    // }
  };
  // console.log("Expenses.js");

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onExpenseFilter={filterChangeHandler} />
        <ExpenseItem
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
        />
        
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
