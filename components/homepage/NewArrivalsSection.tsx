import Image from "next/image";
import Heading from "../Heading";

const NewArrivalsSection = () => {
  return (
    <section className="px-6 xl:px-24 mt-10 mb-10">
      <Heading title="Featured" />
      <h1 className="text-5xl font-semibold mt-6">New Arrival</h1>

      {/* MAIN GRID */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT BIG CARD */}
        <div className="relative bg-black rounded-md overflow-hidden min-h-[520px] flex justify-center items-center">
          <Image
            src="/images/ps5-slim.png" // replace with your image path
            alt="PlayStation 5"
            width={450}
            height={450}
            className="object-contain mt-18"
          />

          <div className="absolute bottom-6 left-6 text-white max-w-[200px]">
            <h2 className="text-2xl font-semibold">PlayStation 5</h2>
            <p className="text-sm text-gray-300 mt-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-4 underline text-sm">
              Shop Now
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-rows-2 gap-6">
          
          {/* TOP RIGHT CARD */}
          <div className="relative bg-black rounded-md overflow-hidden min-h-[245px]">
            <Image
              src="/images/attractive-woman.png"
              alt="Women Collection"
              fill
              className="object-cover "
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 left-6 text-white max-w-[230px]">
              <h2 className="text-2xl font-semibold">
                Women’s Collections
              </h2>
              <p className="text-sm text-gray-300 mt-2">
                Featured woman collections that give you another vibe.
              </p>
              <button className="mt-4 underline text-sm">
                Shop Now
              </button>
            </div>
          </div>

          {/* BOTTOM RIGHT GRID */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* SPEAKERS */}
            <div className="relative bg-black rounded-md overflow-hidden min-h-[245px] flex justify-center items-center">
              <Image
                src="/images/speakers.png"
                alt="Speakers"
                width={180}
                height={180}
                className="object-contain"
              />

              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-xl font-semibold">Speakers</h2>
                <p className="text-sm text-gray-300">
                  Amazon wireless speakers
                </p>
                <button className="mt-3 underline text-sm">
                  Shop Now
                </button>
              </div>
            </div>

            {/* PERFUME */}
            <div className="relative bg-black rounded-md overflow-hidden min-h-[245px] flex justify-center items-center">
              <Image
                src="/images/perfume.png"
                alt="Perfume"
                width={200}
                height={200}
                className="object-contain"
              />

              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-xl font-semibold">Perfume</h2>
                <p className="text-sm text-gray-300">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="mt-3 underline text-sm">
                  Shop Now
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default NewArrivalsSection;
