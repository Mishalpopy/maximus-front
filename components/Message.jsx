import React from 'react';
import Marquee from 'react-fast-marquee';

const Message = () => {
  return (
    <div className='relative w-full flex justify-center items-center  flex-col  py-24 lg:py-6 shopfor'>
      <Marquee speed={130} direction="left" className='py-6'>
        <p className='section_quote_loop'>FOR  ALL THE TRENDSETTERS & GO GETTERS.</p>
      </Marquee>
      <div className='container flex justify-center text-center flex-col '>
        <div className='container mx-auto w-full max-w-7xl px-9 '  >
          <div className='section_quote_desc pb-6'>
            Our brand trumpets your comfort in a way that suits your liking. We envision to prioritize your likes and dislikes so as to weave the stories of your happiness using the wefts and warps of comfort and personalized fashion. You own your style through our masterpieces, and we provide you with our signature, i.e. fashionable comfort.
          </div>
          <div className='section_quote_sign'>
            Brian Maximus
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
