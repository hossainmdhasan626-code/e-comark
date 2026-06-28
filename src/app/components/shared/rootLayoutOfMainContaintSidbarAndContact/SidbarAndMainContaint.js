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
  const categoryId = searchParams.get("category");
  const subcategoryId = searchParams.get("subcategory");

  const onItemClick = (item) => {
    if (!item) return;

    if (item?.type === "PROFILE_TAB") {
      router.push(`?PROFILE_TAB=${item?.name}`);
      console.log(`State was set: ${item.name}`);
    }

    if (item.type === "CATEGORY") {
      router.push(`?category=${item?.id}`);
      console.log(`Category query was created: ${item.name}`);
    }

    if (item.type === "SUBCATEGORY") {
      router.push(`?category=${item?.parentId}&subcategory=${item?.id}`);
      console.log(`Subcategory query was created: ${item.name}`);
    }
    if (item?.cat_Id && item?.sub_Id) {
      router.push(`?cat_Id=${item?.cat_Id}&sub_Id=${item?.sub_Id}`);
    } 
  };

  const RendaredComponentInProfilePage = PROFILE_COMPONENTS[activeTab];

  // Dynamically compute breadcrumbs
  const dynamicBreadcrumbs = [...(breadcrumbs || [])];
  
  if (sidbarContaint) {
    if (activeTab) {
      const tabItem = sidbarContaint.find(t => t.name === activeTab);
      if (tabItem) {
        dynamicBreadcrumbs.push({ label: tabItem.name, link: null });
      } else {
        dynamicBreadcrumbs.push({ label: activeTab, link: null });
      }
    } else if (categoryId) {
      const cat = sidbarContaint.find(c => c.id.toString() === categoryId);
      if (cat) {
        dynamicBreadcrumbs.push({ label: cat.name, link: `/?category=${cat.id}` });
        if (subcategoryId && cat.children) {
          const sub = cat.children.find(s => s.id.toString() === subcategoryId);
          if (sub) {
            dynamicBreadcrumbs.push({ label: sub.name, link: null }); // last item usually has no link or links to itself
          }
        }
      }
    }
  }

  return (
    <div className="md:flex">
      <div className="md:w-[30%]">
        {/* Breadcrumbs */}
        <Breadcrumbs breadcrumbs={dynamicBreadcrumbs} />

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
