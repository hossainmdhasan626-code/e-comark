import React from "react";
import NavbarAndSidbarSmItems from "../../../../../data/NavbarAndSidbarSmItems";

const SidebarForUpperThanSm = () => {
  return (
    <div className="w-full rounded-sm h-screen bg-mainColor overflow-y-auto hidden md:block">
      <ul className="menu w-full p-4 gap-3">
        {NavbarAndSidbarSmItems.map((items) => {
          return items?.children ? (
            <li key={items.id}>
              {/* DaisyUI Collapsible Menu using <details> */}
              <details>
                <summary
                  className="btn bg-mainColor text-white border-2 border-white 
                        hover:bg-[#1a1a1a] transition-all
                        flex justify-between items-center w-full after:text-white"
                >
                  {items.name}
                </summary>

                <ul className="mt-2 ml-4 border-l-2 border-white pl-2 flex flex-col gap-1">
                  {items.children.map((child) => (
                    <li key={child?.id}>
                      <a
                        className="btn btn-sm border-2 justify-start bg-mainColor
                              text-white border-white hover:bg-[#1a1a1a]
                              transition-all w-full"
                      >
                        {child?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ) : (
            <li key={items.id}>
              <a
                className="btn bg-mainColor text-white border-2 border-white 
                      hover:bg-[#1a1a1a] transition-all w-full flex 
                      justify-start items-center min-h-[3rem]"
              >
                {items.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarForUpperThanSm;