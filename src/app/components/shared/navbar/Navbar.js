import WrapperWithMainColor from "../../ui(reusable)/WrapperWithMainColor";
import NavbarAndSidbarSmItems from "../../../../../data/NavbarAndSidbarSmItems";

const Navbar = () => {
  return (
    // eiNavbarTaDefaultSmScreeneDekhaJabeSuduMdTeiDekhaJave
    <div className="hidden md:block">
      <WrapperWithMainColor>
        {/* flex-wrap ব্যবহার করা হয়েছে যাতে জায়গা না হলে মেনু নিচে নেমে আসে */}
        <div className="flex flex-wrap items-center gap-3 py-2">
          {/* Home Icon */}
          <div className="btn bg-mainColor border-2 border-white hover:bg-[#1a1a1a] transition-all">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"
              />
            </svg>
          </div>

          {/* Nav Items */}
          <ul className="menu menu-horizontal gap-3 p-0 flex-wrap max-w-full">
            {NavbarAndSidbarSmItems.map((item) => {
              return item?.children ? (
                <li key={item?.id}>
                  <details className="dropdown">
                    <summary className="btn border-2 border-white bg-mainColor text-white hover:bg-[#1a1a1a] transition-all flex items-center gap-1">
                      {item?.name}
                    </summary>
                    {/* z-index বাড়ানো হয়েছে যাতে নিচের মেনুর ওপর ড্রপডাউন দেখা যায় */}
                    <ul className="bg-mainColor border-2 border-white text-white p-2 rounded-box min-w-[12rem] z-[100] mt-2">
                      {item.children.map((childItem) => (
                        <li
                          key={childItem?.id}
                          className="hover:bg-[#1a1a1a] rounded-lg"
                        >
                          <a className="text-white block w-full">
                            {childItem?.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item?.id}>
                  <a className="btn border-2 border-white bg-mainColor text-white hover:bg-[#1a1a1a] transition-all">
                    {item?.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </WrapperWithMainColor>
    </div>
  );
};

export default Navbar;
