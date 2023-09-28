import React from 'react'

const BannerVideo = () => {
 
    const exploreCollectionImgBanner = {
      background: 'url("https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/06/MicrosoftTeams-image-19.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'top left',
      backgroundRepeat: 'no-repeat',
    };
  return (
    <div className='bannerVideo'>
    <div className=' flex bg-gray-100'>
    <div className='w-full flex items-center justify-center' >
    <video autoPlay loop muted className="slide-video">
              <source src="/001.mp4" type="video/mp4" />
            </video>
    </div>
   
    </div>
</div>
  )
}

export default BannerVideo