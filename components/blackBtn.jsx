import React from 'react';

const ButtonBlack = ({  onClick }) => {
  return (
<button className='flex w-1/3 lg:w-2/5 mt-9 rounded-none border-black border border-solid ease-in duration-300 bg-gray-950 pt-[3px] pr-[35px] lg:pr-[15px] pl-[35px] lg:pl-[15px] pb-[3px] justify-center text-baseBtn text-center  text-white hover:bg-slate-50 hover:text-black' onClick={onClick}>

     <p>READ MORE</p>
    </button>
  );
};



const ButtonBlackDesc = ({  onClick }) => {
  return (
<button className='flex w-1/3 lg:w-2/5 mt-9 rounded-none border-black border border-solid ease-in duration-300 bg-gray-950 pt-[3px] pr-[35px] lg:pr-[15px] pl-[35px] lg:pl-[15px] pb-[3px] justify-center text-baseBtn text-center  text-white hover:bg-slate-50 hover:text-black' onClick={onClick}>

     <p>READ MORE</p>
    </button>
  );
};

export default ButtonBlackDesc; ButtonBlack;
