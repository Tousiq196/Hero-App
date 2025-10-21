import React from "react";
import useData from "../Hook/useData";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Barchart = () => {
  const { data } = useData();

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">Loading chart data...</p>;
  }
 const coursera = data.find((app) => app.title === "Coursera");
  const ratingsData = coursera?.ratings?.slice().reverse() || [];

  return (
    <div className="w-full h-[400px] ">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={ratingsData}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          style={{ background: "transparent" }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" 
           axisLine={false} 
            tickLine={false}
          />
          <YAxis 
          dataKey="name"
           type="category"
           tick={{ fontSize: 20, fontWeight: "semibold", fill: "#627382"}}
           axisLine={false} 
            tickLine={false}
           />
          <Tooltip />
          <Bar dataKey="count" barSize={40} fill="#ff8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
