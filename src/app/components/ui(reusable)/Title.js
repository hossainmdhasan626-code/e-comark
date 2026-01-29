import React from "react";

const Title = ({ titleOne, titleTwo = null }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b-4 border-mainColor pb-3 inline-block">
        {titleOne}
      </h2>
      {titleTwo && <p className="text-gray-600 mt-4">{titleTwo}</p>}
    </div>
  );
};

export default Title;
