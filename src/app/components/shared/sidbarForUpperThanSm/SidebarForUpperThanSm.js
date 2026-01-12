import React from "react";
import MenuComponentFormDaisy from "../../ui(reusable)/MenuComponentFormDaisy";
import SidbarForSm from "../../../../../data/SidbarForSm";

const SidebarForUpperThanSm = () => {
  return (
    <div className="w-full rounded-sm h-screen bg-mainColor overflow-y-auto hidden md:block">
      <MenuComponentFormDaisy itemsRendard={SidbarForSm} />
    </div>
  );
};

export default SidebarForUpperThanSm;
