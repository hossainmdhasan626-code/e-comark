"use client"

import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import React from "react";

const ShoppingCard = () => {
  const isMobile = useBreakpoint(768);

  return (
    <>
      {isMobile ? (
        ""
      ) : (
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-mainColor text-white"
          >
            Shopping Cart
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-mainColor rounded-box z-1 w-52 p-2 
          shadow-sm text-white"
          >
            <li className="hover:bg-base-100 rounded-lg">
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ShoppingCard;
