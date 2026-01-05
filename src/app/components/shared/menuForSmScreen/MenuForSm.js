import React from "react";
import NavbarAndSidbarSmItems from "../../../../../data/NavbarAndSidbarSmItems";

const MenuForSm = () => {

  return (
    <>
      <div className="flex flex-col gap-2 p-2 md:hidden">
        {NavbarAndSidbarSmItems.map((item) => {
          return item?.children ? (
            /* ifThereWasAnyNestedRout */
            <div
              key={item.id}
              className="collapse collapse-arrow bg-mainColor border-white border-2 rounded-lg"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-white font-semibold flex items-center">
                {item.name}
              </div>

              <div className="collapse-content flex flex-col gap-2">
                {/* nestedList */}
                {item.children.map((child) => (
                  <button
                    key={child.id}
                    className="btn btn-sm bg-mainColor text-white border-white border-2 hover:bg-[#1a1a1a] w-full justify-start"
                  >
                    {child.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* ifTheListDosen'tHaveAnyNestedList */
            <button
              key={item.id}
              className="btn bg-mainColor text-white border-white border-2 hover:bg-[#1a1a1a] w-full justify-start font-semibold h-auto py-4"
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default MenuForSm;
