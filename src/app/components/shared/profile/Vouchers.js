"use client";
import React, { useState } from "react";
import Link from "next/link";

const Vouchers = () => {
  const [vouchers] = useState([
    {
      id: 1,
      code: "WELCOME2025",
      description: "Welcome discount for new customers",
      discount: "20%",
      minPurchase: "$50.00",
      expiryDate: "03/31/2025",
      status: "Active",
      statusColor: "green",
    },
    {
      id: 2,
      code: "SAVE50",
      description: "Save $50 on orders over $200",
      discount: "$50",
      minPurchase: "$200.00",
      expiryDate: "02/28/2025",
      status: "Active",
      statusColor: "green",
    },
    {
      id: 3,
      code: "FREESHIP",
      description: "Free shipping on all orders",
      discount: "Free Shipping",
      minPurchase: "$0.00",
      expiryDate: "12/31/2025",
      status: "Active",
      statusColor: "green",
    },
    {
      id: 4,
      code: "SUMMER2024",
      description: "Summer sale discount",
      discount: "15%",
      minPurchase: "$30.00",
      expiryDate: "08/31/2024",
      status: "Expired",
      statusColor: "red",
    },
    {
      id: 5,
      code: "LOYAL10",
      description: "Loyalty reward voucher",
      discount: "$10",
      minPurchase: "$75.00",
      expiryDate: "01/15/2025",
      status: "Used",
      statusColor: "gray",
    },
  ]);

  const [copiedCode, setCopiedCode] = useState(null);

  const getStatusColor = (color) => {
    const colors = {
      green: "bg-green-100 text-green-800 border-green-200",
      red: "bg-red-100 text-red-800 border-red-200",
      gray: "bg-gray-100 text-gray-800 border-gray-200",
    };
    return colors[color] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleApplyVoucher = (code) => {
    alert(`Voucher ${code} will be applied at checkout`);
  };

  return (
    <div className="px-4 md:px-0 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b-4 border-mainColor pb-3 inline-block">
          MY VOUCHERS
        </h2>
        <p className="text-gray-600 mt-4">
          View and manage your discount vouchers and promotional codes.
        </p>
      </div>

      {/* Vouchers List */}
      {vouchers.length > 0 ? (
        <div className="space-y-6">
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Code
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Discount
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Min Purchase
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Expires
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {vouchers.map((voucher) => (
                    <tr
                      key={voucher.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-mainColor bg-orange-50 px-3 py-1 rounded border border-mainColor">
                            {voucher.code}
                          </span>
                          <button
                            onClick={() => handleCopyCode(voucher.code)}
                            className="text-gray-600 hover:text-mainColor transition-colors"
                            title="Copy code"
                          >
                            {copiedCode === voucher.code ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5 text-green-600"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                                />
                              </svg>
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {voucher.description}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-green-600">
                          {voucher.discount}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {voucher.minPurchase}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {voucher.expiryDate}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${getStatusColor(
                            voucher.statusColor
                          )}`}
                        >
                          {voucher.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          {voucher.status === "Active" && (
                            <button
                              onClick={() => handleApplyVoucher(voucher.code)}
                              className="px-4 py-2 bg-mainColor hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                              APPLY
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {vouchers.map((voucher) => (
              <div
                key={voucher.id}
                className={`bg-white rounded-lg border-2 p-4 transition-all ${
                  voucher.status === "Active"
                    ? "border-mainColor shadow-md"
                    : "border-gray-200"
                }`}
              >
                {/* Voucher Header */}
                <div className="flex justify-between items-start mb-3 pb-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-mainColor bg-orange-50 px-3 py-1 rounded text-sm border border-mainColor">
                      {voucher.code}
                    </span>
                    <button
                      onClick={() => handleCopyCode(voucher.code)}
                      className="text-gray-600 hover:text-mainColor transition-colors"
                      title="Copy code"
                    >
                      {copiedCode === voucher.code ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5 text-green-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full border ${getStatusColor(
                      voucher.statusColor
                    )}`}
                  >
                    {voucher.status}
                  </span>
                </div>

                {/* Voucher Details */}
                <p className="text-sm text-gray-700 mb-4">
                  {voucher.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      Discount:
                    </span>
                    <span className="text-sm font-bold text-green-600">
                      {voucher.discount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      Min Purchase:
                    </span>
                    <span className="text-sm text-gray-900">
                      {voucher.minPurchase}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      Expires:
                    </span>
                    <span className="text-sm text-gray-900">
                      {voucher.expiryDate}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                {voucher.status === "Active" && (
                  <button
                    onClick={() => handleApplyVoucher(voucher.code)}
                    className="w-full px-4 py-2 bg-mainColor hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-200"
                  >
                    APPLY VOUCHER
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Information Box */}
          <div className="bg-blue-50 rounded-lg border-2 border-blue-200 p-6 mt-8">
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-600 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How to Use Vouchers
                </h3>
                <ul className="text-gray-700 text-sm space-y-1 leading-relaxed">
                  <li>• Copy the voucher code by clicking the copy icon</li>
                  <li>
                    • Add items to your cart and proceed to checkout
                  </li>
                  <li>
                    • Enter the voucher code in the discount field at checkout
                  </li>
                  <li>
                    • The discount will be applied automatically if all
                    conditions are met
                  </li>
                  <li>
                    • Only one voucher can be used per order
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="bg-gray-50 rounded-lg border-2 border-gray-200 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-mainColor mb-2">
                  {vouchers.length}
                </p>
                <p className="text-sm text-gray-600 font-semibold uppercase">
                  Total Vouchers
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 mb-2">
                  {vouchers.filter((v) => v.status === "Active").length}
                </p>
                <p className="text-sm text-gray-600 font-semibold uppercase">
                  Active Vouchers
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600 mb-2">
                  {
                    vouchers.filter(
                      (v) => v.status === "Expired" || v.status === "Used"
                    ).length
                  }
                </p>
                <p className="text-sm text-gray-600 font-semibold uppercase">
                  Expired/Used
                </p>
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
              d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <p className="text-gray-600 text-lg font-semibold">
            No vouchers available
          </p>
          <p className="text-gray-500 mt-2">
            Check back later for exclusive discount codes and offers
          </p>
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

export default Vouchers;