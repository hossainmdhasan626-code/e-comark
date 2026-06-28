"use client";

import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import carouselData from "../../../../../data/CarouselData";

export default function Carousel() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarouselItems = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:8000/api/v1";
        const res = await fetch(`${baseUrl}/hero-carousel-items/`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (data && data.results && data.results.length > 0) {
          setCarouselItems(data.results);
        }
      } catch (err) {
        console.error("Error fetching hero carousel items:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCarouselItems();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full bg-slate-200/50 animate-pulse rounded-2xl flex items-center justify-center min-h-[30vh]">
        <div className="flex flex-col items-center gap-2">
          <span className="loading loading-spinner loading-lg text-mainColor"></span>
          <span className="text-sm font-semibold text-slate-500">Loading Carousel...</span>
        </div>
      </div>
    );
  }

  // Use fetched items if available, otherwise fallback to mock data
  const displayItems = carouselItems.length > 0 ? carouselItems : carouselData;

  return (
    <div className="h-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
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
        {displayItems.map((product) => (
          <SwiperSlide key={product?.id}>
            <div className="relative w-full h-full min-h-[30vh]">
              <Image
                src={product?.image}
                alt={product?.title || "Carousel item"}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority={product?.id <= 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10 text-left">
                <div className="max-w-2xl animate-fade-in">
                  <h3 className="text-white text-2xl md:text-4xl font-extrabold tracking-tight drop-shadow-md">
                    {product?.title}
                  </h3>
                  {(product?.subtitle || product?.description) && (
                    <p className="text-slate-200 text-sm md:text-base mt-2 max-w-xl font-medium drop-shadow-sm line-clamp-2">
                      {product?.subtitle || product?.description}
                    </p>
                  )}
                  {product?.button_text && (
                    <div className="mt-4 md:mt-6">
                      <Link
                        href={product?.source_url || "#"}
                        target={product?.source_url?.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-mainColor hover:bg-opacity-95 hover:scale-105 active:scale-95 text-white font-bold text-sm md:text-base px-6 py-2.5 md:px-8 md:py-3 rounded-xl shadow-md transition-all duration-200 select-none cursor-pointer"
                      >
                        {product.button_text}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
