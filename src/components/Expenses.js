import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {

    return(
    <div className="expenses">
    {props.expenses.map(item => <ExpenseItem title={item.title} amount={item.amount} date={item.date} />)}
    </div>
    );
}

export default Expenses;