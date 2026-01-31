import React from "react";
import { Store, DollarSign, Gift, Wallet } from "lucide-react";

const AboutCards = () => {
  const cards = [
    {
      icon: <Store size={28} />,
      value: "10.5k",
      label: "Sellers active our site",
    },
    {
      icon: <DollarSign size={28} />,
      value: "33k",
      label: "Monthly Product Sale",
    },
    {
      icon: <Gift size={28} />,
      value: "45.5k",
      label: "Customer active in our site",
    },
    {
      icon: <Wallet size={28} />,
      value: "25k",
      label: "Annual gross sale in our site",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-16 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              group border rounded-md flex flex-col items-center justify-center
              text-center py-6 bg-white text-black
              transition-all duration-300 ease-out
              hover:bg-red-500 hover:text-white hover:border-red-500
              hover:-translate-y-2 hover:shadow-xl
            "
          >
            {/* ICON */}
            <div
              className="
                w-16 h-16 rounded-full flex items-center justify-center mb-6
                bg-gray-200 transition-all duration-300
                group-hover:bg-white/20
              "
            >
              <div
                className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-black text-white transition-all duration-300
                  group-hover:bg-white group-hover:text-black
                "
              >
                {card.icon}
              </div>
            </div>

            {/* VALUE */}
            <h3 className="text-3xl font-bold mb-2">
              {card.value}
            </h3>

            {/* LABEL */}
            <p className="font-semibold text-gray-700 transition-colors duration-300 group-hover:text-white/90">
              {card.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCards;
