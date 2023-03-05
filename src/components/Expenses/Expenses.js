import ExpenseList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import React, { useState } from "react";

const Expenses = (props) => {
  // filterYear: current selected year to filter expenses
  // setFilterYear: set filterYear and change state
  const [filterYear, setFilterYear] = useState("All");

  // default filteredExpenses is the list of all expense objects
  let filteredExpenses = props.items;

  // when a year is selected, filter expenses by year
  if (filterYear !== "All") {
    filteredExpenses = props.items.filter(
      expense => expense.date.getFullYear().toString() === filterYear
    );
  }

  // Test
  // console.log("expenses in Expenses.js");
  // console.log(filteredExpenses);

  // a function to pass to ExpensesFilter which expects a four digit year as a string
  // STATE CHANGE on execution, filterYear = selectedYear
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  // Card UI
  // Pass filterYear and filterChangeHandler function to ExpensesFilter component
  // Pass filteredExpenses to ExpenseChart and ExpenseList
  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
      </div>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
