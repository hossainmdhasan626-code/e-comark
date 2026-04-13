import FooterComponent from "../components/ui(reusable)/Footer";
import Header from "../components/shared/header/Header";
import Navbar from "../components/shared/navbar/Navbar";
import NavbarAndSidbarSmItems from "../../../data/NavbarAndSidbarSmItems";
import { Suspense } from "react";
import SidbarAndMainContaintForFetchData from "../components/shared/rootLayoutOfMainContaintSidbarAndContact/SidbarAndMainContaintForFetchData";

const layout = ({ children }) => {
  return (
    <>
      <Header drawerItems={NavbarAndSidbarSmItems} />
      <Navbar navbarItems={NavbarAndSidbarSmItems} />
      {/* sidbarAndMainContaintErModdeiMainContaintBaChildrenJacche
      KenoNaEiLayoutTaAroOnekSthaneiUseKoraHobe */}
      <Suspense fallback={<div>Loading Navigation...</div>}>
        <SidbarAndMainContaintForFetchData mainContaint={children} />
      </Suspense>
      {/* footer */}
      <FooterComponent />
    </>
  );
};

export default layout;
