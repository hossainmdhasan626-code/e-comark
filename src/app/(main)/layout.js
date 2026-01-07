import Header from "../components/shared/header/Header";
import Navbar from "../components/shared/navbar/Navbar";
import SidebarForUpperThanSm from "../components/shared/sidbarForUpperThanSm/SidebarForUpperThanSm";
import Title from "../components/ui(reusable)/Title";
import MenuForSm from "../components/shared/menuForSmScreen/MenuForSm";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="md:flex">
        <div className="md:w-[35%]">
          <Title
            className={
              "text-3xl font-semibold text-white ml-[90px] my-5 hidden md:block"
            }
          >
            Lorem, ipsum.
          </Title>

          {/* thisComponetSidbarWasRendarForTheMd/Lg/XlScreen */}
          <SidebarForUpperThanSm />

          {/* thisComponentWasRendarTheMenuItemsForSmScreen */}
          <MenuForSm />
        </div>
        <div className="md:w-[65%]">{children}</div>
      </div>
    </>
  );
};

export default layout;
