  "use client"
  import React from 'react';
  import { Carousel } from 'react-responsive-carousel';
  import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
  import 'react-responsive-carousel/lib/styles/carousel.min.css';

  const products = [
    {
      id: 1,
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
    {
      id: 5,
      name: 'GREY ADIDAS',
      price: '45.00 AED',
      rating: 5,
      reviewCount: 'Clothes | Footwear',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-13.jpg',
      imageSrc2: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageSrc3: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageSrc4: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageAlt: 'TODO',
      href: '#',
      colClasses: "col-start-5 col-end-7 ",
    },
    {
      id: 6,
      name: 'BLACK SHOES NIKE',
      price: '15 AED',
      rating: 5,
      reviewCount: 'Clothes | Footwear',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-19.jpg',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageSrc2: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageSrc3: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageAlt: 'TODO',
      href: '#',
      colClasses: "col-start-7 col-end-9 ",
    },
    
    // More products...
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

    export default function Example() {
      return (
        <div className="bg-white py-12 lg:p-16 justify-center items-center flex flex-col">
          <div className="max-w-7xl container border-0 justify-center flex text-center items-center flex flex-col">
            <div className='pb-12 justify-center'>
              <p className='section_subHeading text-sm mt-3'>Explore Our</p>
              <h2 className='section_heading text-sm-xs mt-3'>BESTSELLERS</h2>
            </div>
            <div className="grid grid-cols-8 flex flex-col border-l border-t border-gray-200">
              {products.map((product) => (
                <div key={product.id} className={`${product.colClasses} flex flex-col justify-between py-6 border border-l border-b border-gray-200`}>
                  <div className="rounded-lg bg-white bg-gray-200 flex justify-center items-center">
                    <Carousel
                      showThumbs={false}
                      showIndicators={false}
                      showArrows={true}
                      renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                          <AiOutlineArrowLeft onClick={onClickHandler} className="custom-carousel-arrow custom-carousel-arrow-left text-black z-50"/>
                        )
                      }
                      renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                          <AiOutlineArrowRight onClick={onClickHandler} className="custom-carousel-arrow custom-carousel-arrow-right z-50" />
                        )
                      }
                    >
                      <div className='lg-p-22'>
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-[30vh] p-3 w-[50wh] object-cover"
                        />
                      </div>
                      <div>
                <img
                  src={product.imageSrc2}
                 
                  className="h-[30vh] p-3 w-[50wh] object-cover"
                />
                </div>
                <div>
                <img
                  src={product.imageSrc3}
                 
                  className="h-[30vh] p-3 w-[50wh] object-cover"
                />
                </div>
                    </Carousel>
                  </div>
                  <div className="text-left px-9">
                    <h3 className="text-proHeading text-gray-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <div className="flex flex-col items-left">
                      <p className="mt-3 text-gray-500 text-proCate">{product.reviewCount}</p>
                    </div>
                    <div className='flex justify-between z-20'>
                      <p className="mt-3 text-proPrice text-gray-900">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  