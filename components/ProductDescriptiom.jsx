"use client"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import ButtonBlack from './blackBtn'
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsPinterest } from "react-icons/bs";


import ButtonBlackDesc from './blackBtn'
import { easeInOut } from 'framer-motion'




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
  
  
  
  // More products...
]

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Flats', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Heels', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
              { name: 'Accessories', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Tops', href: '#' },
              { name: 'Bottoms', href: '#' },
              { name: 'Swimwear', href: '#' },
              { name: 'Underwear', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
          imageAlt:
            'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Hoodies', href: '#' },
              { name: 'Swimsuits', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const product = {
  name: 'WHITE SPORT SHIRT',
  price: '140 AED',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-1.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 2,
      name: 'Angled view',
      src: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-single-3-600x600.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vulputate massa. Maecenas dui augue, dictum dictum varius nec, suscipit eu dolor. Duis tellus.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}
const relatedProducts = [
  {
    id: 1,
    name: 'RANG',
    color: 'GREY KANGAROO JACKET',
    href: '#',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-17-600x600.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 2,
    name: 'RANG',
    color: 'GREY KANGAROO JACKET',
    href: '#',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-17-600x600.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 3,
    name: 'RANG',
    color: 'GREY KANGAROO JACKET',
    href: '#',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-17-600x600.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 4,
    name: 'RANG',
    color: 'GREY KANGAROO JACKET',
    href: '#',
    imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-17-600x600.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  // More products...
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}

const license = {
  href: '#',
  summary:
    'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
  content: `
    <h4>WEIGHT</h4>
    
    <p>0.4 kg</p>
    

  `,
}

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
}
const faqs = [
  {
     answer:
      'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vulputate massa in et. Maecenas dui augue, dictum dictum varius nec, suscipit eu dolor. Duis tellus ligula, porta et mauris sit amet, condimentum sagittis erat. Duis eget nisi velit nunc. Curabitur dignissim justo tortor. Consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Donec ut velit mi vitae',
  },
 
  // More FAQs...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function  ProductDesc() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      


      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none  focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only"> {image.name} </span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <img src={image.src} alt="" className="h-full w-full object-cover object-center" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-gray-900' : 'ring-transparent',
                              'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-w-1 aspect-h-1 w-full border-t border-l border-r border-b">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-9 sm:mt-16 sm:px-0 lg:mt-0 bottom-t">
              <h1 className="section_heading text-sm-xs tracking-tight text-gray-900">{product.name}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-productDesRate tracking-tight text-[#ed1a38]">{product.price}</p>
              </div>

              {/* Reviews */}


              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="space-y-6 text-productDes text-gray-700 "
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form className="mt-1">
                {/* Colors */}
                <div className='container'> 
                

          
                  <div className='flex w-[60%] justify-between'>
                  <ButtonBlackDesc />
                  <ButtonBlackDesc />

       

                  </div>
         
        <div className='flex  items-center container reviewShare  mt-6'>
        <div className='reviewIcon'>
        <AiOutlineShareAlt size={25} className='reviewIcon2'/> 
        </div>
        <div className='reviewList ml-4  justify-between  w-[20%] flex-row flex '>
            <BiLogoFacebookSquare  size={15} Transition={easeInOut}/>
            <FaInstagram size={15} Transition={easeInOut}/>
            <LiaLinkedinIn size={15} Transition={easeInOut} />
            <LiaLinkedinIn size={15} Transition={easeInOut} />
            <BsPinterest size={15} Transition={easeInOut} />
            
        </div>
    </div>
         
            
                </div>

           
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

              </section>
            </div>
          </div>





          <div className="mx-auto mt-16 w-full max-w-4xl lg:col-span-4 flex justify-between lg:mt-0 lg:max-w-none pt-9 border-t-">
            <Tab.Group as="div">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-40">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-b-[#ed1a38] text-DescriptionTab'
                          : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap border-b-2 py-6 text-DescriptionTab '
                      )
                    }
                  >
                  Description
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                        ? 'border-b-[#ed1a38] text-DescriptionTab'
                          : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap border-b-2 py-6 text-DescriptionTab'
                      )
                    }
                  >
                    FAQ
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-b-[#ed1a38] text-DescriptionTab'
                          : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap border-b-2 py-6 text-DescriptionTab'
                      )
                    }
                  >
                    License
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
              <Tab.Panel className="text-sm text-gray-950">
                  <h3 className="sr-only">Frequently Asked Questions</h3>

                  <dl>
                    {faqs.map((faq) => (
                      <Fragment key={faq.question}>
                        <dt className="mt-10 ">{faq.question}</dt>
                        <dd className="prose prose-sm mt-2 max-w-none">
                          <p className='text-DescriptionPara'>{faq.answer}</p>
                        </dd>
                      </Fragment>
                    ))}
                  </dl>
                </Tab.Panel>
                <Tab.Panel className="-mb-10">
                  <h3 className="sr-only">Customer Reviews</h3>

                  {reviews.featured.map((review, reviewIdx) => (
                    <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
                      <div className="flex-none py-10">
                        <img src={review.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                      </div>
                      <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'py-10')}>
                        <h3 className="font-medium text-gray-900">{review.author}</h3>
                        <p>
                          <time dateTime={review.datetime}>{review.date}</time>
                        </p>

                        <div className="mt-4 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">{review.rating} out of 5 stars</p>

                        <div
                          className="prose prose-sm mt-4 max-w-none text-gray-500"
                          dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                      </div>
                    </div>
                  ))}
                </Tab.Panel>

          

                <Tab.Panel className="pt-10">
                  <h3 className="sr-only">License</h3>

                  <div
                    className="prose prose-sm max-w-none text-gray-500"
                    dangerouslySetInnerHTML={{ __html: license.content }}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className='pb-3 justify-center py-16'>

        <h2 className='section_heading text-sm-xs pb-3'>FEATURED PRODUCTS</h2>


                                    
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



          <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
            <h2 id="related-heading" className="text-xl font-bold text-gray-900">
              Customers also bought
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product) => (
                <div key={product.id}>
                  <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden border-t border-b border-l border-r">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover bottom-10 object-center"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-relatedHeading text-gray-900">{product.name}</h3>
           
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="mt-1 text-sm text-gray-950">{product.reviewCount}</p>

                      <p className="relative text-lg font-semibold text-white">{product.price}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={product.href}
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      Add to bag<span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>


    </div>
  )
}
