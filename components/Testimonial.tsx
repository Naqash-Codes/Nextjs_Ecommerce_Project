"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { testimonials } from "@/data/testimonial";

const Testimonials = () => {
  return (
    <section className="mt-28">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // keeps autoplay after swipe
        }}
        speed={800} // smooth slide animation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-14"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center">
              <div>
                {/* IMAGE */}
                <div className="bg-gray-200 pt-10 px-4">
                  <div className="relative w-[360px] h-[400px] mb-6">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                </div>

                {/* NAME */}
                <h3 className="text-xl flex-1 text-start font-semibold">
                  {item.name}
                </h3>

                {/* TITLE */}
                <p className="text-gray-500 text-sm mt-1">{item.title}</p>

                {/* SOCIAL ICONS */}
                <div className="flex gap-4 mt-4 text-gray-700">
                  <i className="ri-twitter-x-line cursor-pointer hover:text-black" />
                  <i className="ri-instagram-line cursor-pointer hover:text-black" />
                  <i className="ri-linkedin-line cursor-pointer hover:text-black" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
