import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div>
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
    </div>
  );
};

export default Breadcrumbs;
