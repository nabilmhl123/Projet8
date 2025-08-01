import React from 'react';
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 relative before:content-portfolio before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            MES <span className="text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text">TRAVAUX</span>
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Mes travaux et leurs explications
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;