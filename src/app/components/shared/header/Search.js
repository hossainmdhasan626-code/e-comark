import React from "react";

const Search = () => {
  return (
    <>
      <label
        className="
          input flex items-center gap-2 transition-all
          w-[200px] h-10 border-2 border-gray-50
          md:w-[500px] md:h-12 md:border-mainColor 
          md:focus-within:border-gray-50
        "
      >
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" className="grow" />
      </label>
    </>
  );
};

export default Search;
