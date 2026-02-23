"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import { productList } from "@/data/products";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      ...productList[0],
      quantity: 1,
    },
    {
      ...productList[2],
      quantity: 2,
    },
  ]);

  // Increase quantity
  const increaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.disPrice ?? item.actPrice;
    return acc + price * item.quantity;
  }, 0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header Row */}
      <div className="hidden md:grid grid-cols-4 px-8 py-4 mb-6 text-lg font-medium text-gray-700 border-b border-gray-200">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div className="text-right">Subtotal</div>
      </div>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.map((item) => {
          const price = item.disPrice ?? item.actPrice;
          const itemSubtotal = price * item.quantity;

          return (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-4 items-center px-8 py-6 gap-6 border-b border-gray-200"
            >
              {/* Product */}
              <div className="flex items-center gap-4 relative">
                <button className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition">
                  <X size={14} />
                </button>

                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />

                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>

              {/* Price */}
              <div className="font-medium">
                ${price}
                {item.disPrice && (
                  <span className="text-gray-400 line-through ml-3 text-sm">
                    ${item.actPrice}
                  </span>
                )}
              </div>

              {/* Quantity With Arrows */}
              <div>
                <div className="flex items-center border rounded-md w-fit">
                  <div className="px-4 py-2 font-medium">
                    {item.quantity.toString().padStart(2, "0")}
                  </div>

                  <div className="flex flex-col border-l">
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 hover:bg-gray-100 rounded-t-md transition"
                    >
                      <ChevronUp size={16} />
                    </button>

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 border-t hover:bg-gray-100 rounded-b-md transition"
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtotal */}
              <div className="md:text-right font-semibold">
                ${itemSubtotal}
              </div>
            </div>
          );
        })}
      </div>

      {/* Return + Update Buttons */}
      <div className="flex flex-col md:flex-row justify-between mt-12 gap-6">
        <Link
          href="/"
          className="border px-8 py-3 rounded-md hover:bg-black hover:text-white transition text-center"
        >
          Return To Shop
        </Link>

        <button className="border px-8 py-3 rounded-md hover:bg-black hover:text-white transition">
          Update Cart
        </button>
      </div>

      {/* Bottom Section */}
      <div className="mt-20 grid md:grid-cols-2 gap-12">
        {/* Coupon */}
        <div className="flex flex-col sm:flex-row items-start gap-4 max-w-md">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 border rounded-md px-5 py-3 outline-none focus:ring-2 focus:ring-black"
          />

          <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-red-600 transition whitespace-nowrap cursor-pointer">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border rounded-md p-8 h-fit">
          <h2 className="text-xl font-semibold mb-6">Cart Total</h2>

          <div className="flex justify-between mb-4">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          <div className="border-t my-4"></div>

          <div className="flex justify-between mb-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="border-t my-4"></div>

          <div className="flex justify-between font-semibold text-lg mb-6">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          <button className="w-full bg-primary cursor-pointer text-white py-3 rounded-md hover:bg-red-600 transition">
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;