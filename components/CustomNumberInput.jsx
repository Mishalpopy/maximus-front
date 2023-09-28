// CustomNumberInput.js

import React, { useState } from 'react';

const CustomNumberInput = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="custom-number-input h-10 w-32">

      <div className="flex flex-row h-10 w-full rounded-none relative bg-transparent mt-1">
        <button
          onClick={decrement}
          className="bg-white border-2 text-gray-950 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-white border-2 font-semibold text-md hover:text-white focus:text-black md:text-base cursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          value={count}
          readOnly
        />
        <button
          onClick={increment}
          className="bg-white border border-l text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default CustomNumberInput;
