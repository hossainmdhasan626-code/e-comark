import FooterComponent from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import Navbar from "../components/shared/navbar/Navbar";
import SidebarForUpperThanSm from "../components/shared/sidbarForUpperThanSm/SidebarForUpperThanSm";
import Title from "../components/ui(reusable)/Title";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="md:flex">
        <div className="md:w-[30%]">
          <Title
            className={"text-3xl font-semibold ml-[90px] my-5 hidden md:block"}
          >
            Lorem, ipsum.
          </Title>

          {/* thisComponetSidbarWasRendarForTheMd/Lg/XlScreen */}
          <SidebarForUpperThanSm />
        </div>
        <div className="md:w-[70%]">{children}</div>
      </div>
      {/* footer */}
      <FooterComponent/>
    </>
  );
};

export default layout;
