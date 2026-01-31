"use client";
import React from "react";
import WrapperWithMainColor from "../../ui(reusable)/WrapperWithMainColor";
import Search from "../header/Search";
import Sidbar from "../header/Sidbar";
import { useSelector } from "react-redux";
import SignInOut from "../header/SignInUp";
import Link from "next/link";

const NavbarSmOrMd = ({drawerItems}) => {
  const user = useSelector((state) => state.auth);

  return (
    <div>
      {/* thisComponentRendardTheSearchBar */}
      <div className="md:hidden">
        {/*  thisWrapperWasJustAColorWrapperWichIsOnliForMdScreen */}
        <WrapperWithMainColor>
          {/* inThisWrapperWithMainColorComponentWasForMdScreen */}
          <div className="w-full flex justify-around items-center">
            <div className="text-white">
              <Sidbar drawerItems={drawerItems}/>
            </div>

            <div>
              <Search />
            </div>

            <div>
              {user?.fullName ? (
                <Link href={"/profile"}>
                <label
                  htmlFor="my-drawer-5"
                  className="drawer-button btn bg-mainColor border-mainColor hover:bg-[#1a1a1a]"
                >
                  {/* rendarTheProfileLogo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    className="text-white"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58z"
                    />
                  </svg>
                </label>
                </Link>
              ) : (
                <SignInOut />
              )}
            </div>
          </div>
        </WrapperWithMainColor>
      </div>

      <div className="hidden md:block">
        <Search />
      </div>
    </div>
  );
};

export default NavbarSmOrMd;
