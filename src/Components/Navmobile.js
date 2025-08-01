import React, { useState } from 'react';
import { navigation } from '../data';
import { XIcon, MenuAlt3Icon } from '@heroicons/react/outline';
import Socials from './Socials';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navmobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 100, 
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className='relative'>
      <div 
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-black hover:text-purple-500 transition-colors duration-300'
      >
        <MenuAlt3Icon className='w-8 h-8' />
      </div>

      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-amber-50 fixed top-0 right-0'
      ></motion.div>

      <motion.ul 
        variants={ulVariants}
        initial='hidden' 
        animate={isOpen ? 'visible' : 'hidden'}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 bg-white border-l-4 border-black shadow-2xl`}
      >
        {navigation.map((item, index) => (
          <li key={index} className='mb-8'>
            <Link 
              to={item.href}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className='text-black hover:text-purple-500 text-xl cursor-pointer font-semibold transition-all duration-300 hover:scale-110'
            >
              {item.name}
            </Link>
          </li>
        ))}
        
        <div className='mt-8'>
          <Socials />
        </div>
        
        <div
          onClick={() => setIsOpen(false)}
          className='cursor-pointer absolute top-8 right-8 text-black hover:text-purple-500 transition-colors duration-300'
        >
          <XIcon className='w-8 h-8' />
        </div>
      </motion.ul>
    </nav>
  );
};

export default Navmobile;