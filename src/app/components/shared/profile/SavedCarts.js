"use client";
import React, { useState } from "react";
import Link from "next/link";

const SavedCarts = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "p1",
      name: "Arduino Uno R3",
      price: 470,
      originalPrice: 561,
      quantity: 2,
      discount: "BDT 91",
    },
    {
      id: "p2",
      name: "Ultrasonic Sensor HC-SR04",
      price: 150,
      originalPrice: 200,
      quantity: 3,
      discount: "BDT 50",
    },
    {
      id: "p3",
      name: "DHT22 Temperature Sensor",
      price: 280,
      originalPrice: 320,
      quantity: 1,
      discount: "BDT 40",
    },
  ]);


  const handleUpdateQuantity = (itemId, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleAddToActiveCart = () => {
    alert("Cart items will be added to your active shopping cart!");
  };

  const handleDeleteCart = () => {
    if (confirm("Are you sure you want to delete this cart?")) {
      setCartItems([]);
    }
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="px-4 md:px-0 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b-4 border-mainColor pb-3 inline-block">
          SAVED CART
        </h2>
        <p className="text-gray-600 mt-4">
          Manage your saved shopping cart. Add items to your active cart or continue
          shopping.
        </p>
      </div>

      {/* Cart Content */}
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                SHOPPING CART
              </h4>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-all"
                  >
                    {/* Product Image Placeholder */}
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-12 h-12 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-900 mb-2">{item.name}</h5>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-mainColor">
                          BDT {item.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          BDT {item.originalPrice}
                        </span>
                        <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded">
                          {item.discount}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border-2 border-gray-300 rounded">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            className="px-3 py-1 hover:bg-gray-100 transition-colors font-bold"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 border-x-2 border-gray-300 font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="px-3 py-1 hover:bg-gray-100 transition-colors font-bold"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-bold text-gray-900">
                          BDT {(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-800 transition-colors flex-shrink-0"
                      title="Remove item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <Link
                href="/"
                className="mt-4 text-gray-700 hover:text-mainColor transition-colors font-semibold flex items-center gap-1"
              >
                <span>‹</span> Continue shopping
              </Link>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 sticky top-4">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">
                    {cartItems.length} items
                  </span>
                  <span className="text-gray-900 font-bold">
                    BDT {totalAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Shipping</span>
                  <span className="text-green-600 font-bold">Free</span>
                </div>
                <div className="pt-4 border-t-2 border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-900 font-bold text-lg">
                      Total (tax excl.)
                    </span>
                    <span className="text-gray-900 font-bold text-lg">
                      BDT {totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleAddToActiveCart}
                  className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  ADD TO ACTIVE CART
                </button>
                <button
                  onClick={handleDeleteCart}
                  className="w-full px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  DELETE CART
                </button>
              </div>

              {/* Info Badges */}
              <div className="mt-6 space-y-3 pt-6 border-t-2 border-gray-200">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">
                    STORE PICKUP AVAILABLE!
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">
                    FREE SHIP OVER 5000 BDT
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-mainColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">
                    QUALITY PRODUCT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 mx-auto text-gray-400 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <p className="text-gray-600 text-lg font-semibold">Your saved cart is empty</p>
          <p className="text-gray-500 mt-2 mb-4">
            Add items to your cart and save it for later
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-mainColor hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            START SHOPPING
          </Link>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="flex items-center gap-4 pt-8 border-t border-gray-300 mt-8">
        <Link
          href="/profile"
          className="text-gray-700 hover:text-mainColor transition-colors duration-200 font-semibold flex items-center gap-1"
        >
          <span>‹</span> Back to your account
        </Link>
        <span className="text-gray-400">•</span>
        <Link
          href="/"
          className="text-gray-700 hover:text-mainColor transition-colors duration-200 font-semibold flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
          Home
        </Link>
      </div>
    </div>
  );
};

export default SavedCarts;