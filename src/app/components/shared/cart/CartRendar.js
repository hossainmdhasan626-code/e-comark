"use client";
import {
  useGetProductsBySearchQuery,
  useGetProductsBySubCategoryQuery,
  useGetProductsQuery,
} from "@/app/redux/api/cart/cartApi";
import Card from "../../ui(reusable)/Card";
import { useEffect, useLayoutEffect } from "react";
import CartSkeleton from "../skeleton/CartSkeleton";
import { useSearchParams } from "next/navigation";
import IsErrorRTK from "../../ui(reusable)/IsErrorRTK";

const CartRendar = () => {
  // paramsThekeIdBerKoreFiltarKora
  const searchParams = useSearchParams();
  const cat_Id = searchParams.get("cat_Id");
  const sub_Id = searchParams.get("sub_Id");
  const search_params = searchParams.get("search");

  // kokhonKonApiDataAsbeTarJonno
  const isSearching = !!search_params;
  const isFiltaring = !!(cat_Id && sub_Id) && !isSearching;
  const isDefault = !isSearching && !isFiltaring;

  // RTK

  // landingPageCartData
  const {
    data: cartData,
    isLoading: isCartLoading,
    isError,
    error,
  } = useGetProductsQuery(undefined, { skip: !isDefault });
  // filtarCartData
  const {
    data: cartDataByFiltar,
    isLoading: isCartDataFiltarLoading,
    isError: isErrorFilter,
    error: errorFilter,
  } = useGetProductsBySubCategoryQuery(
    { cat_Id, sub_Id },
    { skip: !isFiltaring },
  );
  // searchCartData
  const {
    data: cartDataBySearch,
    isLoading: isLoadingBySearch,
    isError: isErrorSearch,
    error: errorSearch,
  } = useGetProductsBySearchQuery({ search_params }, { skip: !isSearching });

  //
  let data = [];

  if (isFiltaring) {
    // cartDataByFiltar
    data = cartDataByFiltar?.results || [];
  } else if (isSearching) {
    // cartBySearch
    data = cartDataBySearch?.results || [];
  } else {
    // landingCartData
    data =
      cartData?.results?.flatMap((results) =>
        results?.sub_categories?.flatMap((pro) => pro?.products),
      ) || [];
  }

  // sobIsErrorArErrorKeEkSatheNiyeAslam
  const haveIsError = isError || isErrorSearch || isErrorFilter;
  const haveError = error || errorFilter || errorSearch;

  // erroHandle
  if (haveIsError) {
    return (
      <IsErrorRTK
        isError={isError || isErrorFilter || isErrorFilter}
        error={haveError}
      />
    );
  }

  return (
    <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isCartLoading || isCartDataFiltarLoading || isLoadingBySearch
        ? [...Array(10)].map((_, i) => <CartSkeleton key={i} />)
        : data?.map((item) => {
            return <Card key={item?.id} item={item} />;
          })}
    </div>
  );
};

export default CartRendar;
