"use client";
// thisComponentUiWasOnelyForSmScreen

import { useRouter } from "next/navigation";

const Sidbar = ({ drawerItems }) => {
  const router = useRouter();

  const onItemClick = (item) => {
    if (!item) return;

    if (item.type === "PROFILE_TAB") {
      router.push(`?PROFILE_TAB=${item?.name}`);
      console.log(`State was set: ${item.name}`);
    }

    if (item.type === "CATEGORY") {
      router.push(`?category=${item?.id}`);
      console.log(`query was created: ${item.name}`);
    }

    if (item.type === "SUBCATEGORY") {
      router.push(`?category=${item?.parentId}&subcategory=${item?.id}`);
      console.log(`Subcategory query was created: ${item.name}`);
    }

    if (item.path) {
      router.push(item.path);
      console.log(`Navigated to path: ${item.path}`);
    }

    const drawerCheckbox = document.getElementById("my-drawer-5");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* drawerButton */}
        <label
          htmlFor="my-drawer-5"
          className="drawer-button flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all cursor-pointer"
        >
          {/* sidbarIcon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </label>
      </div>

      <div className="drawer-side z-[999]">
        <label
          htmlFor="my-drawer-5"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* drawerMenuContent Wrapper */}
        <div className="bg-mainColor min-h-full w-80 max-w-[85vw] flex flex-col text-white shadow-2xl relative">
          
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
            <span className="text-xl font-bold tracking-wider uppercase">E-Comark</span>
            <label
              htmlFor="my-drawer-5"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 active:bg-white/20 transition-all cursor-pointer"
              aria-label="Close sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </label>
          </div>

          {/* Drawer Menu Items */}
          <ul className="menu p-4 flex-1 flex flex-col gap-1 overflow-y-auto list-none">
            {drawerItems.map((item) => {
              return item?.children ? (
                <li key={item?.id} className="w-full">
                  <details className="w-full group">
                    <summary className="flex justify-between items-center w-full px-4 py-3 font-semibold text-sm tracking-wide rounded-lg hover:bg-white/10 active:bg-white/15 transition-all duration-150 cursor-pointer list-none after:hidden">
                      <span>{item?.name}</span>
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

                    {/* SubMenu */}
                    <ul className="mt-1 ml-4 border-l border-white/20 pl-2.5 flex flex-col gap-0.5 list-none">
                      {item.children.map((childItem) => (
                        <li key={childItem?.id} className="w-full">
                          <button
                            onClick={() => onItemClick(childItem)}
                            className="w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-white/10 active:bg-white/15 transition-all duration-150 justify-start"
                          >
                            {childItem?.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item?.id} className="w-full">
                  <button
                    onClick={() => onItemClick(item)}
                    className="w-full flex justify-start items-center px-4 py-3 font-semibold text-sm tracking-wide rounded-lg hover:bg-white/10 active:bg-white/15 transition-all duration-150"
                  >
                    {item?.name}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Drawer Footer */}
          <div className="p-5 border-t border-white/15 text-center text-xs opacity-70">
            <p>© {new Date().getFullYear()} E-Comark. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
