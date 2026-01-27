"use client";

import MenuComponentFormDaisy from "../../ui(reusable)/MenuComponentFormDaisy";

const SidebarForUpperThanSm = ({ sidbarContaint, onItemClick }) => {
  return (
    <div className="w-full rounded-sm h-screen bg-mainColor overflow-y-auto hidden md:block">
      <MenuComponentFormDaisy
        itemsRendard={sidbarContaint}
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default SidebarForUpperThanSm;
