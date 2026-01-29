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


const pricingData = [
  {
    title: "Starter",
    price: "$0",
    frequency: "/mo",
    features: [
      "Access to basic datasets",
      "Real-time charts",
      "Community support",
      "Limited API access"
    ],
    cta: "Start Free",
    link: "/signup"
  },
  {
    title: "Professional",
    price: "$49",
    frequency: "/mo",
    features: [
      "Full API access",
      "Advanced dashboards",
      "Priority email support",
      "Unlimited data queries"
    ],
    cta: "Get Started",
    link: "/signup"
  },
  {
    title: "Enterprise",
    price: "Custom",
    frequency: "",
    features: [
      "Dedicated account manager",
      "Custom integrations",
      "SLAs & compliance support",
      "24/7 expert support"
    ],
    cta: "Contact Sales",
    link: "/contact"
  }
];

const PricingTiers = () => {
  return (
    <Section className="bg-black text-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Flexible <span className="text-green-400">Pricing Tiers</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Whether you're an individual researcher or a large institution, we have a plan that fits your needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((tier, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] rounded-2xl p-8 shadow-md flex flex-col justify-between transform transition duration-500 hover:scale-105 hover:border hover:border-green-400 border border-transparent ease-in-out"
          >
            <div>
              <h3 className="text-2xl font-semibold text-green-400 mb-4">{tier.title}</h3>
              <div className="text-4xl font-bold mb-2">{tier.price}</div>
              <div className="text-gray-400 mb-10">{tier.frequency}</div>
              <ul className="text-left space-y-2 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 ">✔️ {feature}</li>
                ))}
              </ul>
            </div>
            <a
              href={tier.link}
              className="mt-6 text-center items-center inline-block border-2 border-green-400 text-green-400 px-4 py-2 rounded-md hover:bg-green-400 hover:text-black transition"
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="mt-20 text-left overflow-x-auto">
        <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Feature Comparison</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700 text-gray-300">
              <th className="p-3">Feature</th>
              <th className="p-3">Starter</th>
              <th className="p-3">Professional</th>
              <th className="p-3">Enterprise</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-gray-800">
              <td className="p-3">Full API Access</td>
              <td className="p-3">❌</td>
              <td className="p-3">✔️</td>
              <td className="p-3">✔️</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-3">Real-time Charts</td>
              <td className="p-3">✔️</td>
              <td className="p-3">✔️</td>
              <td className="p-3">✔️</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-3">Dedicated Support</td>
              <td className="p-3">❌</td>
              <td className="p-3">Email</td>
              <td className="p-3">24/7 Expert</td>
            </tr>
            <tr>
              <td className="p-3">Custom Integrations</td>
              <td className="p-3">❌</td>
              <td className="p-3">❌</td>
              <td className="p-3">✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default PricingTiers;
