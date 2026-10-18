import { BsFillGridFill, FaList } from "@/constants/icons";
import Shopcard from "@/components/common/Shopcard";

const ShopHome = () => {
  return (
    <section className="max-w-8xl p-8">
      <div className="flex px-2 justify-between items-center bg-white">
        <div>
          <p className="text-3xl font-medium">8 Partner Hubs Found</p>
          <p>Verified for organic provenance and express cold delivery</p>
        </div>
        <div className="flex items-center gap-space-md w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-space-sm">
            <span className="text-label-sm text-outline">Sort by:</span>
            <select className="bg-surface-container-lowest text-body-sm text-on-surface px-space-sm py-1.5 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option>Recammand</option>
              <option>Nearest Distance</option>
              <option>Hight Rated</option>
              <option>Fasted Delivery</option>
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

      <div className="mt-4 grid grid-cols-3 gap-5">
        <Shopcard />
        <Shopcard />
        <Shopcard />
        <Shopcard />
        <Shopcard />
      </div>
    </section>
  );
};

export default ShopHome;
