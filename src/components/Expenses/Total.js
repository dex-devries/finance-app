const Total = (props) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Total for selection: ${props.total}</label>
      </div>
    </div>
  );
};

export default Total;
