"use client"
// eiComponentTaMulotoPuraChildrenKeNeyArSetaKeSidbarArMainContaint
// erLayoutEThikKore

import Title from "../ui(reusable)/Title";
import SidebarForUpperThanSm from "../shared/sidbarForUpperThanSm/SidebarForUpperThanSm";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { PROFILE_COMPONENTS } from "../../../../data/PROFILE_COMPONENTS";

const SidbarAndMainContaint = ({ title, sidbarContaint, mainContaint }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("PROFILE_TAB");

  const onItemClick = (item) => {
    if (!item) return;

    if (item.type === "PROFILE_TAB") {
      router.push(`?PROFILE_TAB=${item?.name}`);
      console.log(`State was set: ${item.name}`);
    };

    if (item.type === "CATEGORY") {
      console.log(`query was createed: ${item.name}`);
    }
  };

  const RendaredComponentInProfilePage = PROFILE_COMPONENTS[activeTab];

  return (
    <div className="md:flex">
      <div className="md:w-[30%]">
        <Title
          className={"text-3xl font-semibold ml-[90px] my-5 hidden md:block"}
        >
          {title}
        </Title>

        {/* thisComponetSidbarWasRendarForTheMd/Lg/XlScreen */}
        <SidebarForUpperThanSm
          sidbarContaint={sidbarContaint}
          onItemClick={onItemClick}
        />
      </div>
      <div className="md:w-[70%]">
        {RendaredComponentInProfilePage
          ? RendaredComponentInProfilePage
          : mainContaint}
      </div>
    </div>
  );
};

export default SidbarAndMainContaint;
