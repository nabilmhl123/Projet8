import { useState, useEffect } from "react";
import Navbar from './Navbar'
import Navmobile from "./Navmobile";
import Socials from "./Socials";
import LOGO from '../assets/img/logo2.svg';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`${
        bg 
          ? 'bg-white/95 backdrop-blur-sm h-16 shadow-xl border-b-2 border-orange-200/50' 
          : 'bg-gradient-to-r from-orange-50/90 via-amber-50/90 to-yellow-50/90 h-20'
      } flex items-center fixed top-0 w-full text-gray-900 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4 lg:px-6">
        {/* logo */}
        <a href="#" className="hover:scale-105 transition-transform duration-300 group">
          <p className="text-xl lg:text-2xl font-black text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:bg-clip-text transition-all duration-300">
            Nabil Mahel
          </p> 
        </a>

        {/* nav */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>

        {/* mobile nav */}
        <div className="lg:hidden">
          <Navmobile />
        </div>
      </div>
    </header>
  );
};

export default Header;