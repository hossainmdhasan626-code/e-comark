"use client";
// thisComponentUiWasOnelyForSmScreen

import { useRouter } from "next/navigation";

const Sidbar = ({ drawerItems }) => {
  const router = useRouter();

  const onItemClick = (item) => {
    alert("clicked");
    if (!item) return;

    if (item.type === "PROFILE_TAB") {
      router.push(`?PROFILE_TAB=${item?.name}`);
      console.log(`State was set: ${item.name}`);
    }

    if (item.type === "CATEGORY") {
      console.log(`query was createed: ${item.name}`);
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
          className="drawer-button btn bg-mainColor border-2 border-white hover:bg-[#1a1a1a] transition-all"
        >
          {/* sidbarIcon */}
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

        {/* drawerMenuContent */}
        <ul className="menu bg-mainColor min-h-full w-80 p-4 flex flex-col gap-3 text-white">
          {drawerItems.map((item) => {
            return item?.children ? (
              <li key={item?.id}>
                <details>
                  <summary className="btn bg-mainColor border-2 border-white text-white hover:bg-[#1a1a1a] transition-all flex justify-between items-center w-full after:text-white">
                    {item?.name}
                  </summary>

                  {/* SubMenu */}
                  <ul className="mt-2 ml-4 border-l-2 border-white pl-2 flex flex-col gap-2">
                    {item.children.map((childItem) => (
                      <li key={childItem?.id}>
                        <button className="btn btn-sm border-2 justify-start bg-mainColor text-white border-white hover:bg-[#1a1a1a] transition-all w-full">
                          {childItem?.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={item?.id}>
                <button
                  onClick={() => onItemClick(item)}
                  className="btn bg-mainColor border-2 border-white text-white hover:bg-[#1a1a1a] transition-all w-full flex justify-start items-center min-h-[3rem]"
                >
                  {item?.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidbar;
