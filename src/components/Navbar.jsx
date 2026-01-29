import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";


import { 
  Menu, 
  X, 
  Search,
  TrendingUp,
  BarChart3,
  Calculator,
  Newspaper
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Market', href: 'https://www.google.com/finance/', icon: TrendingUp },
    { name: 'Tools', href: '/tools', icon: Calculator },
    { name: 'News', href: 'https://www.google.com/finance/', icon: Newspaper }
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
const navigate = useNavigate();


  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
  onClick={() => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  }}
  className="flex items-center focus:outline-none"
>
  <TrendingUp className="h-8 w-8 text-green-400" />
  <span className="ml-2 text-xl font-bold text-white cursor-pointer">
    STATFLUX
  </span>
</button>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search stocks, data..."
                className="pl-10 pr-4 py-2 w-64 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
  <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium">
    Login
  </button>
</Link>
            
            <Link to="/signup">
  <button className="px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors duration-200 font-medium">
    Sign Up
  </button>
</Link>

            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search stocks, data..."
                    className="pl-10 pr-4 py-2 w-full bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Mobile Navigation Items */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 hover:bg-gray-900 px-3 py-2 rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="px-3 py-4 space-y-2 border-t border-gray-700 mt-4">
                <Link to="/login">
  <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium">
    Login
  </button>
</Link>
                <Link to="/signup">
  <button className="px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors duration-200 font-medium">
    Sign Up
  </button>
</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;