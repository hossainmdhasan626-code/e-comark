"use client";
import { useLazyGetProductsQuery } from "@/app/redux/api/cart/cartApi";
import Card from "../../ui(reusable)/Card";
import { useEffect, useLayoutEffect } from "react";

const CartRendar = () => {
  const [fetchCartData, { data }] = useLazyGetProductsQuery();

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);

  return (
    <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((item) => {
        return <Card key={item?.id} item={item} />;
      })}
    </div>
  );
};

export default CartRendar;
