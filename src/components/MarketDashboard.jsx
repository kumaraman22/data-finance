import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import * as Recharts from "recharts";
import { useInView } from 'react-intersection-observer';
import { motion as _motion} from "framer-motion";

const Section = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 , delay:0.3} },
  };

  return (
    <_motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="px-4 py-20 " // optional
    >
      {children}
    </_motion.div>
  );
};



// Demo market data (replace with live API data as needed)
const indices = [
  { name: "NIFTY 50", value: "23,290.50", change: "+0.9%" },
  { name: "SENSEX", value: "76,960.20", change: "-0.3%" },
  { name: "NASDAQ", value: "18,290.34", change: "+1.1%" },
  { name: "S&P 500", value: "5,615.14", change: "+0.8%" },
];
const currencyRates = [
  { pair: "USD/INR", rate: "83.47" },
  { pair: "EUR/INR", rate: "90.45" },
  { pair: "GBP/INR", rate: "105.30" },
  { pair: "JPY/INR", rate: "0.58" },
];
const commodities = [
  { name: "Gold", unit: "USD/oz", price: "2,410.6" },
  { name: "Silver", unit: "USD/oz", price: "30.90" },
  { name: "Crude Oil", unit: "USD/bbl", price: "84.27" },
  { name: "Natural Gas", unit: "USD/MMBtu", price: "2.71" },
];

// Sample chart data for one of the indices
const chartData = [
  { name: "Mon", value: 22800 },
  { name: "Tue", value: 23000 },
  { name: "Wed", value: 23200 },
  { name: "Thu", value: 23100 },
  { name: "Fri", value: 23290 },
];

const MarketDashboard = () => (
  <Section className="w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-center sm:items-center gap-3"> 
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Market <span className="text-green-400">Data Dashboard</span>
      </h2>
      <span className="bg-green-400/10 text-green-400 font-medium px-3 py-1 rounded text-sm">
        Live
      </span>
    </div>
    {/* Grid Layout */}
    <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {/* Market Indices */}
      <div className="col-span-1 bg-[#181c1a] rounded-xl border border-gray-800 p-5">
        <h3 className="text-base font-semibold text-white mb-4">Indices</h3>
        <ul className="space-y-4">
          {indices.map((idx) => (
            <li key={idx.name} className="flex justify-between items-center">
              <span className="text-gray-300">{idx.name}</span>
              <span className="text-white font-semibold">{idx.value}</span>
              <span className={`ml-2 text-xs font-bold ${idx.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>{idx.change}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Interactive Line Chart */}
      <div className="col-span-1 bg-[#181c1a] rounded-xl border border-gray-800 p-5 flex flex-col">
        <h3 className="text-base font-semibold text-white mb-4">NIFTY 50 - 1W Trend</h3>
        <div className="flex-1 min-h-[170px]">
          <ResponsiveContainer width="100%" height={170}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" axisLine={false} tick={{ fill: "#bbf7d0", fontSize: 12 }} />
              <YAxis hide />
              <Tooltip contentStyle={{ background: "#181c1a", borderColor: "#34d399", color: "#fff" }} />
              <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Currency Rates */}
      <div className="col-span-1 xl:col-span-1 bg-[#181c1a] rounded-xl border border-gray-800 p-5">
        <h3 className="text-base font-semibold text-white mb-4">Currency Rates</h3>
        <ul className="space-y-4">
          {currencyRates.map((curr) => (
            <li className="flex justify-between items-center" key={curr.pair}>
              <span className="text-gray-300">{curr.pair}</span>
              <span className="text-white font-semibold">{curr.rate}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Commodities */}
      <div className="col-span-1 xl:col-span-1 bg-[#181c1a] rounded-xl border border-gray-800 p-5">
        <h3 className="text-base font-semibold text-white mb-4">Commodities</h3>
        <ul className="space-y-4">
          {commodities.map((com) => (
            <li className="flex justify-between items-center" key={com.name}>
              <span className="text-gray-300">{com.name}</span>
              <span className="text-white font-semibold">
                {com.price} <span className="text-gray-400 text-xs">{com.unit}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Footer link */}
    <div className="max-w-6xl mx-auto text-center mt-10">
      <a
        href="https://www.google.com/finance/"
        className="inline-block text-green-400 font-semibold hover:underline text-base sm:text-lg"
      >
        View Full Market Details →
      </a>
    </div>
  </Section>
);

export default MarketDashboard;
