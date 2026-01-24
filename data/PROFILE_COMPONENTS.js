import Address from "@/app/components/shared/profile/Address";
import CreditSlips from "@/app/components/shared/profile/CreditSlips";
import Information from "@/app/components/shared/profile/Information";
import MyLoyaltyPoints from "@/app/components/shared/profile/MyLoyaltyPoints";
import OrderHistoryDetails from "@/app/components/shared/profile/OrderHistoryDetails";
import OutOfStockSubscriptions from "@/app/components/shared/profile/OutOfStockSubscriptions";
import Reviews from "@/app/components/shared/profile/Reviews";
import SavedCarts from "@/app/components/shared/profile/SavedCarts";
import Vouchers from "@/app/components/shared/profile/Vouchers";

export const PROFILE_COMPONENTS = {
  INFORMATION: <Information />,
  "ADD FIRST ADDRESS": <Address />,
  "ORDER HISTORY AND DETAILS": <OrderHistoryDetails />,
  "CREDIT SLIPS": <CreditSlips />,
  VOUCHERS: <Vouchers />,
  "MY LOYALTY POINTS": <MyLoyaltyPoints />,
  "MY REVIEWS": <Reviews />,
  "SAVED CARTS": <SavedCarts />,
  "OUT OF STOCK SUBSCRIPTIONS": <OutOfStockSubscriptions />,
};
