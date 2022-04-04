import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item__root">
      <div className="expense-item__date">{props.date.toISOString()}</div>
      <div className="expense-item___title__amount">
        <div className="expense-item__title">{props.title}</div>
        <div className="expense-item__amount">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
