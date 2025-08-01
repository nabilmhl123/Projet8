import React from 'react';
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 relative before:content-services before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            CE QUE JE RECHERCHE <span className="text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text">ACTUELLEMENT</span>
          </h2>
          
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='bg-white p-6 rounded-2xl border-2 border-orange-200 hover:border-orange-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105' key={index}>
                <div className='text-orange-600 rounded-sm w-12 h-12 flex justify-center items-center mb-6 text-[28px] bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl'>
                  {icon}
                </div>
                <h4 className='text-xl font-medium mb-2 text-gray-800'>{name}</h4>
                <p className='text-gray-600'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;