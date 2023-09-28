import React from 'react'

const AboutUs = () => {

  const backgroundImageStyle = {
    background: 'url("https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/07/Young-adults-sitting-in-group.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
  };
  const backgroundImageStyle2 = {
    background: 'url("https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/07/Young-male-wearing-grey-shirt.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
  };
    return (
      <div className='abtBanner justify-center bg-gray-100  items-center flex flex-col py-24'>
      <div className="h-[70vh] flex bg-gray-100 container ">
      <div className="w-1/2 flex items-center justify-center" >
      <div className='flex flex-col pr-16 pl-16 justify-center'>
        <p className='section_subHeading'>Explore Our</p>
        <h2 className='section_heading_abtUs text-black'>MAXIMUS</h2>
        <div className='section_abt_desc text-black'>
            Our brand trumpets your comfort in a way that suits your liking. We envision to prioritize your likes and dislikes so as to weave the stories of your happiness using the wefts and warps of comfort and personalized fashion. You own your style through our masterpieces, and we provide you with our signature, i.e. fashionable comfort.
          </div>

  
       
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center" style={backgroundImageStyle2}>
        <div className='flex flex-col items-center justify center'>
        
        </div>
      </div>
    </div>
    <div className="h-[70vh] flex bg-gray-100 container">
      <div className="w-1/2 flex items-center justify-center" style={backgroundImageStyle}>
        <div className='flex flex-col items-center justify center py-30 '>
        
        </div>
      </div>
      <div className="w-1/2 flex ">
        <div className='flex flex-col pr-20 pl-20 justify-center'>
        <p className='section_subHeading'>Explore Our</p>
        <h2 className='section_heading_abtUs text-black'>MAXIMUS</h2>
        <div className='section_abt_desc text-black'>
            Our brand trumpets your comfort in a way that suits your liking. We envision to prioritize your likes and dislikes so as to weave the stories of your happiness using the wefts and warps of comfort and personalized fashion. You own your style through our masterpieces, and we provide you with our signature, i.e. fashionable comfort.   Our brand trumpets your comfort in a way that suits your liking. We envision to prioritize your likes and dislikes so as to weave the stories of your happiness using the wefts and warps of comfort and personalized fashion. You own your style through our masterpieces, and we provide you with our signature, i.e. fashionable comfort.
          </div>

  
       
        </div>
      </div>
    </div>
  
  </div>
  
    )
}

export default AboutUs