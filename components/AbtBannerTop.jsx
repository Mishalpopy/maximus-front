import React from 'react'

const AbtBannerTop = () => {


    const bannerImageTop = {
        background: 'url("https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/07/Girl-wearing-glasses-sitting-on-concrete-1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: 'top left',
        backgroundRepeat: "no-repeat",
    }

  return (
    <div className='bannerTopAbt'>
    <div className="h-5/6  flex bg-gray-100">
    <div className="w-full p-[300px] flex items-center justify-center" style={bannerImageTop}>
      <div className='flex flex-col items-center justify center '>
      <h2 className='section_heading_shopFor text-sm-xs'>ABOUT US</h2>
     
       
      <button className='btnWhite'>
        Read More
      </button>
      </div>
    </div>

  </div>

</div>
    )
}

export default AbtBannerTop