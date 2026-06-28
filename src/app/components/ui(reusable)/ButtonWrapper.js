const ButtonWrapper = ({ children }) => {
  return (
    <div
      tabIndex={0}
      role="button"
      className="inline-flex items-center justify-center h-10 px-3.5 md:px-4 rounded-lg bg-mainColor text-white font-semibold text-sm border border-white/15 hover:bg-white/10 active:bg-white/15 transition-all duration-200 select-none shadow-sm cursor-pointer"
    >
      {children}
    </div>
  );
};

export default ButtonWrapper;
