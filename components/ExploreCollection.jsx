"use client"
// ProductList.js
import { BeakerIcon } from '@heroicons/react/24/solid'
import ButtonBlack from './blackBtn';

const ProductList = () => {
  const exploreCollectionImgBanner = {
    background: 'url("https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/06/MicrosoftTeams-image-19.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
  };
  const products = [
    {
      id: 1,
      name: 'SM SHIRT',
      href: '#',
      price: '50 AED',
      availability: 'Clothing',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Saint-maximus-collection-tee.jpg',
      imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    },
    {
      id: 2,
      name: 'GYM SET',
      href: '#',
      price: '140 AED',
      availability: 'Washed Black',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Saint-maximus-collection-set.jpg',
      imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    },
    {
      id: 3,
      name: 'TOTE BAG',
      href: '#',
      price: '220 AED',
      availability: 'Blue',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/01/Saint-maximus-collection-tote.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
   
  ]
  
  return (
    <div className='exploreCollectionSec pb-12 lg:pb-16 bg-white'>
            <div className='min-h-screen flex bg-gray-100 bg-white'>
            <div className='w-1/2 flex bg-white' style={exploreCollectionImgBanner}>

            </div>
            <div className="w-1/2  border-gray-900 bg-[url('https://abdulk30.sg-host.com/maximus/wp-content/uploads/2023/06/Saint-maximus-logo-watermark.png')] flex px-20 lg:px-9 border border-gray-200/25  " >
      <div className='flex flex-col justify-around '>
      <div className='section_subHeading_start flex flex-col justify-between'>
      <p className='section_subHeading text-sm mb-2'>Explore Our</p>
      <h2 className='section_heading text-sm-xs mt-2'>SAINT MAXIMUS <br></br>COLLECTION</h2>
      <p className=' text-sm-desc mt-2 mb-9'>Check outer exclusive line Saint Maximus.</p>
      <ButtonBlack  />
      </div>
    
      <div className="bg-white">
      <div className="mx-auto max-w-9xl overflow-hidden">
        <div className="grid grid-cols-9 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className=" text-sm">
              <div className="aspect-w-20 aspect-h-20 w-full overflow-hidden  bg-gray-100 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-start"
                />
              </div>
              <h3 className="mt-4 text-proHeading text-gray-900">{product.name}</h3>
              <p className="text-proCate ">{product.availability}</p>
              <div className='flex justify-between z-50'>
              <p className="mt-2 text-proPrice">{product.price}</p>
         
              <svg xmlns="http://www.w3.org/2000/svg" className='hover:bg-gray-950 w-8 h-8 hover:text-white py-1.5 ease-in duration-200 rounded-full z-index-50' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

 
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
      </div>
    </div>
            </div>
    </div>
  );
};

export default ProductList;
