import React from "react";
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
        className="py-20 px-4 text-white " // optional
      >
        {children}
      </_motion.div>
    );
  };


const InteractiveDemos = () => {
  return (
    <Section className="bg-black text-white py-10 px-5 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto -mt-100 text-center ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Experience Our <span className="text-green-400">Interactive Demos</span>
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
          Explore live charts, dashboards, and visualizations crafted to showcase the power of our data solutions.
        </p>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:p-16 ">
          {/* Live Charts Demo */}
          <div className="bg-[#1f1f1f] rounded-2xl p-8 shadow-md flex flex-col justify-between transform transition duration-500 hover:scale-105 hover:border hover:border-green-400 border border-transparent ease-in-out">
            <img
              src="/src/assets/LiveChart.jpg"
              alt="Live Chart Preview"
              className="rounded-lg w-full h-52 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Live Charts & Visualizations</h3>
            <p className="text-gray-400 mb-4">
              Get real-time insights with interactive charts that visualize complex data intuitively.
            </p>
            <a
              href="https://www.koyfin.com/" 
              className="inline-block border-2 border-green-400 text-green-400 px-4 py-2 rounded-md hover:bg-green-400 hover:text-black transition"
            > 
              Try Live Demo
            </a>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-[#1f1f1f] rounded-2xl p-8 shadow-md flex flex-col justify-between transform transition duration-500 hover:scale-105 hover:border hover:border-green-400 border border-transparent ease-in-out">
            <img
              src="/src/assets/Dashboard.jpg"
              alt="Dashboard Preview"
              className="rounded-lg w-full h-52 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sample Dashboard Preview</h3>
            <p className="text-gray-400 mb-4">
              See how our dashboards present data with clarity, empowering your decisions.
            </p>
            <a
              href="/demos/dashboard"
              className="inline-block border-2 border-green-400 text-green-400 px-4 py-2 rounded-md hover:bg-green-400 hover:text-black transition"
            >
              Explore Dashboard
            </a>
          </div>

          {/* Data Visualization Examples */}
          <div className="bg-[#1f1f1f] rounded-2xl p-8 shadow-md flex flex-col justify-between transform transition duration-500 hover:scale-105 hover:border hover:border-green-400 border border-transparent ease-in-out">
            <img
              src="/src/assets/Visualize.jpg"
              alt="Data Visualization"
              className="rounded-lg w-full h-52 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Data Visualization Examples</h3>
            <p className="text-gray-400 mb-4">
              View how data can be transformed into compelling visuals for strategic insights.
            </p>
            <a
              href="/demos/visualizations"
              className="inline-block border-2 border-green-400 text-green-400 px-4 py-2 rounded-md hover:bg-green-400 hover:text-black transition"
            >
              View Examples
            </a>
          </div>

          {/* Try It Now */}
          <div className="bg-[#1f1f1f] rounded-2xl p-8 shadow-md flex flex-col justify-between transform transition duration-500 hover:scale-105 hover:border hover:border-green-400 border border-transparent ease-in-out">
            <img
              src="/src/assets/Tool.jpg"
              alt="Interactive Tool Preview"
              className="rounded-lg w-full h-52 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Interactive Tool: Try It Now</h3>
            <p className="text-gray-400 mb-4">
              Use our simulated tools to interact with live datasets and test analytics in real-time.
            </p>
            <a
              href="/demos/interactive-tool"
              className="inline-block border-2 border-green-400 text-green-400 px-4 py-2 rounded-md hover:bg-green-400 hover:text-black transition"
            >
              Try Now
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InteractiveDemos;
