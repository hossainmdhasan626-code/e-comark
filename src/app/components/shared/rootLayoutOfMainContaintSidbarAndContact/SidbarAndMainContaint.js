"use client";
// eiComponentTaMulotoPuraChildrenKeNeyArSetaKeSidbarArMainContaint
// erLayoutEThikKore

import SidebarForUpperThanSm from "../sidbarForUpperThanSm/SidebarForUpperThanSm";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { PROFILE_COMPONENTS } from "../../../../../data/PROFILE_COMPONENTS";
import Breadcrumbs from "../../ui(reusable)/Breadcrumbs";

const SidbarAndMainContaint = ({
  breadcrumbs,
  sidbarContaint,
  mainContaint,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("PROFILE_TAB");
  const urlSearchParams = new URLSearchParams();
  const onItemClick = (item) => {
    if (!item) return;

    if (item?.type === "PROFILE_TAB") {
      router.push(`?PROFILE_TAB=${item?.name}`);
    }
    if (item?.cat_Id && item?.sub_Id) {
      router.push(`?cat_Id=${item?.cat_Id}&sub_Id=${item?.sub_Id}`);
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
