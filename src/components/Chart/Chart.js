import React from "react";
import "./Chart.css";
import CharBar from "./ChartBar";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  // console.log("DataPoints :" + dataPointValues);
  const totalMaximumValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <CharBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
