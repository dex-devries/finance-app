import ExpenseList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2023");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

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
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
