"use client"
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ProductCarousel = ({ images }) => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
            src={image}
            alt={`Product Image ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

const ExploreProducts = () => {
  // Define the images for each product
  const product1Images = [
    'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Nike-sneakers-300x212.jpg',
    'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Nike-sneakers-300x212.jpg',
    'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Nike-sneakers-300x212.jpg',
    // Add more images for Product 1
  ];

  const product2Images = [
    'https://example.com/product2-image1.jpg',
    'https://example.com/product2-image2.jpg',
    // Add more images for Product 2
  ];

  return (
    <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Explore Our Products</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-16">
          {/* Product 1 */}
          <div className="relative flex flex-col overflow-hidden border">
            <ProductCarousel images={product1Images} />
            <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">AED 99.00</p>
                  <del className="text-xs text-gray-400"> AED 79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">NIKE</h3>
              </div>
         
          </div>

          {/* Product 2 */}
          <div className="relative flex flex-col overflow-hidden border">
            <ProductCarousel images={product1Images} />
            <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">AED 99.00</p>
                  <del className="text-xs text-gray-400"> AED 79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">NIKE</h3>
              </div>
         
          </div>
          <div className="relative flex flex-col overflow-hidden border">
            <ProductCarousel images={product1Images} />
            <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">AED 99.00</p>
                  <del className="text-xs text-gray-400"> AED 79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">NIKE</h3>
              </div>
         
          </div>

          {/* Add more product items in a similar format */}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-16">
          {/* Product 1 */}
          <div className="relative flex flex-col overflow-hidden border">
            <ProductCarousel images={product1Images} />
            <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">AED 99.00</p>
                  <del className="text-xs text-gray-400"> AED 79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">NIKE</h3>
              </div>
         
          </div>

          {/* Product 2 */}
          <div className="relative flex flex-col overflow-hidden border">
            <ProductCarousel images={product1Images} />
            <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">AED 99.00</p>
                  <del className="text-xs text-gray-400"> AED 79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">NIKE</h3>
              </div>
         
          </div>
          <div className="relative flex flex-col overflow-hidden border">
            <ProductCarousel images={product1Images} />
            <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">AED 99.00</p>
                  <del className="text-xs text-gray-400"> AED 79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">NIKE</h3>
              </div>
         
          </div>

          {/* Add more product items in a similar format */}
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;
