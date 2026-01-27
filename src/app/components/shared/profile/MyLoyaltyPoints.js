"use client";
import React, { useMemo } from "react";
import Link from "next/link";

const MyLoyaltyPoints = () => {
  const summary = {
    totalPoints: 1240,
    pendingPoints: 120,
    expiringSoon: 80,
    tier: "Gold",
    tierProgress: 68, // percent to next tier
    nextTier: "Platinum",
  };

  const history = useMemo(
    () => [
      {
        id: 1,
        date: "01/22/2025",
        description: "Order #ECMRK2024007",
        points: +250,
        status: "Confirmed",
      },
      {
        id: 2,
        date: "01/18/2025",
        description: "Review submitted (Arduino Uno R3)",
        points: +40,
        status: "Confirmed",
      },
      {
        id: 3,
        date: "01/15/2025",
        description: "Order #ECMRK2024006",
        points: +320,
        status: "Confirmed",
      },
      {
        id: 4,
        date: "01/10/2025",
        description: "Order #ECMRK2024005",
        points: +410,
        status: "Confirmed",
      },
      {
        id: 5,
        date: "01/05/2025",
        description: "Refund processed",
        points: -60,
        status: "Adjusted",
      },
      {
        id: 6,
        date: "12/28/2024",
        description: "Signup bonus",
        points: +120,
        status: "Confirmed",
      },
    ],
    []
  );

  const rewards = [
    { id: 1, label: "$5 coupon", cost: 500 },
    { id: 2, label: "$10 coupon", cost: 900 },
    { id: 3, label: "Free shipping", cost: 700 },
    { id: 4, label: "15% off", cost: 1200 },
  ];

  const handleRedeem = (label) => {
    alert(`Redeem request for: ${label}`);
  };

  const formatPoints = (pts) => `${pts} pts`;

  return (
    <div className="px-4 md:px-0 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b-4 border-mainColor pb-3 inline-block">
          MY LOYALTY POINTS
        </h2>
        <p className="text-gray-600 mt-4">
          Track your points, tier status, and redeem rewards directly from your
          account.
        </p>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Total points</p>
          <p className="text-3xl font-bold text-mainColor mt-2">
            {formatPoints(summary.totalPoints)}
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Pending</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            {formatPoints(summary.pendingPoints)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Will be confirmed after order delivery
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Expiring soon</p>
          <p className="text-2xl font-bold text-red-600 mt-2">
            {formatPoints(summary.expiringSoon)}
          </p>
          <p className="text-xs text-gray-500 mt-1">Expires in 30 days</p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Tier</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {summary.tier}
          </p>
          <p className="text-xs text-gray-500 mt-1">Next: {summary.nextTier}</p>
        </div>
      </div>

      {/* Tier Progress */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-lg font-bold text-gray-900">Tier progress</p>
            <p className="text-sm text-gray-600">
              Keep earning to reach {summary.nextTier}
            </p>
          </div>
          <span className="text-sm font-semibold text-mainColor">
            {summary.tierProgress}%
          </span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-mainColor"
            style={{ width: `${summary.tierProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Rewards to Redeem */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Redeem rewards</h3>
          <p className="text-sm text-gray-600">
            You can redeem from your available points
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="border-2 border-gray-200 rounded-lg p-4 flex flex-col gap-3"
            >
              <p className="text-lg font-bold text-gray-900">{reward.label}</p>
              <p className="text-sm text-gray-600">
                Cost: <span className="font-semibold">{reward.cost} pts</span>
              </p>
              <button
                onClick={() => handleRedeem(reward.label)}
                disabled={summary.totalPoints < reward.cost}
                className="mt-auto px-4 py-2 bg-mainColor hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {summary.totalPoints < reward.cost
                  ? "Not enough points"
                  : "Redeem"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Points History */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Points history</h3>
          <p className="text-sm text-gray-600">Recent earnings and adjustments</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b-2 border-gray-200">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Points
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {history.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-5 py-3 text-gray-700">{item.date}</td>
                    <td className="px-5 py-3 text-gray-900 font-semibold">
                      {item.description}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`font-bold ${
                          item.points >= 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {item.points > 0 ? `+${item.points}` : item.points}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className="inline-block px-3 py-1 text-xs font-bold rounded-full border bg-green-100 text-green-800 border-green-200"
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className="border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-600 font-semibold">{item.date}</p>
                <span
                  className="px-3 py-1 text-xs font-bold rounded-full border bg-green-100 text-green-800 border-green-200"
                >
                  {item.status}
                </span>
              </div>
              <p className="text-gray-900 font-semibold mb-2">
                {item.description}
              </p>
              <p
                className={`text-lg font-bold ${
                  item.points >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.points > 0 ? `+${item.points}` : item.points} pts
              </p>
            </div>
          ))}
        </div>
      </div>

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
              How points work
            </h3>
            <ul className="text-gray-700 text-sm space-y-1 leading-relaxed">
              <li>• Earn points on every order (1 pt = $1 spent).</li>
              <li>• Points confirm after your order is delivered.</li>
              <li>• Pending points move to available automatically.</li>
              <li>• Points expire 12 months after they are earned.</li>
              <li>• Only available points can be redeemed.</li>
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

export default MyLoyaltyPoints;