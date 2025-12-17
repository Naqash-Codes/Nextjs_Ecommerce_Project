"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function FlashSalesCarousel() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      slidesPerView={4}
      breakpoints={{
        0: { slidesPerView: 1.2 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      className="w-full"
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <SwiperSlide key={item}>
          <div className="h-64 rounded-lg border bg-white flex items-center justify-center">
            Product {item}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
