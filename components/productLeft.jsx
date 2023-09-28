"use client"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';


const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Bags', href: '#' },
  { name: 'Clothes', href: '#' },
  { name: 'Footwear', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'SIZE',
    options: [
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: true },
      { value: 'xl', label: 'XL', checked: false },
      { value: 'xs', label: 'XS', checked: false },
      { value: 'xxl', label: 'XXL', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Brands',
    options: [
      { value: 'nike', label: 'Nike', checked: false },
      { value: 'rand', label: 'Rang', checked: false },

    ],
  },
  {
    id: 'categoryGender',
    name: 'Category ',
    options: [
      { value: 'bags', label: 'Bags', checked: false },
      { value: 'clothes', label: 'Clothes', checked: false },
      { value: 'footwear', label: 'Footwear', checked: false },
      { value: 'sport', label: 'Sport', checked: false },
      { value: 'workout', label: 'Workout', checked: false },



    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

const products = [
    {
      id: 1,
      name: 'BELT GREY BAG',
      price: '50.00 AED',
      rating: 5,
      reviewCount: 'Bags | Sport',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
            imageSrc3: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageSrc2: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageSrc4: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageAlt: 'TODO',
      href: '#',
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
    },
    {
      id: 3,
      name: 'BLACK SHOES NIKE',
      price: '15 AED',
      rating: 5,
      reviewCount: 'Clothes | Footwear',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-19.jpg',
            imageSrc3: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageSrc2: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageSrc4: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageAlt: 'TODO',
      href: '#',
    },
    {
      id: 4,
      name: 'RANG',
      price: '15 AED',
      rating: 4,
      reviewCount: 'Clothes | Footwear',
      imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-1.jpg',
            imageSrc3: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageSrc2: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageSrc4: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
      imageAlt: 'TODO',
      href: '#',
    },
    {
        id: 5,
        name: 'BELT GREY BAG',
        price: '50.00 AED',
        rating: 5,
        reviewCount: 'Bags | Sport',
        imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-sidebar-23.jpg',
        imageAlt: 'TODO',
        href: '#',
      },
      {
        id: 6,
        name: 'GREY ADIDAS',
        price: '45.00 AED',
        rating: 5,
        reviewCount: 'Clothes | Footwear',
        imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-13.jpg',
        imageAlt: 'TODO',
        href: '#',
      },
      {
        id: 7,
        name: 'BLACK SHOES NIKE',
        price: '15 AED',
        rating: 5,
        reviewCount: 'Clothes | Footwear',
        imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-19.jpg',
        imageAlt: 'TODO',
        href: '#',
      },
      {
        id: 8,
        name: 'RANG',
        price: '15 AED' ,
        rating: 4,
        reviewCount: 'Clothes | Footwear',
        imageSrc: 'https://abdulk30.sg-host.com/maximus/wp-content/uploads/2022/12/shop-list-filter-1.jpg',
        imageAlt: 'TODO',
        href: '#',
      },
    // More products...
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductLeft() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-proHeading text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3  text-filterProduct">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
  <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
    {({ open }) => (
      <>
        <h3 className="-mx-2 -my-3 flow-root">
          <Disclosure.Button className="flex w-full text-filterProduct items-center justify-between bg-white px-2 py-3  ">
            <span className="text-filterProduct">{section.name}</span>
            <span className="ml-6 flex items-center">
              {open ? (
                <MinusIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </span>
          </Disclosure.Button>
        </h3>
        <Disclosure.Panel className="pt-6">
          <div className="space-y-6">
            {section.options.map((option, optionIdx) => (
              <div key={option.value} className="flex items-center">
                <div
                  id={`filter-mobile-${section.id}-${optionIdx}`}
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: option.color }}
                ></div>
                <label
                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                  className="ml-3 min-w-0 flex-1 text-filterProduct"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
))}

                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between">
            <h1 className="text-showingPro tracking-tight ">SHOWING 1-6 OF 8 RESULTS</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-Sort items-center   text-Sort hover:text-gray-900">
                  DEFAULT SORTING
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-8 flex-shrink-0 text-black "
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0  mt-2 w-40 origin-top-right rounded-none border-b-gray-500 border  bg-white shadow-2xl z-50 ring-1 ring-black ring-opacity-5 focus:outline-none ">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-base'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

       
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-filterProduct  text-gray-500">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
    {({ open }) => (
      <>
        <h3 className="-my-3 flow-root">
          <Disclosure.Button className="flex w-full items-center justify-between uppercase bg-white py-3 text-filterProduct  text-gray-500 hover:text-gray-500">
            <span className="text-gray-900">{section.name}</span>
            <span className="ml-6 flex items-center">
              {open ? (
                <MinusIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </span>
          </Disclosure.Button>
        </h3>
        <Disclosure.Panel className="pt-6">
          <div className="space-y-4">
            {section.options.map((option, optionIdx) => (
              <div key={option.value} className="flex items-center">
                <div
                  id={`filter-${section.id}-${optionIdx}`}
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: option.color }}
                ></div>
                <label
                  htmlFor={`filter-${section.id}-${optionIdx}`}
                  className="ml-3 text-filterProductSub  text-gray-500"
                >
                  {option.label}
                </label>
             
              </div>
            ))}
  
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
))}

              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 w-full  flex">
              <div className="bg-white">
      <div className=" justify-end flex w-full   overflow-hidden  ">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-3 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative border-r border-b border-t border-gray-200 sm:p-6">
              <div className="aspect-w-100  aspect-h-100 overflow-hidden rounded-lg bg-gray-200 ">
              <div className=" rounded-lg bg-white   bg-gray-200 flex justify-end items-center ">
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
                          <AiOutlineArrowRight onClick={onClickHandler} className="custom-carousel-arrow custom-carousel-arrow-right   z-50" />
                        )
                      }
                    >
              <div className='lg-p-6 z-30 hover:opacity-75'>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=" object-cover"
                />
                </div>
                <div>
                <img
                  src={product.imageSrc2}
                 
                  className=" object-cover"
                />
                </div>
                <div>
                <img
                  src={product.imageSrc3}
                 
                  className=" object-cover"
                />
                </div>
                <div>
                <img
                  src={product.imageSrc4}
                 
                  className=" object-cover"
                />
                </div>
                
   
                </Carousel>
              </div>
              </div>
              <div className="pt-10 pb-4 text-left">
                <h2 className="text-text-proHeading  text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h2>
                <div className="mt-3 flex flex-col items-left">
           
      
                  <p className="mt-1 text-proCate text-gray-500 ">{product.reviewCount} </p>
                </div>
                <p className="mt-4 text-proPrice  text-lg text-gray-900">{product.price}</p>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}