"use client";
import Card from "@/components/common/Card";
import ProductComponentLeftSide from "@/components/customer/ProductComponentLeftSide";
import { BsFillGridFill, FaList } from "@/constants/icons";

const AllProducts = () => {
  return (
    <section className="max-w-8xl mx-auto gap-8 grid grid-cols-12 items-start">
      <div className="col-start-1 col-end-4 bg-white p-6">
        <ProductComponentLeftSide />
      </div>
      <div className="col-start-4 col-end-13 p-6">
        <div className="flex justify-between items-center bg-white">
          <p className="text-body-sm text-on-surface-variant font-medium">
            Showing <strong className="text-on-surface">48</strong> fresh items
          </p>
          <div className="flex items-center gap-space-md w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-space-sm">
              <span className="text-label-sm text-outline">Sort by:</span>
              <select className="bg-surface-container-lowest text-body-sm text-on-surface px-space-sm py-1.5 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Freshness: Newest</option>
              </select>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-lowest p-1 rounded-xl">
              <button
                className="p-1.5 rounded-lg bg-primary text-on-primary shadow-sm"
                title="Grid View"
              >
                <BsFillGridFill />
              </button>
              <button
                className="p-1.5 rounded-lg text-outline hover:text-on-surface transition-colors"
                title="List View"
              >
                <FaList />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-3">
          {[...Array(10)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
