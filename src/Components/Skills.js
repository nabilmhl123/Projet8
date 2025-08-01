import React, { useState, useEffect } from 'react';
import { skills } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 768) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-slide functionality with seamless loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  // Create visible skills array with seamless looping
  const getVisibleSkills = () => {
    const visibleSkills = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % skills.length;
      visibleSkills.push({ ...skills[index], originalIndex: index });
    }
    return visibleSkills;
  };

  const visibleSkills = getVisibleSkills();

  return (
    <section className='bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 lg:py-20 min-h-[50vh] flex items-center relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            MES <span className="text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text">COMPÉTENCES</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des expériences digitales exceptionnelles
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 bg-white hover:bg-orange-50 border-2 border-orange-300 hover:border-orange-400 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600 group-hover:text-orange-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 bg-white hover:bg-orange-50 border-2 border-orange-300 hover:border-orange-400 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-orange-600 group-hover:text-orange-700" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-orange-200/50 shadow-xl">
            <div className={`grid gap-0 transition-all duration-500 ease-in-out`}
                 style={{ gridTemplateColumns: `repeat(${itemsPerView}, 1fr)` }}>
              {visibleSkills.map((skill, index) => (
                <div 
                  key={`${skill.originalIndex}-${index}`}
                  className="p-6 lg:p-8"
                >
                  <div className="bg-white rounded-xl p-6 border-2 border-orange-200 hover:border-orange-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300">
                        <img 
                          src={skill.image || "/placeholder.svg"} 
                          alt={skill.name} 
                          className='w-10 h-10 lg:w-12 lg:h-12 object-contain group-hover:scale-110 transition-transform duration-300' 
                        />
                      </div>
                      <h3 className="text-sm lg:text-base font-bold text-gray-800 text-center group-hover:text-orange-600 transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-orange-500 scale-125'
                    : 'bg-orange-200 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;