import React from 'react';
import { contact } from '../data';

const Contact = () => {
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title'>Contactez moi</h2>
          <p className='subtitle text-center'>
            sq;fbkdfgbjksngngsù
            skjfdbjgsbgljhgslg
          </p>
        </div>
        <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
          <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sn w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1'>{subtitle}</p>
                    <p className='text-accent'>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form className='space-y-8 w-full max-w-[780px]'>
            <div className='flex gap-8'>
            <input className='input' type='text'
            placeholder='Votre nom'></input>
            <input className='input' type='text' 
            placeholder='Votre email'></input>
            </div>
            <input type='text' className='input'
            placeholder='Description'></input>
            <textarea className='textarea' placeholder='Votre message'></textarea>
            <button className='btn btn-lg bg-accent hover:bg-accent-hover'>
                Envoyez un message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;