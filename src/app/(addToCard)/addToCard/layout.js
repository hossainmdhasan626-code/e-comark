import Header from "@/app/components/shared/header/Header";
import FooterComponent from "@/app/components/ui(reusable)/Footer";
import NavbarAndSidbarSmItems from "../../../../data/NavbarAndSidbarSmItems";

const layout = ({ children }) => {
  return (
    <>
      <Header drawerItems={NavbarAndSidbarSmItems}/>
      {children}
      <FooterComponent />
    </>
  );
};

export default layout;
