import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { Date: "01-01-2023", Sales: 100, name: "Burger" },
  { Date: "01-02-2023", Sales: 200, name: "Pizza" },
  { Date: "01-03-2023", Sales: 300, name: "Pasta" },
];

export default function GraphForSales() {
  return (
    <div className=" bg-white w-145 flex justify-center items-center rounded-2xl p-4  ">
      <ResponsiveContainer width={600} height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />

          <Line
            type="monotone"
            dataKey="Sales"
            stroke="purple"
            strokeWidth={2}
            name="My data series name"
          />

          <XAxis dataKey="Date" />
          <YAxis
            label={{ value: "Sales", position: "insideLeft", angle: -90, style: { textAnchor: "middle", stroke: "black", fill: "purple" } }}
          />
          <Legend align="right" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
