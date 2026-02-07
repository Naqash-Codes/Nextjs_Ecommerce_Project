"use client"

import Heading from "../Heading";
import { exploreProductList } from "@/data/products";
import { useState } from "react";
import ProductCard from "../ProductCard";

const ExploreOurProducts = () => {
  const PRODUCTS_PER_ROW = 4;
  const [visibleRows, setVisibleRows] = useState(2);

  const visibleProducts = visibleRows * PRODUCTS_PER_ROW;
  const hasMoreProducts = visibleProducts < exploreProductList.length;

  return (
    <section className="px-6 xl:px-24 mt-10 mb-10">
      <Heading title="Our Products" />
      <h1 className="text-5xl font-semibold mt-10">
        Explore Our Products
      </h1>

      <div className="mt-10 grid grid-cols-4 gap-x-8 gap-y-12">
        {exploreProductList
          .slice(0, visibleProducts)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      <div className="mt-16 flex justify-center">
        {hasMoreProducts ? (
          <button
            onClick={() =>
              setVisibleRows((prev) => prev + 1)
            }
            className="bg-primary px-8 py-4 text-white rounded-md cursor-pointer"
          >
            View More Products
          </button>
        ) : (
          <p className="text-gray-400 text-sm">
            No more products to show here...
          </p>
        )}
      </div>
    </section>
  );
};

export default ExploreOurProducts;
