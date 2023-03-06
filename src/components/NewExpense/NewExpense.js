import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

// NewExpense component expects props.onAddExpense from App.js
const NewExpense = (props) => {
  // state for new expense menu open (true) or closed (false)
  const [menuOpen, setMenuOpen] = useState(false);

  // Handler for toggle menu open/closed (pass to ExpenseForm component)
  const toggleMenuHandler = (open) => {
    open ? setMenuOpen(true) : setMenuOpen(false);
  }
  // Handler for saved expenses in ExpenseForm (pass to ExpenseForm component)
  const saveExpenseHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      // Random ID needs work - could duplicate
      id: Math.floor((Math.random() * 10) ^ 10).toString(),
    };
    // pass added expense to App
    props.onAddExpense(expenseData);
  };

   // Variables to store JSX returns
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
  // conditional for menu open
  if (menuOpen) {
    return menuOpenJSX;
  }
  return menuClosedJSX;
};

export default NewExpense;
