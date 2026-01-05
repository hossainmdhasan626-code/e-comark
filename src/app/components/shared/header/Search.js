"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import React from "react";

const Search = () => {
  const isMobile = useBreakpoint(768);

  return (
    <>
      <label
        className={`input ${isMobile ? "w-[200px] h-10" : "w-[500px] h-15"} flex items-center gap-2 
          ${
            isMobile
              ? "border-2 border-gray-50"
              : "border-2 border-mainColor focus-within:border-2 focus-within:border-gray-50"
          }
      transition-all`}
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
        <input type="search" required placeholder="Search" />
      </label>
    </>
  );
};

export default Search;
