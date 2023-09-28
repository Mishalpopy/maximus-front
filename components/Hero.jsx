'use client'
import React from 'react';
import HeroSlider, { Slide } from 'hero-slider';

const BasicSlider = () => {
  const bogliasco = 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/06/Skater-kid-wearing-purple-shirt-and-bucket-hat-1.jpg';
  const giauPass = 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/06/Skater-kid-wearing-purple-shirt-and-bucket-hat-1.jpg';
  const videoSource = 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/06/skater-park.mp4';

  return (
    <HeroSlider
      slidingAnimation="fade"
      orientation="horizontal"
      initialSlide={1}
      style={{
        backgroundColor: '#000', // Background color for the HeroSlider
      }}
    >
      <Slide
        background={{
          backgroundImage: bogliasco,
        }}
      />
      <Slide
        background={{
          backgroundImage: giauPass,
        }}
      />
      <div
        className="video-slide" // Add your custom CSS class for the video slide
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </HeroSlider>
  );
};

export default BasicSlider;
