"use client";
import {
  useGetProductsBySearchQuery,
  useGetProductsBySubCategoryQuery,
  useGetProductsQuery,
} from "@/app/redux/api/cart/cartApi";
import Card from "../../ui(reusable)/Card";
import { useEffect, useState } from "react";
import CartSkeleton from "../skeleton/CartSkeleton";
import { useSearchParams } from "next/navigation";

const CartRendar = () => {
  const [fetchCartData, { data, isLoading: isCartLoading }] =
    useLazyGetProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  const subcategoryId = searchParams.get("subcategory");
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    fetchCartData({ categoryId, subcategoryId, searchQuery });
    setCurrentPage(1);
  }, [fetchCartData, categoryId, subcategoryId, searchQuery]);

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data?.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {isCartLoading
          ? [...Array(10)].map((_, i) => <CartSkeleton key={i} />)
          : paginatedData?.map((item) => {
            return <Card key={item?.id} item={item} />;
          })}
      </div>

      {!isCartLoading && totalPages > 1 && (
        <div className="join mt-12 mb-8">
          <button 
            className="join-item btn" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          
          <button className="join-item btn pointer-events-none">
            Page {currentPage} of {totalPages}
          </button>
          
          <button 
            className="join-item btn" 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      )}
    </div>
  );
};

export default CartRendar;
