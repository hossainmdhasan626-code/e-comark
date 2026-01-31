import Information from "@/app/components/shared/profile/Information";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading Profile...</div>}>
      <div>
        <Information />
      </div>
    </Suspense>
  );
};

export default page;
