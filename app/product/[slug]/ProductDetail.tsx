"use client";

import Image from "next/image";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  actPrice: number;
  disPrice?: number;
  disPer?: number;
  rating: number;
  reviews: number;
  stock: number;
  img: string[]; // array of image URLs
  colors?: string[];
}

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <section className="px-6 xl:px-24 py-10">
      <div className="grid grid-cols-2 gap-16">
        {/* LEFT: Main Image */}
        <div className="bg-gray-100 flex items-center justify-center rounded-md">
          <div className="relative w-[70%] aspect-square">
            <Image
              src={product.img[0]}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="space-y-6 ">
          {/* Title */}
          <h1 className="text-3xl font-semibold">{product.name}</h1>

          {/* Rating + Reviews + Stock */}
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={
                    i < Math.round(product.rating) ? "currentColor" : "none"
                  }
                />
              ))}
            </div>
            <span className="text-gray-500">({product.reviews} Reviews)</span>
            <span className="text-green-500">In Stock</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-semibold">
            ${product.disPrice ?? product.actPrice}
            {product.disPrice && (
              <span className="text-gray-400 line-through text-lg ml-3">
                ${product.actPrice}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="h-px bg-gray-400" />

          {/* Colours */}
          {product.colors && (
            <div className="flex items-center gap-4">
              <span className="font-medium">Colours:</span>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes (static example) */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Size:</span>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border-2 border-gray-400 w-10 h-10 flex justify-center items-center rounded hover:bg-primary hover:border-primary hover:text-white transition cursor-pointer"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border-2 border-gray-400 rounded overflow-hidden">
              <button
                onClick={decreaseQty}
                disabled={quantity === 1}
                className="w-8 h-8 flex items-center justify-center cursor-pointer disabled:cursor-auto disabled:opacity-50 border-r-2 border-gray-400"
              >
                -
              </button>
              <span className="px-4 min-w-10 text-center">{quantity}</span>
              <button
                onClick={increaseQty}
                disabled={quantity === product.stock}
                className="w-8 h-8 flex items-center justify-center bg-primary text-white cursor-pointer disabled:cursor-auto disabled:opacity-50 border-l-2 border-gray-400"
              >
                +
              </button>
            </div>

            <button className="h-9 px-10 bg-primary cursor-pointer text-white rounded flex items-center justify-center hover:bg-red-700 transition">
              Buy Now
            </button>

            <button className="h-9 w-10 border rounded flex items-center justify-center hover:bg-gray-100 transition">
              <Heart size={18} />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border rounded-md divide-y">
            <div className="p-4">
              <p className="font-medium">Free Delivery</p>
              <p className="text-sm text-gray-500">
                Enter your postal code for Delivery Availability
              </p>
            </div>

            <div className="p-4">
              <p className="font-medium">Return Delivery</p>
              <p className="text-sm text-gray-500">
                Free 30 Days Delivery Returns.{" "}
                <span className="underline cursor-pointer">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
