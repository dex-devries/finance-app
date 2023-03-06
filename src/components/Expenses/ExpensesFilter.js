import "./ExpensesFilter.css";

// ExpensesFilter component expects props.onFilterYearChange() and .onFilterMonthChange from Expenses.js.
// onFilterChange expects a four digit year as a string or "All"
const ExpensesFilter = (props) => {
  const yearSelectHandler = (e) => {
    // console.log("Year in ExpensesFilter.js");
    // console.log(e.target.value);S
    props.onFilterYearChange(e.target.value);
  };

  const monthSelectHandler = (e) => {
    props.onFilterMonthChange(e.target.value);
  }

  // Select dropdown with options - values
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.yearSelected} onChange={yearSelectHandler}>
          <option value="All">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <div className="expenses-filter__control">
        <label>Filter by month</label>
        <select value={props.monthSelected} onChange={monthSelectHandler}>
          <option value="All">All</option>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
