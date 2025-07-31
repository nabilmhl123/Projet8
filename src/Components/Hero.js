import React from 'react';
import { Link } from 'react-scroll';
import Nabil from '../assets/img/logo2.svg';
import CV from '../assets/img/CV.pdf';

const Hero = () => {
  return (
    <section id='accueil' className='lg:h-[100vh] flex
    items-center bg-primary lg:bg-cover lg:bg-center
    lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent mb-2'>{/* Nabil Mahel*/}</p>
            <h1 className='text-4x1 leading-[44px] md:text-5lx md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Web Developer & Data/IA Enthusiast
            </h1>
            <a
              href={CV} 
              download
              className='btn btn-md bg-accent hover:bg-accent-hover mt-2 md:btn-lg transition-all cursor-pointer'
            >
              Télecharger le CV
            </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end h-full'>
            <img src={Nabil} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;