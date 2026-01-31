import AboutCards from "@/components/AboutCards";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-[90vh] my-12 w-full">
      <section className="w-full flex items-center justify-between pl-30">
        {/* LEFT TEXT */}
        <div className="max-w-[600px] space-y-6">
          <h1 className="text-6xl font-semibold mb-10">Our Story</h1>

          <p className="text-gray-900 text-lg leading-relaxed">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>

          <p className="text-gray-900 text-lg leading-relaxed">
            Exclusive has more than 1 million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer goods.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="shrink-0">
          <Image
            src="/images/about-side-img.png"
            width={700}
            height={700}
            alt="about us"
            className="object-contain"
          />
        </div>
      </section>

      <div className="mt-20">
        <AboutCards />
      </div>

      
    </main>
  );
};

export default AboutPage;
