import "./ExpenseFilter.css";

const ExpenseFilter = () => {

    const onChangeDateHandler = (event) => {
        console.log(event.target.value);
    }

    return (<div>
        <select onChange={onChangeDateHandler}>
            <option value="2019" key="2019">2019</option>
            <option value="2020" key="2020">2020</option>
            <option value="2021" key="2019">2019</option>
            <option value="2022" key="2022">2022</option>
        </select>
    </div>)
};

export default ExpenseFilter;