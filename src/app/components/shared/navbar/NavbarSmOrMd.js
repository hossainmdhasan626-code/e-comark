"use client";
import React, { Suspense } from "react";
import WrapperWithMainColor from "../../ui(reusable)/WrapperWithMainColor";
import Search from "../header/Search";
import Sidbar from "../header/Sidbar";
import { useSelector } from "react-redux";
import SignInOut from "../header/SignInUp";
import Link from "next/link";
import ShoppingCard from "../header/ShoppingCard";

const NavbarSmOrMd = ({ drawerItems }) => {
  const user = useSelector((state) => state.auth);

  return (
    <Suspense fallback={<div className="h-14 flex items-center justify-center text-white bg-mainColor">Loading Navigation...</div>}>
      {/* Mobile navigation bar */}
      <div className="md:hidden w-full">
        <WrapperWithMainColor>
          <div className="w-full flex justify-between items-center px-4 h-full gap-2">
            {/* Sidebar toggle menu */}
            <div className="text-white flex-shrink-0">
              <Sidbar drawerItems={drawerItems} />
            </div>

            {/* Search field */}
            <div className="flex-grow max-w-[60%] sm:max-w-[70%]">
              <Search />
            </div>

            {/* User links and Shopping Cart */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <ShoppingCard />
              {user?.fullName ? (
                <Link
                  href="/profile"
                  className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 active:bg-white/15 transition-all text-white"
                  aria-label="Profile"
                >
                  {/* Modern Circular Profile Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.18C7.57 16.22 9.64 15 12 15s4.43 1.22 6.14 2.82C16.43 19.18 14.03 20 12 20z" />
                  </svg>
                </Link>
              ) : (
                <SignInOut />
              )}
            </div>
          </div>
        </WrapperWithMainColor>
      </div>

      {/* Desktop view search */}
      <div className="hidden md:block">
        <Search />
      </div>
    </Suspense>
  );
};

export default NavbarSmOrMd;
