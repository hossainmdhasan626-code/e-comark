"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Title from "../../ui(reusable)/Title";
import { useGetCartItemsQuery } from "@/app/redux/api/cart/AddtoCartApi";

const SavedCarts = () => {
  const { data: addToCart = [], isLoading } = useGetCartItemsQuery();
  const [cartItems, setCartItems] = useState([]);

  // API theke data asle state update kora
  useEffect(() => {
    if (addToCart) {
      setCartItems(addToCart);
    }
  }, [addToCart]);

  const handleUpdateQuantity = (itemId, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item,
      ),
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0,
  );

  if (isLoading)
    return <div className="p-10 text-center font-bold">Loading Cart...</div>;

  return (
    <div className="px-4 md:px-0 bg-white">
      <div className="mb-8">
        <Title
          titleOne={"SAVED CART"}
          titleTwo={"Manage your saved shopping cart and proceed to checkout."}
        />
      </div>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm">
              <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                YOUR ITEMS{" "}
                <span className="bg-mainColor/10 text-mainColor px-2 py-0.5 rounded text-sm">
                  {cartItems.length}
                </span>
              </h4>

              {/* Scrollable Container for 4+ items */}
              <div
                className={`space-y-4 pr-2 ${cartItems.length > 4 ? "max-h-[550px] overflow-y-auto custom-scrollbar" : ""}`}
              >
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300"
                  >
                    {/* Image Area */}
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-contain w-full h-full p-2"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">No Image</span>
                      )}
                    </div>

                    <div className="flex-1">
                      <h5 className="font-bold text-gray-800 line-clamp-1">
                        {item.title}
                      </h5>
                      <p className="text-mainColor font-bold">
                        BDT {item.price}
                      </p>

                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center bg-white border border-gray-200 rounded-lg">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            className="px-3 py-1 hover:text-mainColor font-bold"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 border-x border-gray-100 font-semibold">
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="px-3 py-1 hover:text-mainColor font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors self-start p-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Summary (Right Side) */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 text-white rounded-3xl p-8 sticky top-4">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              <div className="space-y-4 border-b border-gray-700 pb-6 mb-6">
                <div className="flex justify-between opacity-80">
                  <span>Subtotal</span>
                  <span>BDT {totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-400">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
              </div>
              <div className="flex justify-between text-2xl font-bold mb-8">
                <span>Total</span>
                <span>BDT {totalAmount.toLocaleString()}</span>
              </div>
              <button className="w-full py-4 bg-mainColor hover:bg-orange-600 rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg shadow-orange-900/20">
                CHECKOUT NOW
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State with vibrant colors */
        <div className="flex flex-col items-center justify-center py-20 bg-orange-50 rounded-[40px] border-2 border-dashed border-orange-200">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 animate-bounce">
            <span className="text-4xl">🛒</span>
          </div>
          <h3 className="text-2xl font-extrabold text-gray-800">
            Your cart is feeling light!
          </h3>
          <p className="text-gray-500 mt-2 mb-8 max-w-xs text-center">
            Looks like you haven't added any products to your cart yet. Let's
            find something special!
          </p>
          <Link
            href="/"
            className="bg-mainColor text-white px-10 py-4 rounded-2xl font-extrabold hover:shadow-2xl hover:shadow-orange-200 transition-all active:scale-95"
          >
            START EXPLORING
          </Link>
        </div>
      )}
    </div>
  );
};

export default SavedCarts;
