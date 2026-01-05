"use client";

//thisComponentUiWasOnelyForUpperThanSmScreen

import React from "react";
import WrapperWithMainColor from "../../ui(reusable)/WrapperWithMainColor";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import NavbarAndSidbarSmItems from "../../../../../data/NavbarAndSidbarSmItems";

const Navbar = () => {
  const isMobile = useBreakpoint(768);

  return (
    <>
      {isMobile ? (
        ""
      ) : (
        <WrapperWithMainColor>
          {/* thisDisWasUseForFlexTheNavbarItems */}
          <div className=" flex items-center gap-3">
            <div className="btn bg-mainColor border-2 border-white">
              {/* homeIcon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"
                />
              </svg>
            </div>
            {NavbarAndSidbarSmItems.map((item) => {
              // thisTernaryOperatorWasUseIfTheListAsAnyNestedList
              return item?.children ? (
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 border-2 border-white bg-mainColor text-white"
                  >
                    <div className="flex justify-around items-center gap-1">
                      {/* navbarItemName */}
                      <div>{item?.name}</div>
                      <div>
                        {/* downArrowIconForChildrens */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m16 10l-4 4l-4-4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-mainColor rounded-box z-1 w-52 p-2 
                            shadow-sm text-white"
                  >
                    {item.children.map((childItem) => {
                      return (
                        <li
                          key={childItem?.id}
                          className="hover:bg-base-100 rounded-lg"
                        >
                          <p>{childItem?.name}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <div
                  key={item?.id}
                  className="btn  bg-mainColor border-2 border-white text-white"
                >
                  {item?.name}
                </div>
              );
            })}
          </div>
        </WrapperWithMainColor>
      )}
    </>
  );
};

export default Navbar;
