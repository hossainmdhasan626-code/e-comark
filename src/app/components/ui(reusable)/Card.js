import React from "react";
import Image from "next/image";
import AuthBtn from "./AuthBtn";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div className="w-fullmax-w-[360px] transition-all hover:shadow-md">
      <div className="card bg-base-100 shadow-sm border border-gray-100 overflow-hidden">
        <figure className="bg-gray-200 h-48 w-full flex items-center justify-center relative overflow-hidden">
          <Link href={`productDetails/${item?.id}`}>
          {item?.image ? (
            <Image
              src={item.image}
              alt={item?.title || "Product image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <span className="text-gray-500 font-bold text-2xl tracking-widest uppercase">
              Card
            </span>
          )}
          </Link>
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
            <AuthBtn
              className={"btn btn-primary btn-sm px-6"}
              routhName={"/profile?PROFILE_TAB=SAVED%20CARTS"}
            >
              <Link href={"/profile?PROFILE_TAB=SAVED%20CARTS"}>Add to card</Link>
            </AuthBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
