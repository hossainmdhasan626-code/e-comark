import React from "react";
import Title from "../ui(reusable)/Title";
import SidebarForUpperThanSm from "../shared/sidbarForUpperThanSm/SidebarForUpperThanSm";

const SidbarAndMainContaint = ({ title, sidbarContaint, mainContaint }) => {
  return (
    <div className="md:flex">
      <div className="md:w-[30%]">
        <Title
          className={"text-3xl font-semibold ml-[90px] my-5 hidden md:block"}
        >
          {title}
        </Title>

        {/* thisComponetSidbarWasRendarForTheMd/Lg/XlScreen */}
        <SidebarForUpperThanSm sidbarContaint={sidbarContaint} />
      </div>
      <div className="md:w-[70%]">{mainContaint}</div>
    </div>
  );
};

export default SidbarAndMainContaint;
