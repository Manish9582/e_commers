import Shopcard from "../common/Shopcard";
import { BsShopWindow, FaChevronRight, FaChevronLeft } from "@/constants/icons";

const ShopsComponent = () => {
  return (
    <section className="mt-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-[var(--color-primary-dark)] text-sm">
            <BsShopWindow />
            <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary font-bold">
              Multi-Vendor Network
            </span>
          </div>
          <h2 className="text-3xl font-semibold my-1">
            Nearby Mandi Stalls & Farm Collectives
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Order directly from your favorite neighborhood mandi stall with
            express dispatch
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container flex items-center justify-center transition-colors">
            <FaChevronLeft />
          </button>
          <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container flex items-center justify-center transition-colors">
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        <Shopcard />
      </div>
    </section>
  );
};

export default ShopsComponent;
