import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
// import AddNewExpenseButton from './AddNewExpenseButton';
import './NewExpense.css';
const NewExpense = (props) => {
    const [isDisplayExpenseForm, setIsDisplayExpenseForm] = useState(false);
    const saveExpenseDateHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        // setDisplayButtonAdd(true);
        hideExpenseForm();
    }
    // const clickHandler = (changed) => {
    //     setDisplayExpenseForm(changed);
    // }

    const displayExpenseForm = () => {
        setIsDisplayExpenseForm(true);
    }

    const hideExpenseForm = () => {
        setIsDisplayExpenseForm(false);
    }

    return (
        <div className="new-expense">
            {/* { displayButtonAdd && <AddNewExpenseButton onClickHandler={clickHandler} />} */}
            { !isDisplayExpenseForm && <button onClick={displayExpenseForm}>Add New Expense</button>}
            { isDisplayExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancelHandler={hideExpenseForm}/>}
            
        </div>
    );
}

export default NewExpense;