import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount]= useState(props.amount);
  console.log("ExpenseItem component loaded!");  
  // let title = props.title;

  const clickHandler = () => {
    setTitle("Changed !");
    setAmount("11111");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}đ</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
