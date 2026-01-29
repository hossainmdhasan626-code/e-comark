"use client";
import React, { useState } from "react";
import Link from "next/link";
import Title from "../../ui(reusable)/Title";

const OrderHistoryDetails = () => {
  const [orders] = useState([
    {
      id: 1,
      reference: "ECMRK2024001",
      date: "01/15/2025",
      totalPrice: "$245.50",
      payment: "Credit Card",
      status: "Delivered",
      statusColor: "green",
      items: 3,
    },
    {
      id: 2,
      reference: "ECMRK2024002",
      date: "01/10/2025",
      totalPrice: "$128.00",
      payment: "PayPal",
      status: "Shipped",
      statusColor: "blue",
      items: 2,
    },
    {
      id: 3,
      reference: "ECMRK2024003",
      date: "12/28/2024",
      totalPrice: "$89.99",
      payment: "Bank Transfer",
      status: "Processing",
      statusColor: "yellow",
      items: 1,
    },
    {
      id: 4,
      reference: "ECMRK2024004",
      date: "12/15/2024",
      totalPrice: "$456.75",
      payment: "Credit Card",
      status: "Delivered",
      statusColor: "green",
      items: 5,
    },
    {
      id: 5,
      reference: "ECMRK2024005",
      date: "11/30/2024",
      totalPrice: "$199.00",
      payment: "Cash on Delivery",
      status: "Cancelled",
      statusColor: "red",
      items: 2,
    },
  ]);

  const getStatusColor = (color) => {
    const colors = {
      green: "bg-green-100 text-green-800 border-green-200",
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
      red: "bg-red-100 text-red-800 border-red-200",
    };
    return colors[color] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="px-4 md:px-0 bg-white">
      {/* Header */}
      <div className="mb-8">
        {/* mainContaintTitleRendar */}
        <Title titleOne={"ORDER HISTORY"} />
      </div>

      {/* Orders List */}
      {orders.length > 0 ? (
        <div className="space-y-6">
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Order Reference
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Total Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Payment
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
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-semibold text-mainColor">
                          {order.reference}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{order.date}</td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-gray-900">
                          {order.totalPrice}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {order.payment}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${getStatusColor(
                            order.statusColor,
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-start gap-2">
                          <button
                            className="px-4 py-2 bg-mainColor hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                            title="View Details"
                          >
                            DETAILS
                          </button>
                          {order.status === "Delivered" && (
                            <button
                              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                              title="Reorder"
                            >
                              REORDER
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
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg border-2 border-gray-200 p-4 hover:border-gray-300 transition-all"
              >
                {/* Order Header */}
                <div className="flex justify-between items-start mb-3 pb-3 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                      Order Reference
                    </p>
                    <p className="font-bold text-mainColor">
                      {order.reference}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full border ${getStatusColor(
                      order.statusColor,
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>

                {/* Order Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      Date:
                    </span>
                    <span className="text-sm text-gray-900">{order.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      Total:
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {order.totalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      Payment:
                    </span>
                    <span className="text-sm text-gray-900">
                      {order.payment}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      Items:
                    </span>
                    <span className="text-sm text-gray-900">
                      {order.items} {order.items === 1 ? "item" : "items"}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-mainColor hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-200">
                    DETAILS
                  </button>
                  {order.status === "Delivered" && (
                    <button className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-all duration-200">
                      REORDER
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="bg-gray-50 rounded-lg border-2 border-gray-200 p-6 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-mainColor mb-2">
                  {orders.length}
                </p>
                <p className="text-sm text-gray-600 font-semibold uppercase">
                  Total Orders
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 mb-2">
                  {orders.filter((o) => o.status === "Delivered").length}
                </p>
                <p className="text-sm text-gray-600 font-semibold uppercase">
                  Delivered
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  {
                    orders.filter(
                      (o) =>
                        o.status === "Processing" || o.status === "Shipped",
                    ).length
                  }
                </p>
                <p className="text-sm text-gray-600 font-semibold uppercase">
                  In Progress
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
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <p className="text-gray-600 text-lg font-semibold">No orders yet</p>
          <p className="text-gray-500 mt-2 mb-4">
            Start shopping to see your order history here
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

export default OrderHistoryDetails;
