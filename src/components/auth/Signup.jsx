import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { motion as _motion} from "framer-motion";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Section = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 , delay:0.3} },
  };

  return (
    <_motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? 'show' : 'hidden'} className="px-4 text-white">
      {children}
    </_motion.div>
  );
};

const Signup = ({ switchToLogin }) => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      alert("User created successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Section>
      <h2 className="text-xl font-semibold mb-6 text-center">Sign Up</h2>
      <input type="text" placeholder="Username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} className="w-full mb-3 px-4 py-2 rounded-full bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none" />
      <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full mb-3 px-4 py-2 rounded-full bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none" />
      <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full mb-4 px-4 py-2 rounded-full bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none" />
      <button onClick={handleSignup} className="bg-gradient-to-r from-green-500 to-yellow-300 text-black font-semibold px-4 py-2 rounded-full w-full transition-all hover:brightness-110">
        Sign Up
      </button>
      <div className="flex justify-between mt-4 text-sm text-gray-300">
        <button onClick={switchToLogin} className="hover:underline">Back to Login</button>
      </div>
    </Section>
  );
};

export default Signup;
