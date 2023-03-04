import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    // Find max value from data points (months)
    const values = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {/* Output list of datapoints dynamically as ChartBar components */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
