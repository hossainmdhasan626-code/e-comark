import Carousel from "../components/shared/carousel/Carousel";
import CartRendar from "../components/shared/cart/CartRendar";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="my-5 h-[30vh] mb-10">
        <Carousel />
      </div>
      {/* landingPageCart */}
      <div>
        <CartRendar />
      </div>
    </div>
  );
}
