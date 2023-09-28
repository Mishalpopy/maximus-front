'use client'
import React from 'react'
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa";






const ProductShare = () => {
  return (
    <div>
        <AiOutlineShareAlt /> 
        <div className='hover-reviews'>
            <BiLogoFacebookSquare />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />

        </div>
    </div>
  )
}

export default ProductShare