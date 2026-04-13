import React from "react";

const CarosualSkeleton = () => {
  return (
    <div className="h-[30vh] w-full ">
      <div className="relative w-full h-[30vh] skeleton rounded-xl overflow-hidden">
        <div className="absolute bottom-10 left-6 w-1/2">
          <div className="h-8 w-full skeleton bg-gray-500/30 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default CarosualSkeleton;
