import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { contact } from '../data';

const Contact = () => {
  const form = useRef();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_q2w2msn', 'template_docakyq', form.current, 'Ra9aXDRV9LmYfpek5')
      .then((result) => {
        console.log(result.text);
        alert("Message envoyé avec succès!");
        // Réinitialiser les champs du formulaire
        setUserName('');
        setUserEmail('');
        setSubject('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
        alert("Une erreur est survenue, veuillez réessayer.");
      });
  };

  return (
    <section className='section bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4'>
            CONTACTEZ <span className="text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text">MOI</span>
          </h2>
          <p className='text-lg text-gray-600 mb-8 text-center'>
            Pour toute demande spécifique.
          </p>
        </div>
        <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
          <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-orange-600 rounded-xl w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl bg-gradient-to-br from-orange-100 to-amber-100'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1 text-gray-800'>{title}</h4>
                    <p className='mb-1 text-gray-600'>{subtitle}</p>
                    <p className='text-orange-600'>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form ref={form} onSubmit={sendEmail} className='space-y-8 w-full max-w-[780px]'>
            <div className='flex gap-8'>
              <input 
                className='input border-2 border-orange-200 focus:border-orange-400 rounded-xl px-4 py-3 w-full outline-none transition-colors duration-300 bg-white' 
                type='text' 
                name='user_name' 
                placeholder='Votre nom' 
                required 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input 
                className='input border-2 border-orange-200 focus:border-orange-400 rounded-xl px-4 py-3 w-full outline-none transition-colors duration-300 bg-white' 
                type='email' 
                name='user_email' 
                placeholder='Votre email' 
                required 
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <input 
              type='text' 
              className='input border-2 border-orange-200 focus:border-orange-400 rounded-xl px-4 py-3 w-full outline-none transition-colors duration-300 bg-white' 
              name='subject' 
              placeholder='Description' 
              required 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea 
              className='textarea border-2 border-orange-200 focus:border-orange-400 rounded-xl px-4 py-3 w-full h-32 outline-none resize-none transition-colors duration-300 bg-white' 
              name='message' 
              placeholder='Votre message' 
              required 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button 
              type='submit' 
              className='btn btn-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              Envoyez un message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;