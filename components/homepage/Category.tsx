"use client";

import { useRef, useState } from "react";
import Heading from "../Heading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoryCarousel from "../CategoryCarousel";

const Category = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="px-6 xl:px-24 mt-20 mb-20">
      <Heading title="Categories" />

      {/* Title + Arrows */}
      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-5xl font-semibold">Browse By Category</h1>

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
      <div className="mt-6 flex justify-center">
        <CategoryCarousel
          prevRef={prevRef}
          nextRef={nextRef}
          onStateChange={({ isBeginning, isEnd }) => {
            setIsBeginning(isBeginning);
            setIsEnd(isEnd);
          }}
        />
      </div>
    </section>
  );
};

export default Category;
