import "./ExpenseForm.css";
import React, { useState } from "react";

// ExpenseForm component expects props.onSave and props.onCancel from NewExpense
const ExpenseForm = (props) => {
  
  // This whole code block just to style date correctly for dynamic max date :`(
  const date = new Date(Date.now());
  // console.log(date.getDay());
  let today =
    date.getFullYear() +
    "-" +
    ((date.getMonth() + 1 ).toString().length === 1
      ? "0" + (date.getMonth() + 1)
      : (date.getMonth() + 1)
    ) +
    "-" +
    (date.getDate().toString().length === 1
      ? "0" + date.getDate()
      : date.getDate()
    );
    // console.log(today);
  // End spaghetti

  // state variables for t - title string, a - amount number, d - date string
  const [t, setTitle] = useState("");
  const [a, setAmount] = useState("");
  const [d, setDate] = useState(today);

  // handles changes in title input and changes state
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  // handles changes in amount iinput and changes state
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  // handles changes in date input and changes state
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  // handles form submission and changes state
  const submitHandler = (e) => {
    // stops http request from reloading page
    e.preventDefault();
    // create expense object
    const expenseData = {
      title: t,
      // NOTE: + enforces number conversion for amount
      amount: +a,
      // NOTE: date-only strings (e.g. "1970-01-01") are treated as UTC,
      // while date-time strings (e.g. "1970-01-01T12:00") are treated as local.
      date: new Date(d + "T00:00:00"),
    };
    // call onSave(expenseData) to pass expense data back to NewExpense and change state
    props.onSave(expenseData); 
    // change state back to empty form
    setTitle("");
    setAmount("");
    setDate("");
  };

  // handles the cancel button - passes false back to NewItem which changes state
  const cancelHandler = () => {
    props.onCancel(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={t} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={a}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2001-01-01"
            max={today}
            value={d}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
