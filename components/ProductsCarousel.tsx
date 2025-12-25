"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { productList } from "@/data/products";
import Image from "next/image";
import { RefObject } from "react";

type Props = {
  prevRef?: RefObject<HTMLButtonElement | null>;
  nextRef?: RefObject<HTMLButtonElement | null>;
  onStateChange?: (state: {
    isBeginning: boolean;
    isEnd: boolean;
  }) => void;
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
      spaceBetween={16}
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
        if (
          hasNavigation &&
          typeof swiper.params.navigation !== "boolean"
        ) {
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
        <SwiperSlide key={product.id}>
          <div className="relative">
            {/* Discount badge */}
            {product.disPer && (
              <div className="absolute top-3 left-3 bg-primary py-1 px-3 text-white text-xs rounded-md z-10">
                -{product.disPer}%
              </div>
            )}

            {/* Image box */}
            <div className="bg-[#f5f5f5] aspect-square w-[80%] p-4 flex items-center justify-center">
              <div className="relative w-[90%] h-[90%]">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="mt-3">
              <h2 className="font-semibold">{product.name}</h2>

              {product.disPrice ? (
                <div className="flex gap-2">
                  <span className="text-primary font-semibold">
                    ${product.disPrice}
                  </span>
                  <span className="line-through text-[#808080]">
                    ${product.actPrice}
                  </span>
                </div>
              ) : (
                <span className="text-primary font-semibold">
                  ${product.actPrice}
                </span>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
