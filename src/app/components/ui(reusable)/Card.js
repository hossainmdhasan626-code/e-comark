import React from "react";

const Card = ({ item }) => {
  return (
    <div className="w-fullmax-w-[360px] transition-all hover:shadow-md">
      <div className="card bg-base-100 shadow-sm border border-gray-100 overflow-hidden">
        <figure className="bg-gray-200 h-48 w-full flex items-center justify-center">
          <span className="text-gray-500 font-bold text-2xl tracking-widest uppercase">
            Card
          </span>
        </figure>

        <div className="card-body p-5">
          <h2 className="card-title text-lg font-bold">
            {item?.title || "Product Title"}
          </h2>

          <p className="text-sm text-gray-600 line-clamp-2">
            {item?.description ||
              "A card component has a figure, a body part, and inside body there are title and actions parts."}
          </p>

          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary btn-sm px-6">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
