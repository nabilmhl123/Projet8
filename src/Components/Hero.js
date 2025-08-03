import React from 'react';
import CV from '../assets/img/Nabil Mahel BACHELOR 3 DATA & IA EN ALTERNANCE.pdf.pdf';

const Hero = () => {
  return (
    <section 
      id='accueil' 
      className='min-h-screen lg:h-[100vh] flex items-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 lg:bg-cover lg:bg-center lg:bg-no-repeat py-20 sm:py-24 lg:py-0 overflow-hidden relative'
    >
      {/* Warm Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Warm ambient lighting - responsive sizes */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-orange-200/30 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-amber-200/25 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 lg:w-[500px] h-80 sm:h-96 lg:h-[500px] bg-yellow-200/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes - hidden on mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/3 w-3 sm:w-4 h-3 sm:h-4 bg-orange-400/40 rotate-45 animate-spin-slow"></div>
        <div className="hidden sm:block absolute top-3/4 left-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-amber-400/40 rounded-full animate-bounce"></div>
        <div className="hidden sm:block absolute top-1/3 right-1/4 w-1 sm:w-2 h-1 sm:h-2 bg-yellow-500/60 rotate-45 animate-pulse"></div>
        
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 sm:opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex items-center justify-center h-full pt-16 sm:pt-20 lg:pt-8'>
          <div className='flex flex-col items-center text-center max-w-xs sm:max-w-2xl lg:max-w-4xl w-full'>
            <p className='text-sm sm:text-base lg:text-lg text-orange-600 mb-3 sm:mb-4 font-bold uppercase tracking-wider flex items-center'>
              <span className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-500 rotate-45 mr-2 sm:mr-3 animate-spin-slow"></span>
              Bonjour
              <span className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-500 rotate-45 ml-2 sm:ml-3 animate-spin-slow"></span>
            </p>
            
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-tight font-black tracking-tight text-gray-900 mb-4 sm:mb-6'>
              Web Developer & 
              <span className='text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text block mt-1 sm:mt-2'> 
                Data/IA
              </span> 
              <span className='block text-gray-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 sm:mt-4 font-light'>
                Enthusiast
              </span>
            </h1>

            
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto'>
              <a
                href={CV} 
                download
                className='w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 cursor-pointer group border-2 border-orange-600'
              >
                <svg 
                  className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:animate-bounce" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Télécharger le CV
              </a>

              <a
                href="#contact"
                className='w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-white border-2 sm:border-3 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 group'
              >
                <svg 
                  className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:animate-pulse" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                Me Contacter
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;