const CartSkeleton = () => {
  return (
    <div className="w-full max-w-[360px]">
      <div className="card bg-base-100 shadow-sm border border-gray-100 overflow-hidden">
        <div className="skeleton h-48 w-full rounded-none bg-gray-200 animate-pulse"></div>

        <div className="card-body p-5">
          <div className="skeleton h-6 w-3/4 mb-2 bg-gray-200 animate-pulse"></div>

          <div className="space-y-2">
            <div className="skeleton h-3 w-full bg-gray-200 animate-pulse"></div>
            <div className="skeleton h-3 w-4/5 bg-gray-200 animate-pulse"></div>
          </div>

          <div className="card-actions justify-end mt-4">
            <div className="skeleton h-11 w-32 rounded-xl bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;