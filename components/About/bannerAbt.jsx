"use client"
import React from 'react'
import { useState } from 'react';
import Marquee from "react-fast-marquee";
const abtUs = () => {

  const backgroundImageStyle = {
  background: 'url("https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/06/MicrosoftTeams-image-600x600.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'top left',
  backgroundRepeat: 'no-repeat',
};
const backgroundImageStyle2 = {
  background: 'url("https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/06/MicrosoftTeams-image-2-768x768.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'top left',
  backgroundRepeat: 'no-repeat',
};
  return (
    <div className='ShopForGen'>
    <div className="min-h-screen flex bg-gray-100">
    <div className="w-1/2 flex items-center justify-center" style={backgroundImageStyle}>
      <div className='flex flex-col items-center justify center '>
      <h2 className='section_heading_shopFor'>MEN</h2>
     
       
      <button className='btnWhite'>
        Read More
      </button>
      </div>
    </div>
    <div className="w-1/2 flex items-center justify-center" style={backgroundImageStyle2}>
      <div className='flex flex-col items-center justify center'>
      <h2 className='section_heading_shopFor'>WOMEN</h2>

      <button className='btnWhite'>
        Read More
      </button>
      </div>
    </div>
  </div>

</div>

  )
}

export default abtUs