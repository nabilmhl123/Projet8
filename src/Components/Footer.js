import React from 'react';
import { social } from '../data';

const Footer = () => {
  return (
    <footer className='bg-amber-50 py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-4'> {/* Added space-x-4 for spacing between social icons */}
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            {/* <img src={LOGO} alt=''></img> */}
          </div>
          <p>&copy; 2024 Nabil Mahel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
