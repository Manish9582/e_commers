import { IoStar, IoLocationOutline } from "@/constants/icons";
import LinkButton from "./LinkButton";

const Shopcard = () => {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="relative h-40 rounded-2xl overflow-hidden mb-4">
          <img
            className="w-full h-full object-cover"
            data-alt="Traditional Indian mandi store clean counter filled with fresh vibrant greens, pumpkins and crates with farmer standing proudly in background."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDII-S8rLIIHn17wIaLS476RWw4-G23hQFO_QjyPTsf15vEK7wHo_8cqXsO1FWh5l0nZU-UNey0c1C7Fse20PR3cUMw5qts-LNDWdovam9GRHtfdvWHTEWU8NgSJWaRNS65JfN5-6KyJ8ATwv36Na-H_k0uqwJEOpml0IuMyITGqt2DOWV4lK2gpM7g429cmYFYKFC8-UWnqfKsurW9KoRyLFJuLNUtR_GX180mvlE"
          />
          <span className="absolute top-3 left-3 bg-white/80 px-3 py-1 rounded-full font-label-badge text-label-badge text-primary font-bold flex items-center gap-1 shadow-sm">
            <IoStar /> 4.9 (1.8k reviews)
          </span>
          <span className="absolute bottom-3 bg-white/80 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-caption text-label-caption shadow">
            ⚡ 25 min delivery
          </span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Kolar Organic Farmers Hub
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
              <IoLocationOutline /> 1.2 km away • Kolar & Chikkaballapur Direct
            </p>
          </div>
          <span className="bg-[var(--color-primary-light)]/70 rounded-xl px-1.5 py-1">
            Open
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3">
          <span className="bg-[var(--color-primary-light)]/20 px-2.5 py-1 rounded-full">
            Leafy Greens Specialist
          </span>
        </div>
      </div>
      <div className="mt-3 pt-4 flex items-center justify-between">
        <div className="text-left">
          <span className="font-label-caption text-label-caption text-on-surface-variant block">
            Minimum Order
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
            ₹99
          </span>
        </div>
        <LinkButton
          title="Visit Shop Storefront"
          url="/shop"
          style="bg-primary hover:bg-primary-container text-on-primary font-label-btn text-label-btn
          px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
        />
      </div>
    </div>
  );
};

export default Shopcard;
