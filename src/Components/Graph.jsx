import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useLocation } from "react-router-dom";

const Graph = () => {
  const location = useLocation();
  const data = location.state?.data || [];

  return (
    
    <>
    <div className="continer bg-white border-radius-10px">
    <h1 className="text-3xl font-bold mb-2">JOB PROVIDED PER MONTH</h1>
    <BarChart
      xAxis={[
        { scaleType: "band", data: ["January", "February", "March", "April", "May"] }
      ]}
      series={[
        { data: [35, 42, 28, 50, 38]}, 
      ]}
      width={500}
      height={300}
    />
    </div>
    </>
  );
};

export default Graph;
