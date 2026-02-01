"use client";
import Link from "next/link";
import ButtonWrapper from "../../ui(reusable)/ButtonWrapper";
import { useGetCartItemsQuery } from "@/app/redux/api/cart/AddtoCartApi";

const ShoppingCard = () => {
  const { data: cartItems = [] } = useGetCartItemsQuery();

  return (
    <Link href="/profile?PROFILE_TAB=SAVED%20CARTS">
      <ButtonWrapper>
        <div className="indicator flex justify-center items-center w-5 md:w-14">
          {/* ব্যাজের নতুন স্টাইল */}
          {cartItems?.length > 0 && (
            <span className="indicator-item badge 
              bg-white text-mainColor border-none 
              font-bold text-xs w-7 h-7 p-0 
              shadow-md translate-x-6 -translate-y-5">
              {cartItems.length}
            </span>
          )}

          {/* cardIcon */}
          <button className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28" // আইকনটা একটু বড় করলাম যাতে দেখতে ভালো লাগে
              height="28"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"
              />
            </svg>
          </button>
        </div>
      </ButtonWrapper>
    </Link>
  );
};

export default ShoppingCard;