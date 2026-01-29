import React from "react";
import { CheckCircle } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { motion as _motion} from "framer-motion";

const green = "text-green-400";
const bgBox = "bg-[#1c1c1c]";
const border = "border border-gray-800";

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
      className="py-20 px-4 " // optional
    >
      {children}
    </_motion.div>
  );
};

const DataCoverage = () => {
  return (
    <Section className="relative w-full bg-black py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto -mt-10 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
          Our <span className={green}>Data Coverage</span>
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Powering intelligent decisions with comprehensive, reliable, and up-to-date datasets.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Card 1 - Asset Classes */}
        <div className={`rounded-2xl p-6 sm:p-8 ${bgBox} ${border} flex flex-col h-full`}>
          <h3 className="text-xl font-semibold text-white mb-4">Asset Classes</h3>
          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Stocks</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Bonds</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Commodities</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Crypto Assets</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> ETFs and Indexes</li>
          </ul>
        </div>

        {/* Card 2 - Geographic Markets */}
        <div className={`rounded-2xl p-6 sm:p-8 ${bgBox} ${border} flex flex-col h-full`}>
          <h3 className="text-xl font-semibold text-white mb-4">Geographic Markets</h3>
          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> North America (NYSE, NASDAQ)</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Europe (LSE, Euronext)</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Asia-Pacific (Nikkei, SGX)</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Global Crypto Exchanges</li>
          </ul>
        </div>

        {/* Card 3 - Historical Data Depth */}
        <div className={`rounded-2xl p-6 sm:p-8 ${bgBox} ${border} flex flex-col h-full`}>
          <h3 className="text-xl font-semibold text-white mb-4">Historical Data</h3>
          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Up to 30+ years for equities</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> 15+ years for macroeconomic indicators</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Blockchain data since inception</li>
          </ul>
        </div>

        {/* Card 4 - Update Frequency */}
        <div className={`rounded-2xl p-6 sm:p-8 ${bgBox} ${border} flex flex-col h-full`}>
          <h3 className="text-xl font-semibold text-white mb-4">Update Frequency</h3>
          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Real-time market data</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Daily EOD (End-of-Day) snapshots</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Weekly macroeconomic updates</li>
            <li><CheckCircle className={`${green} inline w-5 h-5 mr-2`} /> Guaranteed 99.9% reliability</li>
          </ul>
        </div>
      </div>

      {/* Optional link or CTA */}
      <div className="text-center mt-16">
        <a href="/data-details" className={`inline-block px-6 py-3 border-2 border-green-400 rounded-lg font-medium ${green} hover:bg-green-400 hover:text-black transition-colors duration-200`}>
          Explore Full Coverage
        </a>
      </div>
    </Section>
  );
};

export default DataCoverage;
