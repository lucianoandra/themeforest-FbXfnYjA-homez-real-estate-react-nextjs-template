"use client";
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const MonthlyPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={120} // Adjust outerRadius to increase the size of the pie
          fill="#8884d8"
          label
        />
        <Pie
          dataKey="value"
          data={data02}
          cx={500}
          cy={200}
          innerRadius={60} // Adjust innerRadius to increase the size of the inner part of the pie
          outerRadius={120} // Adjust outerRadius to increase the size of the outer part of the pie
          fill="#82ca9d"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MonthlyPieChart;
