import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import AddNewExpenseButton from './AddNewExpenseButton';
import './NewExpense.css';
const NewExpense = (props) => {
    const [displayButtonAdd, setDisplayButtonAdd] = useState(true);
    const saveExpenseDateHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setDisplayButtonAdd(true);
    }
    const clickHandler = (changed) => {
        setDisplayButtonAdd(changed);
    }
    return (
        <div className="new-expense">
            { displayButtonAdd && <AddNewExpenseButton onClickHandler={clickHandler} />}
            { !displayButtonAdd && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancelHandler={clickHandler}/>}
            
        </div>
    );
}

export default NewExpense;