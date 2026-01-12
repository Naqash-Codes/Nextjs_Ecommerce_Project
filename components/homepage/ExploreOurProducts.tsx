"use client"

import Image from "next/image";
import Heading from "../Heading";
import { exploreProductList } from "@/data/products";
import { useState } from "react";

const ExploreOurProducts = () => {
  const PRODUCTS_PER_ROW = 4;
  const [visibleRows, setVisibleRows] = useState(2);
  const visibleProducts = visibleRows * PRODUCTS_PER_ROW;

  return (
    <section className="px-6 xl:px-24 mt-10">
      <Heading title="Our Products" />
      <h1 className="text-5xl font-semibold mt-10">Explore Our Products</h1>

      <div className="mt-10 grid grid-cols-4 space-x-6 space-y-10">
        {exploreProductList.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="relative">
            {/* Discount badge */}
            {product.disPer && (
              <div className="absolute top-3 left-3 bg-primary py-1 px-3 text-white text-xs rounded-md z-10">
                -{product.disPer}%
              </div>
            )}

            {/* Image box */}
            <div className="bg-[#f5f5f5] h-[220px] p-6 flex items-center justify-center">
              <div className="relative w-full h-full">
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
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button 
          onClick={() => setVisibleRows((prev) => Math.min(prev + 1, Math.ceil(exploreProductList.length / PRODUCTS_PER_ROW)))}
          className="bg-primary cursor-pointer px-8 py-4 text-white rounded-md ">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ExploreOurProducts;
