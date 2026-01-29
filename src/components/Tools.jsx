import React from "react";
import { Link } from "react-router-dom";
import { FaCalculator, FaChartPie, FaExchangeAlt } from "react-icons/fa";

const tools = [
  {
    name: "Investment Calculator",
    description: "Estimate returns based on interest rates and time.",
    icon: <FaCalculator className="text-2xl text-green-500" />,
    link: "/tools/investment-calculator",
  },
  {
    name: "Budget Planner",
    description: "Organize income and expenses for smart planning.",
    icon: <FaChartPie className="text-2xl text-indigo-500" />,
    link: "/tools/budget-planner",
  },
  {
    name: "Currency Converter",
    description: "Convert global currencies with real-time rates.",
    icon: <FaExchangeAlt className="text-2xl text-yellow-500" />,
    link: "/tools/currency-converter",
  },
];

const Tools = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        ➜ Financial Tools
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <Link
            to={tool.link}
            key={index}
            className="group block p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                {tool.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {tool.name}
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tools;
