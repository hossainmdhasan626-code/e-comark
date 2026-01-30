import Header from "@/app/components/shared/header/Header";
import FooterComponent from "@/app/components/ui(reusable)/Footer";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <FooterComponent />
    </>
  );
};

export default layout;
