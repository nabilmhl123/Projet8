import React from 'react';
import { navigation } from '../data';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <ul className='flex space-x-6 lg:space-x-8 capitalize text-[15px] lg:text-[16px]'>
        {navigation.map((item, index) => {
          return (
            <li className='text-gray-900 hover:text-orange-600 cursor-pointer transition-all duration-300 font-medium hover:font-bold' key={index}>
              <Link 
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500} 
                offset={-70}
                className='transition-all duration-300 hover:scale-105 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-amber-500 after:transition-all after:duration-300 hover:after:w-full'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;