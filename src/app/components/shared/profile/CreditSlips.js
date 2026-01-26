"use client";
import React, { useState } from "react";
import Link from "next/link";

const CreditSlips = () => {
  const [creditSlips] = useState([
    {
      id: 1,
      creditSlipNumber: "CS-2025-001",
      orderReference: "ECMRK2024001",
      dateIssued: "01/20/2025",
      amount: "$45.50",
      status: "Processed",
      statusColor: "green",
    },
    {
      id: 2,
      creditSlipNumber: "CS-2025-002",
      orderReference: "ECMRK2024003",
      dateIssued: "01/05/2025",
      amount: "$89.99",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 3,
      creditSlipNumber: "CS-2024-078",
      orderReference: "ECMRK2024005",
      dateIssued: "12/18/2024",
      amount: "$199.00",
      status: "Processed",
      statusColor: "green",
    },
  ]);

  const getStatusColor = (color) => {
    const colors = {
      green: "bg-green-100 text-green-800 border-green-200",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
      red: "bg-red-100 text-red-800 border-red-200",
    };
    return colors[color] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const handleDownloadPDF = (creditSlipNumber) => {
    // Simulate PDF download
    alert(`Downloading credit slip: ${creditSlipNumber}`);
  };

  return (
    <div className="px-4 md:px-0 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b-4 border-mainColor pb-3 inline-block">
          CREDIT SLIPS
        </h2>
        <p className="text-gray-600 mt-4">
          Credit slips you have received after returns or cancellations.
        </p>
      </div>

      {/* Credit Slips List */}
      {creditSlips.length > 0 ? (
        <div className="space-y-6">
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Credit Slip
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Order Reference
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Date Issued
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Amount
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
                  {creditSlips.map((slip) => (
                    <tr
                      key={slip.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-bold text-mainColor">
                          {slip.creditSlipNumber}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href="#"
                          className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                        >
                          {slip.orderReference}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {slip.dateIssued}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-gray-900">
                          {slip.amount}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${getStatusColor(
                            slip.statusColor
                          )}`}
                        >
                          {slip.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() =>
                              handleDownloadPDF(slip.creditSlipNumber)
                            }
                            className="flex items-center gap-2 px-4 py-2 bg-mainColor hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Download PDF"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                              />
                            </svg>
                            PDF
                          </button>
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
            {creditSlips.map((slip) => (
              <div
                key={slip.id}
                className="bg-white rounded-lg border-2 border-gray-200 p-4 hover:border-gray-300 transition-all"
              >
                {/* Credit Slip Header */}
                <div className="flex justify-between items-start mb-3 pb-3 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                      Credit Slip
                    </p>
                    <p className="font-bold text-mainColor">
                      {slip.creditSlipNumber}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full border ${getStatusColor(
                      slip.statusColor
                    )}`}
                  >
                    {slip.status}
                  </span>
                </div>

                {/* Credit Slip Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      Order Reference:
                    </span>
                    <Link
                      href="#"
                      className="text-sm text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                    >
                      {slip.orderReference}
                    </Link>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      Date Issued:
                    </span>
                    <span className="text-sm text-gray-900">
                      {slip.dateIssued}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 font-semibold">
                      Amount:
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {slip.amount}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleDownloadPDF(slip.creditSlipNumber)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-mainColor hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  DOWNLOAD PDF
                </button>
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
                  About Credit Slips
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Credit slips are issued when you return items or cancel an
                  order. The amount shown will be refunded to your original
                  payment method within 5-10 business days for processed slips.
                  You can download your credit slip as a PDF for your records.
                </p>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="bg-gray-50 rounded-lg border-2 border-gray-200 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-mainColor mb-2">
                  {creditSlips.length}
                </p>
                <p className="text-sm text-gray-600 font-semibold uppercase">
                  Total Credit Slips
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 mb-2">
                  $
                  {creditSlips
                    .reduce(
                      (total, slip) =>
                        total + parseFloat(slip.amount.replace("$", "")),
                      0
                    )
                    .toFixed(2)}
                </p>
                <p className="text-sm text-gray-600 font-semibold uppercase">
                  Total Amount
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
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <p className="text-gray-600 text-lg font-semibold">
            No credit slips available
          </p>
          <p className="text-gray-500 mt-2">
            You haven&apos;t received any credit slips yet
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

export default CreditSlips;