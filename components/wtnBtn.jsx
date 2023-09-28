import React from 'react';

const ButtonWhite = ({  onClick }) => {
  return (
<button className='flex rounded-none border-black border border-solid ease-in duration-300 bg-slate-50 pt-[3px] pr-[35px] pl-[35px] pb-[3px] justify-center text-baseBtnWht text-center  text-black hover:bg-gray-950 hover:text-white' onClick={onClick}>

     <p>READ MORE</p>
    </button>
  );
};

export default ButtonWhite;