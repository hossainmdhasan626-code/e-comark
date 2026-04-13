const IsErrorRTK = ({ isError, error }) => {
  if (!isError) {
    return null;
  }
  return (
    <div className="text-red-500 flex flex-col justify-center items-center h-[200px] border border-red-200 rounded-xl bg-red-50 p-4">
      <p className="font-bold">
        {error?.data?.message || "Something went wrong with the server"}
      </p>
      <div className="text-sm opacity-70 mt-2">
        Error Status: {error?.status}
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-3 text-xs underline"
      >
        Try Again
      </button>
    </div>
  );
};

export default IsErrorRTK;
