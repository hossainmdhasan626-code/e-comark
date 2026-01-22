import Header from "@/app/components/shared/header/Header";
import FooterComponent from "@/app/components/ui(reusable)/Footer";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <FooterComponent />
    </>
  );
};

export default layout;
