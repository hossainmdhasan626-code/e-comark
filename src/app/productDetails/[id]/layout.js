import Header from "@/app/components/shared/header/Header";
import FooterComponent from "@/app/components/ui(reusable)/Footer";
import React from "react";
import NavbarAndSidbarSmItems from "../../../../data/NavbarAndSidbarSmItems";
import Breadcrumbs from "@/app/components/ui(reusable)/Breadcrumbs";

const layout = ({ children }) => {
  return (
    <>
      <Header drawerItems={NavbarAndSidbarSmItems} />

      {/* breadcrumbs */}
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Product Details",
            link: null,
          },
        ]}
      />

      <div>{children}</div>
      <FooterComponent />
    </>
  );
};

export default layout;
