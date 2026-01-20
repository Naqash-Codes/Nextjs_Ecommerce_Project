"use client";

import Link from "next/link";
import Image from "next/image";
import { RefObject } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { productList } from "@/data/products";

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
          <Link
            href={`/product/${product.slug}`}
            className="block w-full max-w-[250px] select-none"
          >
            <div className="relative cursor-pointer w-full">
              {/* Discount badge */}
              {product.disPer && (
                <div className="absolute top-3 left-3 bg-primary py-1 px-3 text-white text-xs rounded-md z-10">
                  -{product.disPer}%
                </div>
              )}

              {/* Image box */}
              <div className="bg-[#f5f5f5] aspect-square w-full p-4 flex items-center justify-center rounded-md">
                <div className="relative w-full h-full">
                  <Image
                    src={Array.isArray(product.img) ? product.img[0] : product.img}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product info */}
              <div className="mt-3 space-y-1">
                <h2 className="font-semibold text-sm">{product.name}</h2>

                {product.disPrice ? (
                  <div className="flex gap-2 items-center">
                    <span className="text-primary font-semibold">
                      ${product.disPrice}
                    </span>
                    <span className="line-through text-[#808080] text-sm">
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
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
