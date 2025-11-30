"use client";

import { FiSearch } from "react-icons/fi";

const NavInput = () => {
  return (
    <div className="w-full max-w-md flex-1">
      <div className="relative bg-gray-100 rounded-md">
        {/* Input: fixed height, extra right padding so placeholder won't reach the icon */}
        <input
          type="text"
          placeholder={`What are you looking for?`}
          className="w-[250px] h-11 px-4 pr-12 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm leading-none rounded-md"
        />

        {/* Icon: absolutely positioned so it doesn't overlap input content */}
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full"
          aria-label="Search"
        >
          <FiSearch className="text-black text-lg" />
        </button>
      </div>
    </div>
  );
};

export default NavInput;
