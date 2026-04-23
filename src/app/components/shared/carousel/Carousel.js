"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useGetCarouselDataQuery } from "@/app/redux/api/carousel/CarouselApi";
import CarosualSkeleton from "../skeleton/CarosualSkeleton";
import IsErrorRTK from "../../ui(reusable)/IsErrorRTK";

export default function Carousel() {
  // RTK
  const {
    data: carouselDataByRtk,
    isLoading,
    isError,
    error,
  } = useGetCarouselDataQuery();

  // jodiCarouselErDataAsteDeriHoy
  if (isLoading) {
    return <CarosualSkeleton />;
  }

  // jodiErrorHoy
  if (isError) {
    return <IsErrorRTK isError={isError} error={error} />;
  }

  if (!carouselDataByRtk || carouselDataByRtk.length === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
        <p className="text-gray-500">There are no offers at the moment!</p>
      </div>
    );
  }

  // resultKeberKoraApiResponseThek
  const carouselData = carouselDataByRtk?.results;

  return (
    <div className="h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper text-center h-full"
      >
        {carouselData?.map((product) => (
          <SwiperSlide key={product?.id}>
            <div className="relative w-full h-full">
              <Image
                src={product?.image}
                alt={product?.title}
                fill
                className="object-cover"
                priority={product?.id <= 2}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">
                  {product?.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
