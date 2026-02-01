import ProfileNavbar from "@/app/components/shared/header/ProfileNavbar";
import Header from "../../components/shared/header/Header";
import FooterComponent from "@/app/components/ui(reusable)/Footer";
import SidbarAndMainContaint from "@/app/components/shared/rootLayoutOfMainContaintSidbarAndContact/SidbarAndMainContaint";
import { profileSidebar } from "../../../../data/ProfileSidebar";
import { Suspense } from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Header drawerItems={profileSidebar}/>
      <ProfileNavbar />
      <Suspense fallback={<div>Loading Navigation...</div>}>
        {/* eiComponentTaMulotoEktaLaoutDibeJetaSidebarArMainContaintKeRendarKorbe */}
        <SidbarAndMainContaint
          breadcrumbs={[
            { label: "Home", link: "/" },
            { label: "My Account", link: null },
          ]}
          mainContaint={children}
          sidbarContaint={profileSidebar}
        />
      </Suspense>
      <FooterComponent />
    </div>
  );
};

export default layout;
