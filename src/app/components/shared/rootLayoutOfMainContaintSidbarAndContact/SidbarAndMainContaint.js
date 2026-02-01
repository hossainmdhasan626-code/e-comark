"use client";
// eiComponentTaMulotoPuraChildrenKeNeyArSetaKeSidbarArMainContaint
// erLayoutEThikKore

import SidebarForUpperThanSm from "../sidbarForUpperThanSm/SidebarForUpperThanSm";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { PROFILE_COMPONENTS } from "../../../../../data/PROFILE_COMPONENTS";
import Link from "next/link";
import Breadcrumbs from "../../ui(reusable)/Breadcrumbs";

const SidbarAndMainContaint = ({
  breadcrumbs,
  sidbarContaint,
  mainContaint,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("PROFILE_TAB");

  const onItemClick = (item) => {
    if (!item) return;

    if (item.type === "PROFILE_TAB") {
      router.push(`?PROFILE_TAB=${item?.name}`);
      console.log(`State was set: ${item.name}`);
    }

    if (item.type === "CATEGORY") {
      console.log(`query was createed: ${item.name}`);
    }
  };

  const RendaredComponentInProfilePage = PROFILE_COMPONENTS[activeTab];

  return (
    <div className="md:flex">
      <div className="md:w-[30%]">
        {/* Breadcrumbs */}
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        {/* thisComponetSidbarWasRendarForTheMd/Lg/XlScreen */}
        <SidebarForUpperThanSm
          sidbarContaint={sidbarContaint}
          onItemClick={onItemClick}
        />
      </div>
      <div className="md:w-[70%] p-5">
        {/* children */}
        {RendaredComponentInProfilePage
          ? RendaredComponentInProfilePage
          : mainContaint}
      </div>
    </div>
  );
};

export default SidbarAndMainContaint;
