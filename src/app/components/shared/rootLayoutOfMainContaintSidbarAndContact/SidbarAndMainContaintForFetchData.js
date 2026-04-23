"use client";
import { useGetProductsQuery } from "@/app/redux/api/cart/cartApi";
import SidbarAndMainContaint from "./SidbarAndMainContaint";

const SidbarAndMainContaintForFetchData = ({ mainContaint }) => {
  // sidbarErLavelBerKoreAna
  const { data: cartData, isLoading: isCartLoading } = useGetProductsQuery();

  const sidbarLavel = cartData?.results?.map((results) => results) || [];

  return (
    <div>
      <SidbarAndMainContaint
        breadcrumbs={[{ label: "Home", link: "/" }]}
        sidbarContaint={sidbarLavel}
        mainContaint={mainContaint}
      />
    </div>
  );
};

export default SidbarAndMainContaintForFetchData;
