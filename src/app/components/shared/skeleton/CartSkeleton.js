const CartSkeleton = () => {
  return (
    <div className="w-full max-w-[360px]">
      <div className="card bg-base-100 shadow-sm border border-gray-100 overflow-hidden">
        <div className="skeleton h-48 w-full rounded-none"></div>

        <div className="card-body p-5">
          {/* titleArea/}*/}
          <div className="skeleton h-6 w-3/4 mb-2"></div>

          {/* descriptionArea */}
          <div className="space-y-2">
            <div className="skeleton h-3 w-full"></div>
            <div className="skeleton h-3 w-4/5"></div>
          </div>

          {/* button*/}
          <div className="card-actions justify-end mt-4">
            <div className="skeleton h-11 w-32 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;
