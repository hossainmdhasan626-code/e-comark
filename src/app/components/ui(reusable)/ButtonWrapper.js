const ButtonWrapper = ({ children }) => {
  return (
    <>
      {" "}
      <div
        tabIndex={0}
        role="button"
        /* এখানে border-2 এবং border-white যোগ করা হয়েছে */
        className="btn m-1 bg-mainColor text-white border-2 border-white hover:bg-[#1a1a1a] transition-all"
      >
        {children}
      </div>
    </>
  );
};

export default ButtonWrapper;
