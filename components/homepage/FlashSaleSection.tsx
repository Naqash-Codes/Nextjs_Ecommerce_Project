import CountdownTimer from "../Counter";
import FlashSalesCarousel from "../FlashSaleCarousel";
import Heading from "../Heading";

export default function FlashSalesSection() {
  const saleEndDate = new Date()
  saleEndDate.setDate(saleEndDate.getDate() + 3)
  

  return (
    <section className="px-6 xl:px-24 py-10 mt-10">
      <Heading title="Today's" />
      <div className="mt-6 flex gap-20 items-center mb-6">
        <h2 className="text-5xl font-semibold ">Flash Sales</h2>
        <CountdownTimer targetDate={saleEndDate} />
      </div>
      <FlashSalesCarousel />
    </section>
  );
}
