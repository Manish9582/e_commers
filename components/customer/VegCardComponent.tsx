import React from "react";
import Card from "../common/Card";
import { HiAdjustmentsHorizontal, RiKnifeLine } from "@/constants/icons";

const VegCardComponent = () => {
  return (
    <section className="p-3 bg-white rounded-md border-slate-100 hover:border-slate-200 transition-all duration-300 ease-in-out">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
        <div>
          <div className="flex items-center gap-2 text-[var(--color-primary-dark)] text-sm">
            <HiAdjustmentsHorizontal className="text-2xl" />
            <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary font-bold">
              Kitchen Choice Toggle
            </span>
          </div>
          <h2 className="text-2xl mt-1 font-semibold">Shop by Cooking Form</h2>
        </div>
        <div
          className="inline-flex p-1.5 bg-surface-container-low rounded-full self-start md:self-auto"
          id="form-toggle-wrapper"
        >
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-label-btn text-label-btn bg-primary text-on-primary shadow-sm transition-all"
            id="toggle-whole"
          >
            <span>Whole Produce</span>
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-label-btn text-label-btn text-on-surface-variant hover:text-on-surface transition-all"
            id="toggle-cut"
          >
            <span className="flex gap-2 items-center">
              <RiKnifeLine className="text-xl" /> Cut, Peeled & Chopped
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5">
        <Card />
      </div>
    </section>
  );
};

export default VegCardComponent;
