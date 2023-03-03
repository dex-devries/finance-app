import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handlers for toggle and save expense
  const toggleMenuHandler = (open) => {
    open ? setMenuOpen(true) : setMenuOpen(false);
  }
  const saveExpenseHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.floor((Math.random() * 10) ^ 10).toString(),
    };
    props.onAddExpense(expenseData);
  };

   // Variables to store JSX return
   const menuOpenJSX = (
    <div className="new-expense">
      <ExpenseForm onSave={saveExpenseHandler} onCancel={toggleMenuHandler}/>
    </div>
  );
  const menuClosedJSX = (
    <div className="new-expense"> 
      <button onClick={() => {
        toggleMenuHandler(true);
      }}>Add Expense</button>
    </div>
  )

  if (menuOpen) {
    return menuOpenJSX;
  }
  return menuClosedJSX;
};

export default NewExpense;
