"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Title from "../../ui(reusable)/Title";

const Reviews = () => {
  const products = useMemo(
    () => [
      {
        id: "p1",
        name: "Arduino Uno R3",
        orderRef: "ECMRK2024007",
        purchaseDate: "01/20/2025",
      },
      {
        id: "p2",
        name: "Ultrasonic Sensor HC-SR04",
        orderRef: "ECMRK2024005",
        purchaseDate: "01/10/2025",
      },
      {
        id: "p3",
        name: "DHT22 Temperature Sensor",
        orderRef: "ECMRK2024003",
        purchaseDate: "12/22/2024",
      },
    ],
    [],
  );

  const [reviews, setReviews] = useState([
    {
      id: 1,
      product: products[0],
      rating: 5,
      title: "Great for beginners",
      comment: "Solid board, works perfectly with my projects.",
      date: "01/22/2025",
      status: "Published",
    },
    {
      id: 2,
      product: products[1],
      rating: 4,
      title: "Accurate readings",
      comment: "Easy to integrate, good value for the price.",
      date: "01/18/2025",
      status: "Published",
    },
    {
      id: 3,
      product: products[2],
      rating: 0,
      title: "",
      comment: "Awaiting your review",
      date: "Pending",
      status: "Pending",
    },
  ]);

  const [formData, setFormData] = useState({
    productId: products[0]?.id || "",
    rating: 0,
    title: "",
    comment: "",
  });

  const stats = useMemo(() => {
    const published = reviews.filter((r) => r.status === "Published");
    const pending = reviews.filter((r) => r.status !== "Published");
    const avg =
      published.length === 0
        ? 0
        : (
            published.reduce((sum, r) => sum + r.rating, 0) / published.length
          ).toFixed(1);
    return {
      total: reviews.length,
      published: published.length,
      pending: pending.length,
      average: avg,
    };
  }, [reviews]);

  const starIcon = (filled) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={filled ? "#f59e0b" : "none"}
      stroke="#f59e0b"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M10 1.8l2.472 5.005 5.528.804-4 3.9.944 5.491L10 14.9l-4.944 2.1.944-5.491-4-3.9 5.528-.804z"
      />
    </svg>
  );

  const handleStarClick = (value) => {
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.productId || formData.rating === 0 || !formData.comment) {
      alert("Please select a product, add a rating, and write a comment.");
      return;
    }

    const product = products.find((p) => p.id === formData.productId);
    const newReview = {
      id: Date.now(),
      product,
      rating: formData.rating,
      title: formData.title || "Review",
      comment: formData.comment,
      date: new Date().toLocaleDateString("en-US"),
      status: "Published",
    };

    setReviews([newReview, ...reviews]);
    setFormData({
      productId: products[0]?.id || "",
      rating: 0,
      title: "",
      comment: "",
    });
    alert("Review submitted!");
  };

  const renderStars = (value) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>{starIcon(star <= value)}</span>
      ))}
    </div>
  );

  return (
    <div className="px-4 md:px-0 bg-white">
      {/* Header */}
      <div className="mb-8">
        {/* mainContaintErTitleRendar */}
        <Title
          titleOne={"MY REVIEWS"}
          titleTwo={
            "Share feedback on products you purchased. Published reviews help other shoppers decide."
          }
        />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Total reviews</p>
          <p className="text-3xl font-bold text-mainColor mt-2">
            {stats.total}
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Published</p>
          <p className="text-2xl font-bold text-green-600 mt-2">
            {stats.published}
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Pending</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            {stats.pending}
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Avg rating</p>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-2xl font-bold text-gray-900">{stats.average}</p>
            {renderStars(Math.round(stats.average))}
          </div>
        </div>
      </div>

      {/* Add Review Form */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Write a review</h3>
          <p className="text-sm text-gray-600">
            Only purchased products are listed
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Select product
              </label>
              <select
                value={formData.productId}
                onChange={(e) =>
                  setFormData({ ...formData, productId: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} (Order {p.orderRef})
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">Purchased items only</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Rating
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    className="p-1"
                    aria-label={`Rate ${star} star`}
                  >
                    {starIcon(star <= formData.rating)}
                  </button>
                ))}
                <span className="text-sm text-gray-600">
                  {formData.rating || "Select"}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Title (optional)
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Summarize your review"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Order reference
              </label>
              <input
                type="text"
                value={
                  products.find((p) => p.id === formData.productId)?.orderRef ||
                  ""
                }
                disabled
                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Your review
            </label>
            <textarea
              rows={4}
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              placeholder="Share details about product quality, usability, and your experience."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mainColor focus:border-mainColor bg-white text-gray-900"
            />
            <p className="text-xs text-gray-500 mt-1">
              Keep feedback respectful and specific. Max 500 characters.
            </p>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() =>
                setFormData({
                  productId: products[0]?.id || "",
                  rating: 0,
                  title: "",
                  comment: "",
                })
              }
              className="px-6 py-2.5 bg-gray-400 hover:bg-gray-500 text-white font-bold rounded-lg transition-colors"
            >
              CLEAR
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-mainColor hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
            >
              SUBMIT REVIEW
            </button>
          </div>
        </form>
      </div>

      {/* Reviews List */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Your reviews</h3>
          <p className="text-sm text-gray-600">
            Published and pending feedback
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
                    Order
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Comment
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {reviews.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-5 py-3 text-gray-900 font-semibold">
                      {r.product.name}
                    </td>
                    <td className="px-5 py-3 text-gray-700">
                      {r.product.orderRef}
                    </td>
                    <td className="px-5 py-3">{renderStars(r.rating)}</td>
                    <td className="px-5 py-3 text-gray-700">
                      <p className="font-semibold text-gray-900">{r.title}</p>
                      <p className="text-sm text-gray-600">{r.comment}</p>
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${
                          r.status === "Published"
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-yellow-100 text-yellow-800 border-yellow-200"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-gray-700">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-gray-600 font-semibold">
                    {r.product.orderRef}
                  </p>
                  <p className="text-gray-900 font-bold">{r.product.name}</p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full border ${
                    r.status === "Published"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-yellow-100 text-yellow-800 border-yellow-200"
                  }`}
                >
                  {r.status}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                {renderStars(r.rating)}
              </div>
              {r.title && (
                <p className="text-gray-900 font-semibold mb-1">{r.title}</p>
              )}
              <p className="text-sm text-gray-700 mb-2">{r.comment}</p>
              <p className="text-xs text-gray-500">{r.date}</p>
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
              Review guidelines
            </h3>
            <ul className="text-gray-700 text-sm space-y-1 leading-relaxed">
              <li>• Mention what you liked and what could improve.</li>
              <li>• Focus on quality, usability, and delivery experience.</li>
              <li>• Avoid personal info; keep feedback respectful.</li>
              <li>• Images or links are not required for this form.</li>
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

export default Reviews;
