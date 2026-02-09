"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, Heart } from "lucide-react";
import StarRating from "./StarRating";

type Product = {
  id: number;
  name: string;
  slug: string;
  img: string | string[];
  actPrice: number;
  disPrice?: number;
  disPer?: number;
  rating: number;
  reviews?: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="block w-full select-none"
    >
      <div className="relative w-full cursor-pointer group">
        {/* Discount Badge */}
        {product.disPer && (
          <div className="absolute top-3 left-3 bg-primary py-1 px-3 text-white text-xs rounded-md z-20">
            -{product.disPer}%
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-20 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <button
            onClick={(e) => e.preventDefault()}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-primary hover:text-white transition"
          >
            <Heart size={18} />
          </button>

          <button
            onClick={(e) => e.preventDefault()}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-primary hover:text-white transition"
          >
            <Eye size={18} />
          </button>
        </div>

        {/* Image + Hover Add To Cart */}
        <div className="relative overflow-hidden bg-[#f5f5f5] aspect-square w-full h-[280px] p-4 flex items-center justify-center rounded-md">
          <div className="relative w-[220px] h-[220px]">
            <Image
              src={Array.isArray(product.img) ? product.img[0] : product.img}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Add To Cart Button */}
          <button
            onClick={(e) => e.preventDefault()}
            className="
              absolute bottom-0 left-0 w-full
              bg-black text-white py-3 text-sm font-medium
              translate-y-full
              group-hover:translate-y-0
              transition-transform duration-300 ease-out
            "
          >
            Add To Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="mt-3 space-y-1">
          <h2 className="font-semibold text-lg">{product.name}</h2>

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

          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
