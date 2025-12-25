"use client";

import { useRef, useState } from "react";
import CountdownTimer from "../Counter";
import Heading from "../Heading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCarousel from "../ProductsCarousel";

export default function FlashSalesSection() {
  const saleEndDate = new Date();
  saleEndDate.setDate(saleEndDate.getDate() + 3);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="px-6 xl:px-24 py-10 mt-10">
      <Heading title="Today's" />

      {/* Title + Timer + Arrows */}
      <div className="mt-6 flex items-center justify-between mb-10">
        <div className="flex items-center gap-20">
          <h2 className="text-5xl font-semibold">Flash Sales</h2>
          <CountdownTimer targetDate={saleEndDate} />
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-2">
          <button
            ref={prevRef}
            disabled={isBeginning}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition
              ${
                isBeginning
                  ? "bg-[#f5f5f5] text-gray-400"
                  : "bg-[#f5f5f5] hover:bg-primary hover:text-white cursor-pointer"
              }`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            ref={nextRef}
            disabled={isEnd}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition
              ${
                isEnd
                  ? "bg-[#f5f5f5] text-gray-400"
                  : "bg-[#f5f5f5] hover:bg-primary hover:text-white cursor-pointer"
              }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <ProductCarousel
        prevRef={prevRef}
        nextRef={nextRef}
        onStateChange={({ isBeginning, isEnd }) => {
          setIsBeginning(isBeginning);
          setIsEnd(isEnd);
        }}
      />

      <div className="flex justify-center mt-14">
        <button className="text-white bg-primary py-3 px-8 rounded-md cursor-pointer">View All Products</button>
      </div>

      <div className="border border-gray-200 mt-14" />
    </section>
  );
}
