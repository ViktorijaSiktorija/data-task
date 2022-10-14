import React, { useState, useEffect, useCallback } from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import Typography from "@material-ui/core/Typography";

export default function LineCharts() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(() => {
    fetch("https://633e603c0dbc3309f3b4a4fc.mockapi.io/cstest/viktorijaLukic")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Typography
        component="h2"
        variant="h6"
        color="primary"
        gutterBottom
        align="left"
      >
        Line Chart
      </Typography>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="year" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="startingRent" stroke="purple" activeDot={{ r: 8 }} />
          <Line dataKey="effectiveRent" stroke="blue" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
