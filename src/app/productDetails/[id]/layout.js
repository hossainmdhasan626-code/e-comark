import Header from "@/app/components/shared/header/Header";
import FooterComponent from "@/app/components/ui(reusable)/Footer";
import React from "react";
import NavbarAndSidbarSmItems from "../../../../data/NavbarAndSidbarSmItems";

const layout = ({ children }) => {
  return (
    <>
      <Header drawerItems={NavbarAndSidbarSmItems}/>
      <div>{children}</div>
      <FooterComponent />
    </>
  );
};

export default layout;
