"use client";

import { RefObject } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { productList } from "@/data/products";
import ProductCard from "./ProductCard";

type Props = {
  prevRef?: RefObject<HTMLButtonElement | null>;
  nextRef?: RefObject<HTMLButtonElement | null>;
  onStateChange?: (state: { isBeginning: boolean; isEnd: boolean }) => void;
};

export default function ProductCarousel({
  prevRef,
  nextRef,
  onStateChange,
}: Props) {
  const hasNavigation = !!prevRef && !!nextRef;

  return (
    <Swiper
      modules={hasNavigation ? [Navigation] : []}
      spaceBetween={32}
      slidesPerView={4}
      watchOverflow
      breakpoints={{
        0: { slidesPerView: 1.2 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      navigation={
        hasNavigation
          ? {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }
          : false
      }
      onBeforeInit={(swiper) => {
        if (hasNavigation && typeof swiper.params.navigation !== "boolean") {
          swiper.params.navigation!.prevEl = prevRef.current;
          swiper.params.navigation!.nextEl = nextRef.current;
        }
      }}
      onSlideChange={(swiper) => {
        onStateChange?.({
          isBeginning: swiper.isBeginning,
          isEnd: swiper.isEnd,
        });
      }}
      onInit={(swiper) => {
        onStateChange?.({
          isBeginning: swiper.isBeginning,
          isEnd: swiper.isEnd,
        });
      }}
      className="w-full"
    >
      {productList.map((product) => (
        <SwiperSlide key={product.id} className="flex justify-center">
          <div className="w-full">
            <ProductCard product={product} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
