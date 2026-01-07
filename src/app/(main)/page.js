import CardData from "../../../data/CardData";
import Carousel from "../components/shared/carousel/Carousel";
import Card from "../components/ui(reusable)/Card";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="md:h-[30vh] mb-10">
        <Carousel />
      </div>
      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CardData?.map((item) => {
          return <Card key={item?.id} item={item} />;
        })}
      </div>
    </div>
  );
}
