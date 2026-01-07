import React from "react";
import NavbarAndSidbarSmItems from "../../../../../data/NavbarAndSidbarSmItems";

// thisComponentUiWasOnelyForSmScreen

const Sidbar = () => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-5"
            className="drawer-button btn bg-mainColor border-mainColor"
          >
            {/* rendarTheSidbarIcon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3.75 4v16m4.5-14h12m-12 6h12m-12 6h8.25"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side z-[999]">
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-200 min-h-full w-80 p-4 flex flex-col gap-2">
            {NavbarAndSidbarSmItems.map((item) => {
              return item?.children ? (
                <li key={item?.id}>
                  {/*  */}
                  <details>
                    <summary className="btn flex justify-between items-center bg-mainColor border-2 border-white text-white hover:bg-mainColor/90">
                      {item?.name}
                      
                    </summary>

                    {/* nestedList */}
                    <ul className="mt-1 flex flex-col gap-1">
                      {item.children.map((childItem) => (
                        <li
                          key={childItem?.id}
                          className="bg-mainColor text-white rounded-lg border border-white/20"
                        >
                          <a>{childItem?.name}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item?.id}>
                  <button className="btn w-full bg-mainColor border-2 border-white text-white flex justify-start">
                    {item?.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
