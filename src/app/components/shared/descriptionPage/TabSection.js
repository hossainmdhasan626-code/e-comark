import React from "react";

const TabSection = ({ product }) => {
  // averageCalculationLogic
  const totalReviews = product?.reviews?.length || 0;
  const averageRating =
    totalReviews > 0
      ? (
          product.reviews.reduce((acc, rev) => acc + rev.rating, 0) /
          totalReviews
        ).toFixed(1)
      : 0;

  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  product?.reviews?.forEach((rev) => {
    ratingCounts[rev.rating] = (ratingCounts[rev.rating] || 0) + 1;
  });

  return (
    <div>
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        <div role="tablist" className="tabs tabs-bordered w-full">
          {/* description */}
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

          {/* warranty */}
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

          {/* reviews */}
          <input
            type="radio"
            name="product_tabs"
            role="tab"
            className="tab font-bold text-lg h-16"
            aria-label="Reviews"
          />
          <div role="tabpanel" className="tab-content p-8">
            <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {/* ratingSummaryTable */}
              <div className="flex flex-col md:flex-row gap-8 mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex flex-col items-center justify-center text-center">
                  <h1 className="text-6xl font-black text-gray-800">
                    {averageRating}
                  </h1>
                  <div className="flex text-yellow-400 text-xl my-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.round(averageRating) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 font-medium">
                    {totalReviews} Reviews
                  </p>
                </div>

                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = ratingCounts[star] || 0;
                    const percentage =
                      totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                    return (
                      <div key={star} className="flex items-center gap-4">
                        <span className="text-sm font-bold text-gray-600 w-4">
                          {star}
                        </span>
                        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 w-10 text-right">
                          {Math.round(percentage)}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2 border-t pt-6">
                Detailed Reviews
              </h2>

              {product?.reviews && product?.reviews.length > 0 ? (
                <div className="space-y-6">
                  {product?.reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="border-b border-gray-50 pb-5 last:border-0"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 uppercase">
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
                <p className="text-gray-500 text-lg italic text-center py-10">
                  No reviews yet for this product.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
