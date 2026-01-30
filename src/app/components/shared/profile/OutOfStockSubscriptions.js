"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Title from "../../ui(reusable)/Title";

const OutOfStockSubscriptions = () => {
  const initialSubscriptions = useMemo(
    () => [
      {
        id: "sub1",
        product: "Arduino Uno R3",
        sku: "SKU-ARD-UNO",
        category: "Development Boards",
        subscribedOn: "01/20/2025",
        status: "Subscribed",
        stockEta: "In 7-10 days",
      },
      {
        id: "sub2",
        product: "Ultrasonic Sensor HC-SR04",
        sku: "SKU-HCSR04",
        category: "Sensors",
        subscribedOn: "01/15/2025",
        status: "Subscribed",
        stockEta: "Restocking soon",
      },
      {
        id: "sub3",
        product: "DHT22 Temperature Sensor",
        sku: "SKU-DHT22",
        category: "Sensors",
        subscribedOn: "12/30/2024",
        status: "Notified",
        stockEta: "Back in stock", // already notified
      },
    ],
    [],
  );

  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);

  const stats = useMemo(() => {
    const active = subscriptions.filter(
      (s) => s.status === "Subscribed",
    ).length;
    const notified = subscriptions.filter(
      (s) => s.status === "Notified",
    ).length;
    return {
      total: subscriptions.length,
      active,
      notified,
    };
  }, [subscriptions]);

  const handleUnsubscribe = (id) => {
    setSubscriptions(subscriptions.filter((s) => s.id !== id));
  };

  const handleMarkNotified = (id) => {
    setSubscriptions(
      subscriptions.map((s) =>
        s.id === id
          ? { ...s, status: "Notified", stockEta: "Back in stock" }
          : s,
      ),
    );
  };

  return (
    <div className="px-4 md:px-0 bg-white">
      {/* Header */}
      <div className="mb-8">
        {/* mainContaintErTitleRendar */}
        <Title
          titleOne={"OUT OF STOCK SUBSCRIPTIONS"}
          titleTwo={
            "Manage alerts for products that are currently unavailable. We willemail you when they are back in stock."
          }
        />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">
            Total subscriptions
          </p>
          <p className="text-3xl font-bold text-mainColor mt-2">
            {stats.total}
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Active</p>
          <p className="text-2xl font-bold text-green-600 mt-2">
            {stats.active}
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Notified</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            {stats.notified}
          </p>
        </div>
      </div>

      {/* List */}
      {subscriptions.length > 0 ? (
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">
              Your subscriptions
            </h3>
            <p className="text-sm text-gray-600">
              Update or cancel alerts anytime
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                      SKU
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                      Subscribed on
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                      ETA
                    </th>
                    <th className="px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {subscriptions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-gray-50">
                      <td className="px-5 py-3 text-gray-900 font-semibold">
                        {sub.product}
                      </td>
                      <td className="px-5 py-3 text-gray-700">{sub.sku}</td>
                      <td className="px-5 py-3 text-gray-700">
                        {sub.category}
                      </td>
                      <td className="px-5 py-3 text-gray-700">
                        {sub.subscribedOn}
                      </td>
                      <td className="px-5 py-3">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${
                            sub.status === "Subscribed"
                              ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                              : "bg-green-100 text-green-800 border-green-200"
                          }`}
                        >
                          {sub.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-gray-700">
                        {sub.stockEta}
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center justify-center gap-2">
                          {sub.status === "Subscribed" && (
                            <button
                              onClick={() => handleMarkNotified(sub.id)}
                              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-colors"
                            >
                              MARK NOTIFIED
                            </button>
                          )}
                          <button
                            onClick={() => handleUnsubscribe(sub.id)}
                            className="px-12 py-4 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {subscriptions.map((sub) => (
              <div
                key={sub.id}
                className="border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">
                      {sub.sku}
                    </p>
                    <p className="text-gray-900 font-bold">{sub.product}</p>
                    <p className="text-xs text-gray-500">{sub.category}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full border ${
                      sub.status === "Subscribed"
                        ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                        : "bg-green-100 text-green-800 border-green-200"
                    }`}
                  >
                    {sub.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-1">
                  Subscribed on: {sub.subscribedOn}
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  ETA: {sub.stockEta}
                </p>
                <div className="flex gap-2">
                  {sub.status === "Subscribed" && (
                    <button
                      onClick={() => handleMarkNotified(sub.id)}
                      className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      MARK NOTIFIED
                    </button>
                  )}
                  <button
                    onClick={() => handleUnsubscribe(sub.id)}
                    className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Empty state */
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
              d="M11.25 3.75l-.625 1.875m0 0l-.625 1.875m.625-1.875h2.5m-2.5 0h-2.5M12.75 3.75l.625 1.875m0 0l.625 1.875m-.625-1.875h-2.5m2.5 0h2.5M4.5 12a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0zm7.5 0h.008v.008H12V12z"
            />
          </svg>
          <p className="text-gray-600 text-lg font-semibold">
            No subscriptions yet
          </p>
          <p className="text-gray-500 mt-2">
            Subscribe to get notified when products come back in stock.
          </p>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
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
              How notifications work
            </h3>
            <ul className="text-gray-700 text-sm space-y-1 leading-relaxed">
              <li>• Subscribe to products that are out of stock.</li>
              <li>• We email you as soon as they return to inventory.</li>
              <li>• Mark as notified or remove subscriptions anytime.</li>
              <li>• Limited stock items may sell out quickly after notice.</li>
            </ul>
          </div>
        </div>
      </div>

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

export default OutOfStockSubscriptions;
