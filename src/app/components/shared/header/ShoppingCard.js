import React from "react";

const ShoppingCard = () => {
  return (
    <>
      <div className="dropdown hidden md:block">
        <div
          tabIndex={0}
          role="button"
          /* এখানে border-2 এবং border-white যোগ করা হয়েছে */
          className="btn m-1 bg-mainColor text-white border-2 border-white hover:bg-[#1a1a1a] transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          /* dropdown-content এর ডিজাইনে বর্ডার এবং ড্রপডাউন পজিশন ঠিক করা হয়েছে */
          className="dropdown-content menu bg-mainColor rounded-box z-[10] w-52 p-2 
          shadow-lg text-white border-2 border-white mt-2"
        >
          <li className="hover:bg-[#1a1a1a] rounded-lg transition-all">
            <a className="text-white">Item 1</a>
          </li>
          <li className="hover:bg-[#1a1a1a] rounded-lg transition-all">
            <a className="text-white">Item 2</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShoppingCard;