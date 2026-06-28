"use client";

import Logo from "../../ui(reusable)/Logo";
import ShoppingCard from "./ShoppingCard";
import NavbarSmOrMd from "../navbar/NavbarSmOrMd";
import ButtonWrapper from "../../ui(reusable)/ButtonWrapper";
import { useSelector, useDispatch } from "react-redux";
import SignInOut from "./SignInUp";
import Link from "next/link";
import AuthBtn from "../../ui(reusable)/AuthBtn";
import { useEffect } from "react";
import { authData } from "../../../redux/fecher/auth/AtuthSlice";

const Header = ({ drawerItems }) => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (token && !user?.fullName) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/profile/`, {
            headers: { "Authorization": `Bearer ${token}` }
          });
          const result = await res.json();
          if (res.ok && result.success && result.data && result.data.length > 0) {
            const profile = result.data[0];
            dispatch(authData({
              firstName: profile.first_name || "User",
              lastName: profile.last_name || "",
              email: profile.user?.email || ""
            }));
          }
        } catch (e) {
          console.error("Failed to restore user session:", e);
        }
      }
    };
    fetchUser();
  }, [dispatch, user?.fullName]);

  return (
    <>
      <div className="md:flex md:justify-between md:items-center md:mx-7">
        <div className="my-6">
          {/* thisComponentRendartLogo */}
          <Logo />
        </div>

        <div>
          {/* eiComponentTaMulotoMdArTarCeBoroScreenErJonnoSuduSearchBarRendarKore
          ArSmErJonnoEktaNavbarObolayNavbarRendarKore */}
          <NavbarSmOrMd drawerItems={drawerItems} />
        </div>

        <div className="md:flex hidden md:block">
          <div>
            {/* shoppingCard */}
            <ShoppingCard />
          </div>

          {user?.access ? (
            <Link href="/profile">
              {/* profileBtn */}
              <ButtonWrapper>
                {/* profileIcon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.18C7.57 16.22 9.64 15 12 15s4.43 1.22 6.14 2.82C16.43 19.18 14.03 20 12 20z" />
                </svg>
              </ButtonWrapper>
            </Link>
          ) : (
            <SignInOut />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
