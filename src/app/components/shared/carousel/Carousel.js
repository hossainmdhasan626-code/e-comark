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

export default function Carousel() {
  const electronicProducts = [
    {
      id: 1,
      name: "Laptop",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=600&fit=crop",
      alt: "Modern laptop computer",
    },
    {
      id: 2,
      name: "Smartphone",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=600&fit=crop",
      alt: "Latest smartphone",
    },
    {
      id: 3,
      name: "Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=600&fit=crop",
      alt: "Premium headphones",
    },
    {
      id: 4,
      name: "Smart Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=600&fit=crop",
      alt: "Smart watch device",
    },
    {
      id: 5,
      name: "Camera",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&h=600&fit=crop",
      alt: "Digital camera",
    },
    {
      id: 6,
      name: "Tablet",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&h=600&fit=crop",
      alt: "Tablet device",
    },
  ];

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
        {electronicProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover"
                priority={product.id <= 2}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">{product.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
