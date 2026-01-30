import FooterComponent from "../components/ui(reusable)/Footer";
import Header from "../components/shared/header/Header";
import Navbar from "../components/shared/navbar/Navbar";
import NavbarAndSidbarSmItems from "../../../data/NavbarAndSidbarSmItems";
import SidbarForSm from "../../../data/SidbarForSm";
import SidbarAndMainContaint from "../components/shared/rootLayoutOfMainContaintSidbarAndContact/SidbarAndMainContaint";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar navbarItems={NavbarAndSidbarSmItems} />
      {/* sidbarAndMainContaintErModdeiMainContaintBaChildrenJacche
      KenoNaEiLayoutTaAroOnekSthaneiUseKoraHobe */}
      <SidbarAndMainContaint
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Categories", link: null },
        ]}
        sidbarContaint={SidbarForSm}
        mainContaint={children}
      />
      {/* footer */}
      <FooterComponent />
    </>
  );
};

export default layout;
