import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full px-6 xl:px-24 flex justify-center items-center gap-4">
      {/* LEFT SIDEBAR */}
      <div className="hidden lg:block w-1/4 bg-white border-r-2 pr-5 pt-6">
        <ul className="space-y-4 text-gray-800 text-[15px] font-medium">
          {[
            "Woman’s Fashion",
            "Men’s Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby’s & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center cursor-pointer hover:text-black"
            >
              {item}
              <span className="text-lg">{">"}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* HERO BANNER */}
      <div className="w-3/4 relative overflow-hidden bg-black mt-6 md:h-[380px]">
        <div className="flex items-center justify-between h-full p-12">
          {/* LEFT TEXT */}
          <div className="text-white space-y-4 max-w-md">
            <div className="flex items-center gap-3 text-lg">
              <Image
                src="/images/apple-logo.png"
                alt="apple"
                width={50}
                height={50}
              />
              <span>iPhone 14 Series</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight">
              Up to 10% <br /> off Voucher
            </h1>

            <button className="mt-4 inline-flex items-center gap-2 border-b border-white pb-1 hover:opacity-80">
              Shop Now →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          {/* RIGHT IMAGE */}
          <div className="relative w-full max-w-[470px] h-[380px] flex items-center justify-center -mr-9">
            <Image
              src="/images/slider-img_1.png"
              alt="iPhone"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* SLIDER DOTS */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
