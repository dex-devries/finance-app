import ExpenseList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("All");

  let filteredExpenses = props.items;
  
  if (filterYear !== "All") {
    filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filterYear;
    });
  }

  console.log("expenses in Expenses.js");
  console.log(filteredExpenses);

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  
  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
      </div>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
