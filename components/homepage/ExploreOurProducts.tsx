import Image from "next/image";
import Heading from "../Heading";
import { exploreProductList } from "@/data/products";

const ExploreOurProducts = () => {
  return (
    <section className="px-6 xl:px-24 mt-10">
      <Heading title="Our Products" />
      <h1 className="text-5xl font-semibold mt-10">Explore Our Products</h1>

      <div className="mt-10 grid grid-cols-4 space-x-6 space-y-10">
        {exploreProductList.map((product) => (
          <div className="relative">
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
    </section>
  );
};

export default ExploreOurProducts;
