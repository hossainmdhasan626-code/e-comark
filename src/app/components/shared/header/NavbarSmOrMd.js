"use client";

import React from "react";
import WrapperWithMainColor from "../../ui(reusable)/WrapperWithMainColor";
import Search from "./Search";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import Sidbar from "./Sidbar";

const NavbarSmOrMd = () => {
  const isMobile = useBreakpoint(768);

  return (
    <div>
      {/* thisComponentRendardTheSearchBar */}
      {isMobile ? (
        // thisWrapperWasJustAColorWrapperWichIsOnliForMdScreen
        <WrapperWithMainColor>
          {/* inThisWrapperWithMainColorComponentWasForMdScreen */}
          <div className="w-full flex justify-around">
            <div className="text-white">
              <Sidbar />
            </div>

            <div>
              <Search />
            </div>

            <div>
              <label
                //   iCanCreatTheProfilePageAFullySeparatedPageOrShowThadOnTheSidbarLikeNow
                htmlFor="my-drawer-5"
                className="drawer-button btn bg-mainColor border-mainColor"
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
            </div>
          </div>
        </WrapperWithMainColor>
      ) : (
        <Search />
      )}
    </div>
  );
};

export default NavbarSmOrMd;
