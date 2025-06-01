import React from 'react';

import hero from '../assets/images/hero.png';

const Hero = () => {
  const social_media = [
  "logo-instagram",
  "logo-facebook",
  "logo-linkedin",
  "logo-twitter",
  ];
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center py-100">
      
      <div className="flex flex-1 items-center justify-center">
        <img src={hero} className="md:w-11/12 h-full object-cover"/>
      </div>
      
      <div className='flex-1'>
        <div className="md:text-left text-center">

            <h1 className="md:text-5xl text-2xl font-bold text-white md:leading-normal leading-10">
              <span className='text-cyan-600 md:text-6xl'>Hello!</span>
              <br />
              My Name is John Alex
            </h1>

            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 text-gray-600 font-bold">
              Fullstack Developer
            </h4>

            <button className="btn-primary mt-8">Contact Me</button>

            <div className="mt-8 text-3xl flex items-center justify-center md:justify-start gap-5">
              {social_media?.map((icon) => {
                return (
                  <div key={icon} className='text-gray-600 hover:text-white cursor-pointer'>
                    <ion-icon name={icon}></ion-icon>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  )
}
export default Hero;
