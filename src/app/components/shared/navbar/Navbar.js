import Link from "next/link";
import WrapperWithMainColor from "../../ui(reusable)/WrapperWithMainColor";

const Navbar = ({ navbarItems }) => {
  return (
    // Only visible on medium screens and larger
    <div className="hidden md:block">
      <WrapperWithMainColor>
        <div className="flex items-center gap-2 py-1.5 w-full px-4 max-w-7xl mx-auto">
          {/* Home Icon Link */}
          <Link
            href="/"
            className="flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"
              />
            </svg>
          </Link>

          {/* Navigation Menu */}
          <ul className="flex items-center gap-1 flex-wrap p-0 m-0 list-none">
            {navbarItems.map((item) => {
              return item?.children ? (
                <li key={item?.id} className="relative group">
                  <details className="dropdown">
                    <summary className="px-3.5 py-2 text-white font-semibold text-[13px] tracking-wider uppercase rounded-lg hover:bg-white/10 active:bg-white/15 transition-all duration-200 list-none flex items-center gap-1.5 cursor-pointer select-none">
                      {item?.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-80 transition-transform duration-200"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </summary>
                    <ul className="dropdown-content menu p-1.5 bg-mainColor border border-white/15 text-white rounded-xl min-w-[14rem] shadow-xl z-[100] mt-1.5">
                      {item.children.map((childItem) => (
                        <li key={childItem?.id} className="w-full">
                          <Link
                            href={childItem.path || "/"}
                            className="text-white hover:bg-white/10 active:bg-white/15 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 block w-full"
                          >
                            {childItem?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item?.id}>
                  <Link
                    href={item.path || "/"}
                    className="px-3.5 py-2 text-white font-semibold text-[13px] tracking-wider uppercase rounded-lg hover:bg-white/10 active:bg-white/15 transition-all duration-200 block"
                  >
                    {item?.name}
                  </Link>
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
