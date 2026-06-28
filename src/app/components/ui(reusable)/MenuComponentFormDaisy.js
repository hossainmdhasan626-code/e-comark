import React from "react";

const MenuComponentFormDaisy = ({ itemsRendard, onItemClick }) => {
  return (
    <ul className="menu w-full p-4 flex flex-col gap-1 list-none bg-mainColor text-white">
      {itemsRendard.map((items) => {
        return items?.children ? (
          <li key={items.id} className="w-full">
            {/* DaisyUI Collapsible Menu using <details> */}
            <details className="w-full group">
              <summary
                className="flex justify-between items-center w-full px-4 py-3 
                      font-semibold text-sm tracking-wide rounded-lg 
                      hover:bg-white/10 active:bg-white/15 transition-all duration-150 
                      cursor-pointer list-none select-none text-white after:hidden"
              >
                <span>{items.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-85 transition-transform duration-200"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>

              <ul className="mt-1 ml-4 border-l border-white/20 pl-2.5 flex flex-col gap-0.5 list-none">
                {items.children.map((child) => (
                  <li key={child?.id} className="w-full">
                    <a
                      className="w-full text-left px-4 py-2.5 text-sm font-medium 
                            rounded-lg hover:bg-white/10 active:bg-white/15 
                            transition-all duration-150 justify-start text-white cursor-pointer block"
                      onClick={() => onItemClick(child)}
                    >
                      {child?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ) : (
          <li key={items?.id} className="w-full">
            <p
              className="w-full flex justify-start items-center px-4 py-3 
                    font-semibold text-sm tracking-wide rounded-lg 
                    hover:bg-white/10 active:bg-white/15 transition-all duration-150 
                    text-white cursor-pointer select-none"
              onClick={() => onItemClick(items)}
            >
              {items?.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuComponentFormDaisy;
