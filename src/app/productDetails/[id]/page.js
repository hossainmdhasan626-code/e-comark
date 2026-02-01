"use client";
import { use, useState } from "react"; // useState add kora holo
import Link from "next/link";
import { useGetFilterProductsQuery } from "@/app/redux/api/cart/cartApi";
import {
  useAddToCartMutation,
  useIncludesItemInCartListQuery,
} from "@/app/redux/api/cart/AddtoCartApi";
import Image from "next/image";
import IsExistInAddToCartBtn from "@/app/components/ui(reusable)/IsExistInAddToCartBtn";

const ProductDetails = ({ params }) => {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  // Quantity State
  const [quantity, setQuantity] = useState(1);

  // RTK
  const { data: product, isLoading: filterProductIsLoading } =
    useGetFilterProductsQuery(id);
  const { data: isExistInCartList } = useIncludesItemInCartListQuery(id);

  const reviews = product?.reviews;

  const [addToCart, { isLoading: addToCartIsLoading }] = useAddToCartMutation();

  // Quantity barano ba komanor logic
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4 bg-gray-100 flex items-center justify-center relative min-h-[300px]">
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={500}
              className="object-contain p-6 hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 p-8 self-center">
            <nav className="text-sm text-gray-400 mb-2">
              <Link href="/" className="hover:text-mainColor">
                {" "}
                Shop{" "}
              </Link>{" "}
              / {product.category}
            </nav>
            <h1 className="text-4xl font-extrabold text-gray-900">
              {product.title}
            </h1>
            <p className="text-3xl font-bold text-mainColor my-4">
              ${product.price}
            </p>

            <p className="text-gray-500 line-clamp-2 mb-6">
              {product.shortDescription}
            </p>

            {/* QUANTITY SELECTOR */}
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

        {/* TAB SECTION (NO CHANGES HERE) */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div role="tablist" className="tabs tabs-bordered w-full">
            <input
              type="radio"
              name="product_tabs"
              role="tab"
              className="tab font-bold text-lg h-16"
              aria-label="Description"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-8">
              <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.fullDescription}
                </p>
                {product.specifications && (
                  <div className="mt-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Key Specifications:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-5 text-gray-600">
                      {product.specifications.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <input
              type="radio"
              name="product_tabs"
              role="tab"
              className="tab font-bold text-lg h-16"
              aria-label="Warranty"
            />
            <div role="tabpanel" className="tab-content p-8">
              <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                <h3 className="text-2xl font-bold mb-4">Warranty & Policy</h3>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <p className="text-xl font-bold text-blue-900 mb-4">
                    {product.warranty}
                  </p>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg">
                    {product.warrantyDetails?.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="product_tabs"
              role="tab"
              className="tab font-bold text-lg h-16"
              aria-label="Reviews"
            />
            <div role="tabpanel" className="tab-content p-8">
              <div className="max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  Customer Reviews{" "}
                  <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-500">
                    {reviews?.length}
                  </span>
                </h2>
                {reviews && reviews.length > 0 ? (
                  <div className="space-y-6">
                    {reviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="border-b border-gray-50 pb-5 last:border-0"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                            {rev.user[0]}
                          </div>
                          <div>
                            <span className="font-bold text-gray-900 block leading-none">
                              {rev.user}
                            </span>
                            <div className="flex text-yellow-400 text-xs mt-1">
                              {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                  {i < rev.rating ? "★" : "☆"}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 italic leading-relaxed pl-1">
                          {rev.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-lg italic text-center py-10">
                    No reviews yet for this product.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
