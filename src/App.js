import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

import { expenses } from "./demoExpenses";

// Test data
const TEST_INIT_EXPENSES = expenses;


function App() {
  // state variables for expenses list - expenses is the list of all expense objects to be passed to Expenses object
  const [expenses, setExpenses] = useState(TEST_INIT_EXPENSES);

  // a function to pass to NewExpense component which expects an expense object
  // setExpenses adds the new expenses to expenses list and updates state with 
  // anonymous function - this syntax ensures updating happens before render
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // pass addExpenseHandler() to NewExpense object - STATE FUNCTION - Expects expense object - prop: onAddExpense
  // pass expenses list to Expenses - prop: items
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
