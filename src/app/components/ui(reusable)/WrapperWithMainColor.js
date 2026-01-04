import React from "react";

const WrapperWithMainColor = ({ children }) => {
  return <div className="flex justify-center items-center h-[60px] bg-mainColor">{children}</div>;
};

export default WrapperWithMainColor;
