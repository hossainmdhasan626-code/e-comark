import ProfileNavbar from "@/app/components/shared/header/ProfileNavbar";
import Header from "../../components/shared/header/Header";
import FooterComponent from "@/app/components/ui(reusable)/Footer";
import SidbarAndMainContaint from "@/app/components/rootLayoutOfMainContaintSidbarAndContact/SidbarAndMainContaint";
import { profileSidebar } from "../../../../data/ProfileSidebar";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <ProfileNavbar />
      {/* eiComponentTaMulotoEktaLaoutDibeJetaSidebarArMainContaintKeRendarKorbe */}
      <SidbarAndMainContaint
        title={"lorem"}
        mainContaint={children}
        sidbarContaint={profileSidebar}
      />
      <FooterComponent />
    </div>
  );
};

export default layout;
