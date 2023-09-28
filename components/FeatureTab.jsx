'use client'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Img } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
const products = [
  {
    id: 1,
    brand: 'Nike',
    name: 'BELT GREY BAG',
    price: '50.00 AED',
    rating: 5,
    reviewCount: 'Bags | Sport',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
    imageSrc2: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
    imageSrc3: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
    
    imageAlt: 'TODO',
    href: '#',
    colClasses: "col-start-1 col-end-3 ",
    
  },
  {
    id: 2,
    brand: 'Nike',
    name: 'GREY ADIDAS',
    price: '45.00 AED',
    rating: 5,
    reviewCount: 'Clothes | Footwear',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-13.jpg',
    imageSrc3: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
    imageSrc2: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
    imageSrc4: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
    imageAlt: 'TODO',
    href: '#',
    colClasses: "col-start-3 col-end-5 ",
  },
  {
    id: 3,
    name: 'BLACK SHOES NIKE',
    brand: 'Nike',
    price: '15 AED',
    rating: 5,
    reviewCount: 'Clothes | Footwear',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Sneaker.jpg',
    imageSrc3: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Sneaker.jpg',
    imageSrc2: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Sneaker.jpg',
    imageSrc4: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Sneaker.jpg',
    imageAlt: 'TODO',
    href: '#',
    colClasses: "col-start-5 col-end-9 ",
  
  },
  {
    id: 4,
    name: 'BELT GREY BAG',
    brand: 'Nike',
    price: '50.00 AED',
    rating: 5,
    reviewCount: 'Bags | Sport',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-42.jpg',
    imageSrc3: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-42.jpg',
    imageSrc2: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-42.jpg',
    imageSrc4: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-42.jpg',
    imageAlt: 'TODO',
    href: '#',
    colClasses: "col-start-1 col-end-5 ",
  },
  
  
  // More products...
]


const FeatureTab = () => {
  return (
    
    <div className='lg:p-16 bg-black py-33 lg:py-16 justify-center flex  text-center text-white  items-center flex flex-col'>
           <div className='pb-3 justify-center'>
          <p className='section_subHeading text-sm pb-3  text-white'>Explore Our</p>
        <h2 className='section_heading text-sm-xs pb-3'>FEATURED PRODUCTS</h2>
</div>

<Tabs defaultIndex={1} >
<div className='flex flex-col  grid grid-col-4 justify-evenly uppercase'>
<TabList className='max-w-6xl flex gap-9  text-tabHeading pb-9 uppercase'>
    <Tab className='uppercase active-tab' >Show All</Tab>
    <Tab className='uppercase'>Clothes</Tab>
    <Tab className='uppercase'>Running</Tab>
    <Tab className='uppercase'>Sport</Tab>

  </TabList>
  </div>
  <TabPanels>
    <TabPanel>
      <div className='max-w-7xl flex gap-9 flex-col   border-gray-200 overoverflow-hidden'>   
      {products.map((product) => (
            <div key={product.id}className={`${product} flex flex-col justify-between  py-6 border border-l border-b border-gray-200`}>
              <div className="rounded-lg bg-white   bg-gray-200 ">
              <Carousel showThumbs={false} showIndicators={false} showArrows={true}   className="custom-carousel ">
              <div className=''>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=" object-cover h-[30vh] w-[350px]"
                />
                </div>

   
                </Carousel>
              </div>
              <div className="text-left ">
                <h3 className="text-proHeading text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-left">
                  <p className="mt-1 text-gray-500 text-proCate">{product.reviewCount}</p>
                </div>
                <div className='flex justify-between z-20'>
                  <p className="mt-4 text-proPrice text-gray-900">{product.price}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className='hover:bg-gray-950 w-[40px] h-[40px] py-2 hover:text-white ease-in duration-200 rounded-full ' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
      </div>
    </TabPanel>
    <TabPanel>
    <div className='max-w-7xl grid grid-cols-4 gap-3 flex flex-col border-gray-200'>
         
         {products.map((product) => (
               <div key={product.id}className={`${product} flex flex-col justify-between   border-gray-200`}>
                 <div className=" rounded-none bg-white   bg-gray-200 flex justify-center items-center ">
                 <Carousel
  showThumbs={false}
  showIndicators={false}
  showArrows={true}
  className="custom-carousel"
  renderArrowPrev={(onClickHandler, hasPrev, label) =>
    hasPrev && (
      <AiOutlineArrowLeft
        onClick={onClickHandler}
        className="custom-carousel-arrow custom-carousel-arrow-left z-50"
      />
    )
  }
  renderArrowNext={(onClickHandler, hasNext, label) =>
    hasNext && (
      <AiOutlineArrowRight
        onClick={onClickHandler}
        className="custom-carousel-arrow custom-carousel-arrow-right z-50"
      />
    )
  }
>
         
                 <div className=''>
                   <img
                     src={product.imageSrc}
                     alt={product.imageAlt}
                     className="h-[50vh] md:h-[40vh] w-[40wh] object-contain"
                   />
          
                   </div>
                   <img
                  src={product.imageSrc2}
                 
                  className="h-[50vh] md:h-[40vh] w-[40wh] object-contain"
                />
                           <img
                  src={product.imageSrc3}
                 
                  className="h-[50vh] md:h-[40vh] w-[40wh] object-contain"
                />
                           <img
                  src={product.imageSrc}
                 
                  className="h-[50vh] md:h-[40vh] w-[40wh] object-contain"
                />

      
                   </Carousel>
                 </div>
                 <div className="text-left py-9 px-2">
                <h3 className="text-proHeading slate-50">
                  <a href={product.href}>
                  <p className="mb-3 text-slate-50 text-proBrand">{product.brand}</p>      
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                    
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-left">
                
                  <p className="mt-1 text-slate-50 text-proCate">{product.reviewCount}</p>
                </div>
                <div className='flex justify-between z-20 '>
                  <p className="mt-4 text-proPrice slate-50">{product.price}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className='hover:bg-gray-50 w-[40px] h-[40px] py-2 hover:text-white ease-in duration-200 rounded-full ' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
               </div>
             ))}
         </div>
    </TabPanel>
  </TabPanels>

</Tabs>
</div>
  )
}

export default FeatureTab
