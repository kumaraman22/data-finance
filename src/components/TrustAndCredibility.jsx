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

const TrustAndCredibility = () => {
  return (
    <Section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-20  ">
      <div className="max-w-7xl  mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Building <span className="text-green-400">Trust & Credibility</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Discover how our platform ensures trust through transparency, reliability, and world-class security.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-[#1f1f1f] rounded-2xl p-6 shadow-md">
            <p className="text-gray-300 italic mb-4">
              "StatFlux gave us the clarity we needed to make impactful decisions with data we trust."
            </p>
            <div className="font-semibold text-green-400">— CTO, FinTrust Bank</div>
          </div>
          <div className="bg-[#1f1f1f] rounded-2xl p-6 shadow-md">
            <p className="text-gray-300 italic mb-4">
              "Their analytics transformed our internal reporting. Highly reliable and secure."
            </p>
            <div className="font-semibold text-green-400">— Head of Analytics, GlobalInvest</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-green-400">99.9% Data Accuracy</h3>
            <p className="text-gray-300">Real-time validation pipelines ensure unmatched precision in all datasets.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-green-400">SOC 2 & ISO 27001 Certified</h3>
            <p className="text-gray-300">We comply with leading standards for data protection and information security.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-green-400">24/7 Monitoring</h3>
            <p className="text-gray-300">Your data pipelines are monitored round-the-clock for maximum uptime and integrity.</p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center mt-4">
          <h3 className="text-2xl font-bold mb-6">Trusted by <span className="text-green-400">Leading Institutions</span></h3>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <img src="/src/assets/Nasdaqlogo.png" alt="Nasdaq" className="h-20 grayscale hover:grayscale-0 transition" />
            <img src="/src/assets/NYSE.png" alt="NYSE" className="h-20 grayscale hover:grayscale-0 transition" />
            <img src="/src/assets/Binance.png" alt="Binance" className="h-20 grayscale hover:grayscale-0 transition" />
            <img src="/src/assets/JpMorgan.png" alt="JP Morgan" className="h-20 grayscale hover:grayscale-0 transition" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrustAndCredibility;
