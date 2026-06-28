"use client";
import { use, useState } from "react";
import Link from "next/link";
import { useGetFilterProductsDetailsQuery } from "@/app/redux/api/cart/cartApi";
import {
  useAddToCartMutation,
  useIncludesItemInCartListQuery,
} from "@/app/redux/api/cart/AddtoCartApi";
import IsExistInAddToCartBtn from "@/app/components/ui(reusable)/IsExistInAddToCartBtn";
import InnerImageZoom from "react-inner-image-zoom";
import "inner-image-zoom/lib/styles.min.css";
import TabSection from "@/app/components/shared/descriptionPage/TabSection";
import Image from "next/image";
import Breadcrumbs from "@/app/components/ui(reusable)/Breadcrumbs";

const ProductDetails = ({ params }) => {
  const unwrappedParams = use(params);
  const id = unwrappedParams?.id;

  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(null);

  const { data: product, isLoading: filterProductIsLoading } =
    useGetFilterProductsDetailsQuery(id);

  const [addToCart, { isLoading: addToCartIsLoading }] = useAddToCartMutation();

  const handleQuantity = (type) => {
    if (type === "plus") {
      setQuantity((prev) => prev + 1);
    } else if (type === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      for (let i = 0; i < quantity; i++) {
        await addToCart({
          ...product,
          cartItemId: Date.now() + i,
        });
      }
    } catch (error) {
      console.error("Failed to add items:", error);
    }
  };

  if (filterProductIsLoading)
    return (
      <div className="text-center py-20 font-bold text-xl">
        Loading Product Details...
      </div>
    );
  if (!product)
    return (
      <div className="text-center py-20 font-bold text-xl text-red-500">
        Product not found!
      </div>
    );

  const currentImage = activeImg || product?.image || (product?.images && product?.images[0]);
  const productImages = product?.image ? [product.image] : (product?.images || []);

  const dynamicBreadcrumbs = [
    { label: "Home", link: "/" }
  ];

  if (product?.categoryInfo) {
    dynamicBreadcrumbs.push({ 
      label: product.categoryInfo.name, 
      link: `/?category=${product.categoryInfo.id}` 
    });
  }

  if (product?.subCategoryInfo) {
    dynamicBreadcrumbs.push({ 
      label: product.subCategoryInfo.name, 
      link: `/?category=${product.categoryInfo?.id}&subcategory=${product.subCategoryInfo.id}` 
    });
  }

  dynamicBreadcrumbs.push({ 
    label: product?.title || product?.name, 
    link: null 
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Dynamic Breadcrumbs */}
        <div className="-ml-[90px]">
          <Breadcrumbs breadcrumbs={dynamicBreadcrumbs} />
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 bg-gray-100">
            {/* mainImg */}
            <div className="bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[400px] border border-gray-200">
              <InnerImageZoom
                src={currentImage}
                zoomSrc={currentImage}
                zoomType="hover"
                isFluidWidth={true}
                className="w-full h-full object-contain"
              />
            </div>

            {/* chotoClickErImgGuli */}
            <div className="grid grid-cols-5 gap-2 mt-4">
              {productImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImg(img)}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    currentImage === img
                      ? "border-mainColor"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    width={100}
                    height={100}
                    src={img}
                    alt={`thumb-${index}`}
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div> */}
          </div>

          <div className="md:w-1/2 p-8 self-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
              {product?.title || product?.name}
            </h1>
            <p className="text-3xl font-bold text-mainColor my-4">
              ${product?.price}
            </p>

            <div 
              className="text-gray-500 line-clamp-3 mb-6"
              dangerouslySetInnerHTML={{ __html: product?.description || product?.shortDescription }}
            />

            <div className="flex flex-col gap-3 mb-8">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Select Quantity
              </span>
              <div className="flex items-center border border-gray-200 w-max rounded-xl overflow-hidden bg-gray-50">
                <button
                  onClick={() => handleQuantity("minus")}
                  className="px-5 py-3 hover:bg-gray-200 transition-colors text-xl font-bold"
                >
                  −
                </button>
                <span className="px-8 py-3 font-bold text-lg border-x border-gray-200 bg-white min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantity("plus")}
                  className="px-5 py-3 hover:bg-gray-200 transition-colors text-xl font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <IsExistInAddToCartBtn
              id={id}
              loading={addToCartIsLoading}
              onClick={handleAddToCart}
            />
          </div>
        </div>

        <TabSection product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
