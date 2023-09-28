import React from 'react'




    const backgroundImageStyle2 = {
      background: 'url("https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/07/New-category.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'top left',
      backgroundRepeat: 'no-repeat',
    };

const ProductBanner = () => {
  return (
    <div className='justify-center items-center w-full flex'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 container'>
                  <div className='abtBanner justify-center items-center flex flex-col py-16'>
      <div className="h-[90%] flex bg-white border-gray-300 border container ">
      <div className="w-1/2 py-44 flex items-center justify-center" >
      <div className='flex flex-col pr-10 pl-20 justify-center'>
      
        <h2 className='section_heading_abtUs bannerHeading '>NEW</h2>
        <div className='bannerDesc '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.          </div>

  
       
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center" style={backgroundImageStyle2}>
        <div className='flex flex-col items-center justify center'>
        
        </div>
      </div>
    </div>

  
  </div>
        </div>
        </div>
  )
}

export default ProductBanner