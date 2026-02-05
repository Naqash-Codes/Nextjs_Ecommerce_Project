import Image from "next/image";
import SaleCountDownTimer from "../SaleCountDownTimer";

const SaleBannerSection = () => {
  const saleEndDate = new Date();
  saleEndDate.setDate(saleEndDate.getDate() + 3);

  return (
    <section className="px-6 xl:px-24 mt-10">
      <div className="bg-black py-16 px-18 flex justify-between items-center">
        <div className="text-white space-y-8">
          <h4 className="font-semibold text-lg text-[#00fe66]">Categories</h4>
          <h1 className="text-6xl font-semibold">Enhance Your <br /> Music Experience</h1>
          <div>
            <SaleCountDownTimer />
          </div>
          <button className="bg-[#00ff66] py-4 px-12 rounded-md cursor-pointer font-semibold">
            Buy Now!
          </button>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.4)_30%,transparent_70%)] blur-2xl opacity-80 " />
          <Image src="/images/banner-img.png" alt="" width={600} height={600} className="relative z-10" />
        </div>
      </div>
    </section>
  )
}

export default SaleBannerSection