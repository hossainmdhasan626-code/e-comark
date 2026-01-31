import FooterComponent from "../components/ui(reusable)/Footer";
import Header from "../components/shared/header/Header";
import Navbar from "../components/shared/navbar/Navbar";
import NavbarAndSidbarSmItems from "../../../data/NavbarAndSidbarSmItems";
import SidbarForSm from "../../../data/SidbarForSm";
import SidbarAndMainContaint from "../components/shared/rootLayoutOfMainContaintSidbarAndContact/SidbarAndMainContaint";
import { Suspense } from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header drawerItems={NavbarAndSidbarSmItems}/>
      <Navbar navbarItems={NavbarAndSidbarSmItems} />
      {/* sidbarAndMainContaintErModdeiMainContaintBaChildrenJacche
      KenoNaEiLayoutTaAroOnekSthaneiUseKoraHobe */}
      <Suspense fallback={<div>Loading Navigation...</div>}>
        <SidbarAndMainContaint
          breadcrumbs={[
            { label: "Home", link: "/" },
            { label: "Categories", link: null },
          ]}
          sidbarContaint={SidbarForSm}
          mainContaint={children}
        />
      </Suspense>
      {/* footer */}
      <FooterComponent />
    </>
  );
};

export default layout;
