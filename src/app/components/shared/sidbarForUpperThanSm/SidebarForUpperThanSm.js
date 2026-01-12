import React from "react";
import NavbarAndSidbarSmItems from "../../../../../data/NavbarAndSidbarSmItems";
import MenuComponentFormDaisy from "../../ui(reusable)/MenuComponentFormDaisy";

const SidebarForUpperThanSm = () => {
  return (
    <div className="w-full rounded-sm h-screen bg-mainColor overflow-y-auto hidden md:block">
      <MenuComponentFormDaisy itemsRendard={NavbarAndSidbarSmItems} />
    </div>
  );
};

export default SidebarForUpperThanSm;
