import React from "react";
import {motion as _motion} from "framer-motion";
import AnimatedDotsBackground from "./AnimatedDotsBackground";



const heroSectionAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay : 1,
      duration: 1,
      ease: "easeOut"
    }
  }
};


const HeroSection = () => {
  return (
    <_motion.div
  className="relative bg-black text-white overflow-hidden"
  initial="hidden"
  animate="show"
  variants={heroSectionAnimation}
>
  
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <AnimatedDotsBackground />
        <div
          className="absolute left-0 top-0 h-full w-48"
          style={{ backgroundImage: 'url(/circuit-left.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
        />
        <div
          className="absolute right-0 top-0 h-full w-48"
          style={{ backgroundImage: 'url(/circuit-right.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-24 sm:pt-32 pb-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800"
        
        >
          Decode the Economy, <br className="hidden sm:inline" /> Decide with Clarity
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 max-w-2xl">
          Learning economics shouldn’t be boring. We break down complex data into bite-sized visuals so you can explore, understand, and stay curious.
        </p>
        <a href="https://www.ni.com/en.html"><button className="mt-6 px-6 py-3 border border-green-500 text-green-500 font-medium rounded-lg hover:bg-green-500 hover:text-black transition duration-300">
          Know More
        </button></a>
        
      </div>

      {/* Services Section */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-[#111] border border-[#222] shadow-xl rounded-3xl p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Our <span className="text-green-400">Services</span>
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">
            Simplify post-trade analysis with actionable financial data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#1c1c1c] rounded-2xl p-6 text-left">
              <div className="w-10 h-10 flex items-center justify-center bg-green-500/20 rounded-lg mb-4">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 017 7c0 3-1.5 4.5-3 6v2H10v-2c-1.5-1.5-3-3-3-6a7 7 0 017-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6m-3-3v3"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Post-Trade Data Intelligence</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Leverage DTCC’s post-trade infrastructure to access curated datasets spanning trade activities, corporate actions, and security references. Ideal for financial institutions seeking efficient data management across asset classes—with formats tailored for analytics, compliance, and operational clarity
              </p>
              <a href="https://www.dtcc.com/institutional-trade-processing/itp/hub/re-imagining-post-trade" className="text-green-400 font-semibold hover:underline text-sm">Read more</a>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1c1c1c] rounded-2xl p-6 text-left">
              <div className="w-10 h-10 flex items-center justify-center bg-green-400/20 rounded-lg mb-4">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="9" width="13" height="13" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9V5a2 2 0 012-2h2a2 2 0 012 2v13" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Economic Trade Explorer</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Dive into curated datasets on inflation, GDP, employment, and more. Our explorer lets users visualize patterns, compare timelines, and discover correlations—ideal for analysts, students, and curious minds alike.
              </p>
              <a href="https://tradingeconomics.com/" className="text-green-400 font-semibold hover:underline text-sm">Read more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Orange Bottom Curve */}
      <div className="relative z-0 w-full overflow-hidden ">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.green/2000/svg" className=" w-full h-auto">
          <path
            d="M0 80 Q400 160 850 80 T1440 100 V200 H0Z"
            fill="#4ade80"
            fillOpacity="0.9"
          />
        </svg>
      </div> 
    </_motion.div>
  );
};

export default HeroSection;
