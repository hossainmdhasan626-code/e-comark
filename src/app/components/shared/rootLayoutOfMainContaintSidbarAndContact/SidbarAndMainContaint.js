"use client";
// eiComponentTaMulotoPuraChildrenKeNeyArSetaKeSidbarArMainContaint
// erLayoutEThikKore

import SidebarForUpperThanSm from "../sidbarForUpperThanSm/SidebarForUpperThanSm";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { PROFILE_COMPONENTS } from "../../../../../data/PROFILE_COMPONENTS";
import Link from "next/link";

const SidbarAndMainContaint = ({ breadcrumbs, sidbarContaint, mainContaint }) => {
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
        <div className="ml-[90px] my-5 hidden md:block">
          <div className="breadcrumbs text-sm">
            <ul>
              {breadcrumbs?.map((breadcrumb, index) => (
                <li key={index}>
                  {breadcrumb.link ? (
                    <Link
                      href={breadcrumb.link}
                      className="hover:text-mainColor transition-colors duration-200"
                    >
                      {breadcrumb.icon && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 mr-2 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={breadcrumb.icon}
                          />
                        </svg>
                      )}
                      {breadcrumb.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                      {breadcrumb.icon && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 mr-2 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={breadcrumb.icon}
                          />
                        </svg>
                      )}
                      {breadcrumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

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
