import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
    const saveExpenseDateHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return (
        <div  className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}/>
        </div>
    );
}

export default NewExpense;