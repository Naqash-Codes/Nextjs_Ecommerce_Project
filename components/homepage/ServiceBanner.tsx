import { Truck, Headphones, ShieldCheck } from "lucide-react";

const ServiceBanner = () => {
  return (
    <section className="px-6 xl:px-24 my-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        {/* FREE DELIVERY */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <Truck className="text-white" size={28} />
            </div>
          </div>

          <h3 className="mt-6 font-bold text-lg">
            FREE AND FAST DELIVERY
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <Headphones className="text-white" size={28} />
            </div>
          </div>

          <h3 className="mt-6 font-bold text-lg">
            24/7 CUSTOMER SERVICE
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* MONEY BACK */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <ShieldCheck className="text-white" size={28} />
            </div>
          </div>

          <h3 className="mt-6 font-bold text-lg">
            MONEY BACK GUARANTEE
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            We return money within 30 days
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServiceBanner;
