import ProductCarousel from "@/components/ProductsCarousel";

const WishListPage = () => {
  return (
    <main className="mt-24">
      <section className="px-6 xl:px-24">
        <div className="flex justify-between ">
          <div className="flex items-center gap-4">
            <div className="py-6 px-3 bg-primary w-fit rounded-md" />
            <h1 className="text-2xl">WishList (4)</h1>
          </div>
          <button className="font-semibold px-8 py-4 border rounded-lg cursor-pointer">
            Move All To Bag
          </button>
        </div>
        <div className="my-16">
          <ProductCarousel />
        </div>
      </section>

      <section className="mt-24 px-6 xl:px-24">
        <div className="flex justify-between ">
          <div className="flex items-center gap-4">
            <div className="py-6 px-3 bg-primary w-fit rounded-md" />
            <h1 className="text-2xl">Just for you</h1>
          </div>
          <button className="font-semibold px-8 py-4 border rounded-lg cursor-pointer">
            See All
          </button>
        </div>

        <div className="my-16">
          <ProductCarousel />
        </div>
      </section>
    </main>
  );
};

export default WishListPage;
