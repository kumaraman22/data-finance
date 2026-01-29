import React from "react";
import { Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const salesData = [
  { month: "Apr", sales: 120, expenses: 80 },
  { month: "May", sales: 170, expenses: 110 },
  { month: "Jun", sales: 140, expenses: 100 },
  { month: "Jul", sales: 190, expenses: 130 },
  { month: "Aug", sales: 200, expenses: 150 },
  { month: "Sep", sales: 230, expenses: 170 },
  { month: "Oct", sales: 260, expenses: 180 },
];

const salesDistribution = [
  { name: "Asia", value: 9200 },
  { name: "Europe", value: 6450 },
  { name: "America", value: 4210 },
];

const COLORS = ["#34d399", "#818cf8", "#facc15"];

const Analytics = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen p-6 sm:p-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          ➜ Analytics Overview
        </h1>
        <Link
          to="/dashboard"
          className="text-sm text-green-600 dark:text-green-400 hover:underline"
        >
          Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Sales", value: "$26,132", color: "text-green-600" },
          { label: "Cost of Goods", value: "$18,390", color: "text-indigo-600" },
          { label: "Gross Margin", value: "$7,742", color: "text-green-600" },
          { label: "EBITDA", value: "27%", color: "text-yellow-500" },
        ].map((item, index) => (
          <div key={index} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
            <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Sales Trend
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#cbd5e0" />
              <YAxis stroke="#cbd5e0" />
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#34d399"
                fillOpacity={1}
                fill="url(#colorSales)"
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#f87171"
                fillOpacity={0.3}
                fill="#fecaca"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Sales Distribution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={salesDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                nameKey="name"
                label
              >
                {salesDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
