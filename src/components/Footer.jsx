import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion as _motion } from "framer-motion";
import { 
  Menu, 
  X, 
  Search,
  TrendingUp,
  BarChart3,
  Calculator,
  Newspaper
} from 'lucide-react';

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
      className="text-white"
    >
      {children}
    </_motion.div>
  );
};

const Footer = () => {
  return (
    <Section className="lg:ml-20 lg:mr-20">
      <footer className="text-gray-400 body-font bg-black">
        <div className="max-w-7xl mx-auto container px-5 py-10 flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-400" />
                <span className="ml-2 text-xl font-bold text-white">STATFLUX</span>
              </div>
            </a>
            <p className="mt-2 text-sm text-gray-500">Your trusted source for financial market insights and data.</p>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contact</h2>
              <nav className="list-none mb-10">
                <li><span className="text-gray-400">Email:</span> <a href="mailto:amansoni47969@gmail.com" className="hover:text-green-400">amansoni47969@gmail.com</a></li>
                <li><span className="text-gray-400">Phone:</span> <a href="tel:+919608115545" className="hover:text-green-400">+919608115545</a></li>
                <li><span className="text-gray-400">Address:</span> <p className="text-sm">Delhi - NCR</p></li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Legal</h2>
              <nav className="list-none mb-10">
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-green-400">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="text-gray-400 hover:text-green-400">Terms of Service</a></li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Support</h2>
              <nav className="list-none mb-10">
                <li><a href="/help-center" className="text-gray-400 hover:text-green-400">Help Center</a></li>
                <li><a href="/faqs" className="text-gray-400 hover:text-green-400">FAQs</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-green-400">Contact Us</a></li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Resources</h2>
              <nav className="list-none mb-10">
                <li><a href="/blog" className="text-gray-400 hover:text-green-400">Blog</a></li>
                <li><a href="/insights" className="text-gray-400 hover:text-green-400">Insights</a></li>
                <li><a href="/api-docs" className="text-gray-400 hover:text-green-400">API Docs</a></li>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-[#111]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2025 - aman
              <a href="https://www.linkedin.com/in/aman-soni067/" className="text-gray-400 ml-1 hover:text-green-400" target="_blank" rel="noopener noreferrer">@StatFlux</a>
            </p>
            <span className="sm:order-1 inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-green-400">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="ml-3 text-gray-400 hover:text-green-400">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13c-3 2-7 2-7 2s9 5 20-5a4.5 4.5 0 00.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="ml-3 text-gray-400 hover:text-green-400">
                <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="ml-3 text-gray-400 hover:text-green-400">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </Section>
  );
}

export default Footer;
