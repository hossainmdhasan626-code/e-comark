// etaMulotoUseKoraHobeAddToCartEClickKorleEtaCheckKorbe
// JeOiCartTaAgeThekaSelectedKinaJodiSelectKoraThakeTaile
// BtnKeDesavleKoreDibeArBtnEChangeAsbe
"use client";

import { useIncludesItemInCartListQuery } from "@/app/redux/api/cart/AddtoCartApi";

const IsExistInAddToCartBtn = ({ loading, onClick, id }) => {
  const { data: isExistInCartList } = useIncludesItemInCartListQuery(id);

  return (
    <button
      onClick={onClick}
      disabled={isExistInCartList || loading}
      className={`w-full md:w-max px-10 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 
    ${
      isExistInCartList
        ? "bg-gray-400 cursor-not-allowed text-white"
        : "bg-gray-900 text-white hover:bg-mainColor active:scale-95"
    }`}
    >
      {loading
        ? "ADDING..."
        : isExistInCartList
          ? "ALREADY IN CART"
          : "ADD TO CART"}
    </button>
  );
};

export default IsExistInAddToCartBtn;
