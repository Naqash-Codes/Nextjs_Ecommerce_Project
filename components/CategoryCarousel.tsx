"use client";

import { RefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { categories } from "@/data/categories";

type Props = {
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
  onStateChange: (state: { isBeginning: boolean; isEnd: boolean }) => void;
};

const CategoryCarousel = ({ prevRef, nextRef, onStateChange }: Props) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={26}
      slidesPerView={6}
      watchOverflow
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        if (typeof swiper.params.navigation !== "boolean") {
          swiper.params.navigation!.prevEl = prevRef.current;
          swiper.params.navigation!.nextEl = nextRef.current;
        }
      }}
      onSlideChange={(swiper) => {
        onStateChange({
          isBeginning: swiper.isBeginning,
          isEnd: swiper.isEnd,
        });
      }}
      onInit={(swiper) => {
        onStateChange({
          isBeginning: swiper.isBeginning,
          isEnd: swiper.isEnd,
        });
      }}
      breakpoints={{
        0: { slidesPerView: 1.5 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 6 },
      }}
      className="w-full mt-12"
    >
      {categories.map((item) => {
        const Icon = item.icon;

        return (
          <SwiperSlide key={item.id}>
            <div
              className="
                min-w-[150px] h-[150px]
                border border-gray-400 rounded-md
                flex flex-col items-center justify-center gap-4
                cursor-pointer transition-colors duration-200
                hover:bg-red-500
                hover:text-white
                hover:border-red-500
              "
            >
              <Icon size={50} />
              <p className="font-medium">{item.title}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CategoryCarousel;
