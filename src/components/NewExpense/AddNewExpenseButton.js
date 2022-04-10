const AddNewExpenseButton = (props) => {
    const clickButtonHandler = () => {
        props.onClickHandler(false);
    }
    return (<button onClick={clickButtonHandler}>
        Add New Expense
    </button>)
}
export default AddNewExpenseButton;