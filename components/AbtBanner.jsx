import React from 'react'
import Marquee from 'react-fast-marquee'

const AbtBanner = () => {
    const abtBannerFooter = {
        background: 'url("https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/07/Cool-male-wearing-orange-beanie.jpg")',
        backgroundSize: 'cover',
        backgroundPosition : "center center",
        backgroundRepeat: 'no-repeat',
    }
  return (
    <div className="h-[70vh] flex bg-gray-100" style={abtBannerFooter}>
      <Marquee speed={130} direction="left">
        <p className='section_quote_loop'>FOR  ALL THE TRENDSETTERS & GO GETTERS.</p>
      </Marquee>
    </div>
  )
}

export default AbtBanner