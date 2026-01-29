import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const NeonAuthWrapper = ({ mode = "login" }) => {
  const [authMode, setAuthMode] = useState(mode);

  const switchToLogin = () => setAuthMode("login");
  const switchToSignup = () => setAuthMode("signup");


  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full sm:mx-6 max-w-md p-8 bg-opacity-20 backdrop-blur-md bg-black border border-white rounded-xl shadow-xl ">
        {authMode === "login" ? (
          <Login switchToSignup={switchToSignup} />
        ) : (
          <Signup switchToLogin={switchToLogin} />
        )}
        
      </div>
    </div>
  );
};

export default NeonAuthWrapper;
