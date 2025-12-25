import Heading from "../Heading";
import ProductCarousel from "../ProductsCarousel";

const BestSellingSection = () => {
  return (
    <section className="px-6 xl:px-24 py-10 mt-10">
      <Heading title="This Month" />

      <div className="flex justify-between items-center mt-6 mb-10">
        <h2 className="text-5xl font-semibold">Best Selling Products</h2>
        <button className="text-white bg-primary py-3 px-8 rounded-md cursor-pointer">
          View All Products
        </button>
      </div>

      <div>
        <ProductCarousel />
      </div>
    </section>
  );
};

export default BestSellingSection;
