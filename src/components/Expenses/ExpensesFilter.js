import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onExpenseFilterByYear(event.target.value);
    props.onExpenseFilterByTitle("");
  };

  const inputChangeHandler = (event) => {
    props.onExpenseFilterByTitle(event.target.value);
    props.onExpenseFilterByYear("----");
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="----">----</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
      <div style={{display: "none"}} className="expenses-filter__control">
        <label>Filter by title</label>
        <input
          type="text"
          value={props.inputted}
          onChange={inputChangeHandler}
        />
      </div>
    </div>
  );
};

export default ExpensesFilter;
