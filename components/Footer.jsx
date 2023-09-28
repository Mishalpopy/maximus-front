
'use client'
import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { FaTruckFast, FaFacebook, FaInstagram, FaTiktok, FaSnapchat } from "react-icons/fa6";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";

const SITEMAP = [
  {
    title: "QUICKLINKS",
    links: ['Privacy Policy', 'Size Guide', 'Track Order', 'Terms & Conditions'],
    colClasses: "col-start-1 col-end-3",
  },
  {
    title: "HELP",
    links: ['Faqs', 'Shipping & Delivery', 'Returns & Exchange', 'Customer Service'],
    colClasses: "col-start-3 col-end-5",
  },
  {
    title: "SHOP",
    links: ['Men', 'Newsletter', 'Free products', 'Affiliate program'],
    colClasses: "col-start-5 col-end-7",
  },
  {
    title: "MORE",
    links: ['About us', 'News', 'Contact', 'Careers'],
    colClasses: "col-start-7 col-end-9",
  },
  {
    title: "NEWSLETTER",
    colClasses: "col-start-9 col-end-12 footer-input",
    input: {
      placeholder: "Your email",
    },
    button: {
      text: "Subscribe",
    },
  },
];

const currentYear = new Date().getFullYear();

export function FooterWithSitemap() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="relative w-full bg-black text-white py-6rem lg:px-20 md:px-20">
      <div className="mx-auto w-full max-w-7xl bg-black text-white">
        <div className="flex grid grid-cols-9 pt-[70px] pb-[27px] justify-around gap-0 w-full flex-col items-center border-b border-white-900 py-4 md:flex-row">
          {/* Your logo */}
          <div className="col-start-1 col-end-3">
            <Typography variant="small" className="mb-3 text-center font-normal text-blue-gray-900 md:mb-0">
              <img src="logo_white.svg" width={100} alt="Logo" />
            </Typography>
          </div>

          <div className="flex justify-between col-start-3   col-end-12 ">
            <div className="flex gap-3 items-center">
              <TbTruckDelivery size={60} />
              <p className="font-bold text-base">Free Shipping for<br />orders over 150 AED</p>
            </div>
            <div>
              <div className="flex gap-3 items-center ">
                <HiOutlineClipboardCheck size={60} />
                <p className="font-bold text-base">Hassle free &<br />Easy Returns</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center ">
                <FaTruckFast size={60} />
                <p className="font-bold text-base">Shop via our App & Stay<br />up-to-date with Maximus</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid w-full   py-[46px]   grid-cols-8">
          {SITEMAP.map(({ title, links, input, button, colClasses }, key) => (
            <div key={key} className={`w-full ${colClasses}`}>
              <Typography variant="large" color="white" className="mb-4 font-bold text-white text-1xl">
                {title}
              </Typography>

              {title === "NEWSLETTER" ? (
                <div>
                  <p className="text-white mb-2">
                    Sign up today and don't miss out on our latest updates!
                  </p>
                  <form onSubmit={handleSubmit} className="flex gap-4">
                    <input
                      type="email"
                      placeholder={input.placeholder}
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full p-2 rounded-md "
                      required
                      style={{

                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        backgroundImage: 'none',
                        backgroundOrigin: 'padding-box',
                        borderBottomColor: '#FFFFFF',
                        borderBottomLeftRadius: '0px',
                        borderBottomRightRadius: '0px',
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '1.6px',
                        borderLeftColor: 'rgb(217, 217, 217)',
                        borderLeftStyle: 'solid',
                        borderLeftWidth: '0px',
                        borderRightColor: 'rgb(217, 217, 217)',
                        borderRightStyle: 'solid',
                        borderRightWidth: '0px',
                        borderTopColor: 'rgb(217, 217, 217)',
                        borderTopLeftRadius: '0px',
                        borderTopRightRadius: '0px',
                        borderTopStyle: 'solid',
                        borderTopWidth: '0px',
                        boxSizing: 'border-box',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        direction: 'ltr',
                        display: 'inline-block',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '21.6px',
                        marginBottom: '0px',
                        marginLeft: '0px',
                        marginRight: '0px',
                        marginTop: '0px',
                        outlineColor: 'rgb(255, 255, 255)',
                        outlineStyle: 'none',
                        outlineWidth: '0px',
                        overflowX: 'visible',
                        overflowY: 'visible',
                        paddingBottom: '12px',
                        paddingLeft: '0px',
                        paddingRight: '20px',
                        paddingTop: '12px',
                        position: 'relative',
                        textTransform: 'uppercase',
                        transitionDelay: '0s, 0s, 0s',
                        transitionDuration: '0.3s, 0.3s, 0.3s',
                        transitionProperty: 'color, background-color, border-color',
                        transitionTimingFunction: 'ease-out, ease-out, ease-out',
                        verticalAlign: 'top',
                        width: '320px',

                      }}
                    />
                  </form>
                </div>
              ) : (
                <ul className="space-y-1 ">
                  {links &&
                    links.map((link, key) => (
                      <Typography key={key} as="li" color="blue-gray" className="">
                        <a href="#" className="inline-block py-1 pr-2 transition-transform text-base font-medium footer-links" id="footer-links">
                          {link}
                        </a>
                      </Typography>
                    ))}
                </ul>
              )}
            </div>
          ))}
          <div className="flex space-x-4 pt-[32px] ">
            <div><FaFacebook size={17} /></div>
            <div><FaInstagram value={{ style: { verticalAlign: 'middle' } }} /></div>
            <div><FaTiktok /></div>
            <div><FaSnapchat /></div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-white-900 py-4 md:flex-row md:justify-between">
          <Typography variant="small" className="mb-4 text-center font-1xl text-blue-gray-900 md:mb-0 text-2xl">
            &copy; {currentYear} <a href="#">Maximus</a>. All Right Reserved
          </Typography>

          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* Your social media icon */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Your social media icon SVG path */}
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterWithSitemap;
