import React from "react";
import MenuComponentFormDaisy from "../../ui(reusable)/MenuComponentFormDaisy";

const SidebarForUpperThanSm = ({ sidbarContaint }) => {
  return (
    <div className="w-full rounded-sm h-screen bg-mainColor overflow-y-auto hidden md:block">
      <MenuComponentFormDaisy itemsRendard={sidbarContaint} />
    </div>
  );
};

export default SidebarForUpperThanSm;
