import FooterComponent from "../components/ui(reusable)/Footer";
import Header from "../components/shared/header/Header";
import Navbar from "../components/shared/navbar/Navbar";
import NavbarAndSidbarSmItems from "../../../data/NavbarAndSidbarSmItems";
import SidbarForSm from "../../../data/SidbarForSm";
import SidbarAndMainContaint from "../components/rootLayoutOfMainContaintSidbarAndContact/SidbarAndMainContaint";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar navbarItems={NavbarAndSidbarSmItems} />
      {/* sidbarAndMainContaintErModdeiMainContaintBaChildrenJacche
      KenoNaEiLayoutTaAroOnekSthaneiUseKoraHobe */}
      <SidbarAndMainContaint
        title={"Lorem, ipsum dolor."}
        sidbarContaint={SidbarForSm}
        mainContaint={children}
      />
      {/* footer */}
      <FooterComponent />
    </>
  );
};

export default layout;
