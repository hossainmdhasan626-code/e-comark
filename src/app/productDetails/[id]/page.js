"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import {
  useAddReviewMutation,
  useGetFilterProductsQuery,
} from "@/app/redux/api/cart/cartApi";
import { useSelector } from "react-redux";
import AuthBtn from "@/app/components/ui(reusable)/AuthBtn";
import { useAddToCartMutation } from "@/app/redux/api/cart/AddtoCartApi";
import Image from "next/image";

const ProductDetails = ({ params }) => {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");

  // apiThekeReviewAisaEkhaneThakboArStateUseKorarKaronHoiloJodiSoraSoriAmiReviewKeMutation
  // KoreDeiTaileOiTaRunTimeEShowKorbeNaTaiReviewAsleOitakeStateNiyeuseEffectUseKoChiEkhonUser
  // ReviewAddKorlaiuseEffectErKaroneRuntimeiReviewBoxeNewReviewDekahJaibo
  const [localReviews, setLocalReviews] = useState([]);

  // RTK
  const { data: product, isLoading: filterProductIsLoading } =
    useGetFilterProductsQuery(id);
  const [addReview] = useAddReviewMutation();

  // registaredUserNakiGestChackErJonno
  const user = useSelector((state) => state.auth);

  // addToCartEDataAddKorarJonno
  const [addToCart, { isLoading: addToCartIsLoading }] = useAddToCartMutation();

  const handleAddToCart = async () => {
    await addToCart(product);
    alert("pukki");
  };
  useEffect(() => {
    if (product?.reviews) {
      setLocalReviews(product.reviews);
    }
  }, [product]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (userRating === 0) return alert("Please select a rating!");

    const newReview = {
      id: Date.now(),
      user: "Guest User",
      rating: userRating,
      comment: userComment,
    };

    await addReview(newReview, id);
    // লোকাল লিস্টের শুরুতে নতুন রিভিউ যোগ করা
    setLocalReviews([newReview, ...localReviews]);
    setUserRating(0);
    setUserComment("");
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
        {/* PRODUCT INFO CARD */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4 bg-gray-100 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              className="max-h-[400px] object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 p-8 self-center">
            <nav className="text-sm text-gray-400 mb-2">
              <Link href="/" className="hover:text-mainColor">
                Shop
              </Link>{" "}
              / {product.category}
            </nav>
            <h1 className="text-4xl font-extrabold text-gray-900">
              {product.title}
            </h1>
            <p className="text-3xl font-bold text-mainColor my-4">
              ${product.price}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>
            <button className="mt-8 w-full md:w-max bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-mainColor transition-all shadow-lg hover:shadow-orange-100">
              <AuthBtn onClickAction={handleAddToCart}>
                {addToCartIsLoading ? "Adding..." : "ADD TO CART"}
              </AuthBtn>
            </button>
          </div>
        </div>

        {/* REVIEWS SECTION (3 COL GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT 2 COLS: SHOW REVIEWS WITH FIXED HEIGHT & SCROLL */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 h-full flex flex-col">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                Customer Reviews{" "}
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-500">
                  {localReviews.length}
                </span>
              </h2>

              {localReviews.length > 0 ? (
                /* Fixed Height and Scroll Logic */
                <div className="space-y-6 max-h-[450px] overflow-y-auto pr-4 custom-scrollbar">
                  {localReviews.map((rev) => (
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
                              <span key={i}>{i < rev.rating ? "★" : "☆"}</span>
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
                <div className="flex-grow flex flex-col items-center justify-center py-10 opacity-40">
                  <p className="text-gray-500 text-lg italic mt-2">
                    No reviews yet for this product.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT 1 COL: ADD REVIEW FORM */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 sticky top-4">
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                Write a Review
              </h3>
              <form onSubmit={handleReviewSubmit} className="space-y-5">
                <div>
                  <p className="text-sm font-semibold mb-3 text-gray-600">
                    How would you rate it?
                  </p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setUserRating(star)}
                        className={`text-3xl transition-all duration-200 ${
                          star <= userRating
                            ? "text-yellow-400 scale-110"
                            : "text-gray-200 hover:text-yellow-200"
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-600">
                    Your Feedback
                  </label>
                  <textarea
                    rows="5"
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-mainColor focus:bg-white transition-all text-gray-700"
                    placeholder="Share your experience with this component..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-mainColor text-white py-4 rounded-2xl font-bold hover:shadow-lg hover:brightness-110 transition-all active:scale-95"
                >
                  SUBMIT REVIEW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
