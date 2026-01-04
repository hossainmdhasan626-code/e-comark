import React from "react";
import Logo from "../../ui(reusable)/Logo";
import NavbarSmOrMd from "./NavbarSmOrMd";
import ShoppingCard from "./ShoppingCard";

const Header = () => {
  return (
    <>
      <div className="md:flex md:justify-between md:items-center md:mx-7">
        <div className="my-6">
          {/* thisComponentRendartLogo */}
          <Logo />
        </div>
        
        <div>
          {/* thisComponentIsAClientSideComponentThat'sWhayICreateAAnotherComponentToUseUseClient */}
          <NavbarSmOrMd />
        </div>

        <div>
          {/* shoppingCard */}
          <ShoppingCard/>
        </div>
      </div>
    </>
  );
};

export default Header;
