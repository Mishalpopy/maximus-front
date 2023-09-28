import React from 'react';
import { AiTwotoneShopping } from "react-icons/ai";

const addButtonBlack = ({  onClick }) => {
  return (
<button className='flex w-1/3 lg:w-2/5 mt-9 rounded-none border-black border border-solid ease-in duration-300 bg-gray-950 pt-[3px] pr-[35px] lg:pr-[15px] pl-[35px] lg:pl-[15px] pb-[3px] justify-center text-baseBtn text-center  text-white hover:bg-slate-50 hover:text-black' onClick={onClick}>

     <p>READ MORE <AiTwotoneShopping color='white'/> </p>
    </button>
  );
};



const addButtonBlackDesc = ({  onClick }) => {
  return (
<button className='flex w-1/3 lg:w-2/5 mt-9 rounded-none border-black border border-solid ease-in duration-300 bg-gray-950 pt-[3px] pr-[35px] lg:pr-[15px] pl-[35px] lg:pl-[15px] pb-[3px] justify-center text-baseBtn text-center  text-white hover:bg-slate-50 hover:text-black' onClick={onClick}>

     <p>READ MORE <AiTwotoneShopping color='white'/> </p>
    </button>
  );
};

export default addButtonBlackDesc; addButtonBlack;
