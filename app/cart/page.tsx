"use client";

import Image from "next/image";
import Link from "next/link";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.disPrice ?? item.actPrice;
    return acc + price * item.quantity;
  }, 0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="hidden md:grid grid-cols-4 px-8 py-4 text-lg font-medium text-gray-700 border-b border-gray-200">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div className="text-right">Subtotal</div>
      </div>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.length === 0 && (
          <p className="text-center mt-6 text-gray-500">
            Your cart is empty.
          </p>
        )}

        {cartItems.map((item) => {
          const price = item.disPrice ?? item.actPrice;
          const itemSubtotal = price * item.quantity;
          const imageSrc = Array.isArray(item.img)
            ? item.img[0]
            : item.img;

          return (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-4 items-center px-8 py-6 gap-6 border-b border-gray-200"
            >
              {/* Product */}
              <div className="flex items-center gap-4 relative">
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                >
                  <X size={14} />
                </button>

                <Image
                  src={imageSrc}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />

                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs mt-1 text-gray-400">
                    In Stock: {item.stock}
                  </p>
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

              {/* Quantity */}
              <div>
                <div className="flex items-center border rounded-md w-fit">
                  <div className="px-4 py-2 font-medium">
                    {item.quantity.toString().padStart(2, "0")}
                  </div>

                  <div className="flex flex-col border-l">
                    <button
                      onClick={() => increaseQty(item.id)}
                      disabled={item.quantity >= item.stock}
                      className={`px-2 py-1 transition ${
                        item.quantity >= item.stock
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <ChevronUp size={16} />
                    </button>

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 border-t hover:bg-gray-100 transition"
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

      {/* Return Button */}
      <div className="flex justify-between mt-12">
        <Link
          href="/"
          className="border px-8 py-3 rounded-md hover:bg-black hover:text-white transition"
        >
          Return To Shop
        </Link>
      </div>

      {/* Cart Total */}
      {cartItems.length > 0 && (
        <div className="mt-20 border rounded-md p-8 max-w-md ml-auto">
          <h2 className="text-xl font-semibold mb-6">Cart Total</h2>

          <div className="flex justify-between mb-4">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          <div className="border-t my-4"></div>

          <div className="flex justify-between font-semibold text-lg mb-6">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-red-600 transition">
            Proceed to checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;