// etaSuduProfilePageErNavbar

import Link from "next/link";
import WrapperWithMainColor from "../../ui(reusable)/WrapperWithMainColor";

const ProfileNavbar = () => {
  return (
    <div className="hidden md:block">
      <WrapperWithMainColor>
        <Link href="/" className="flex justify-start w-full mx-1 lg:mx-20">
          <div
            className="btn bg-mainColor border-2 border-white hover:bg-[#1a1a1a] transition-all
          flex items-center  gap-3 py-2 text-white"
          >
            {/* backArrowIcon */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="m10 16l-4-4m0 0l4-4m-4 4h12"
                />
              </svg>
            </div>
            <div>Back</div>
          </div>
        </Link>
      </WrapperWithMainColor>
    </div>
  );
};

export default ProfileNavbar;
