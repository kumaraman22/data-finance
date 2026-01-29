import React from "react";
import { Link } from 'react-router-dom';
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
      className="py-20 px-4 text-white" // optional
    >
      {children}
    </_motion.div>
  );
};

const newsItems = [
  {
    title: "Q2 Market Recap: AI Stocks Continue to Surge",
    summary: "A deep dive into Q2 market performance across sectors, with focus on AI and Tech.",
    date: "July 15, 2025",
    link: "/blog/q2-market-recap"
  },
  {
    title: "Crypto Volatility and Institutional Interest",
    summary: "Major institutions hint at renewed crypto investments despite market fluctuations.",
    date: "July 12, 2025",
    link: "/news/crypto-volatility"
  },  
  {
    title: "Global Inflation Trends and Central Bank Responses",
    summary: "Analysis of inflation metrics and policy shifts across major economies.",
    date: "July 9, 2025",
    link: "/reports/global-inflation-trends"
  },
  {
    title: "Understanding the Yield Curve Inversion",
    summary: "What the yield curve is signaling about the economy and potential recession risks.",
    date: "July 6, 2025",
    link: "/insights/yield-curve-inversion"
  },
  {
  title: "Bond Market Sentiment: Yield Spread Compression Trends",
  summary: "Tracking how flattening yield spreads signal investor caution and potential credit cycle shifts.",
  date: "July 20, 2025",
  link: "/insights/yield-spread-compression"
},
{
  title: "Global Risk Dashboard: FX Volatility and Commodities Watch",
  summary: "A data-driven snapshot of foreign exchange swings and commodity price shifts impacting global portfolios.",
  date: "July 22, 2025",
  link: "/insights/global-risk-dashboard"
}
];

const NewsInsights = () => {
  return (
    <Section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Latest <span className="text-green-400">News & Insights</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Stay updated with expert analysis, economic reports, and in-depth blog articles.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group bg-[#1f1f1f] p-6 rounded-2xl hover:border-green-400 border border-transparent transition duration-300 hover:shadow-lg flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl font-semibold text-green-400 group-hover:underline mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{item.summary}</p>
            </div>
            <div className="text-gray-500 text-xs mt-auto">{item.date}</div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
  to="/blog"
  className="inline-block border-2 border-green-400 text-green-400 px-4 py-2 rounded-md hover:bg-green-400 hover:text-black transition"
>
  View All Articles
</Link>
      </div>
    </Section>
  );
};

export default NewsInsights;
