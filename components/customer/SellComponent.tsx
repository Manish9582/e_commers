"use client";
import { PiSunHorizonFill } from "@/constants/icons";
import { AddToCartMehtod } from "@/constants/method";
import FunButton from "../common/FunButton";

const SellComponent = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden h-[340px] shadow-sm group">
      <img
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        data-alt="Vibrant close-up of a fresh morning farmers market basket filled with dewy green spinach bunches, golden Ratnagiri Alphonso mangoes, and ruby red tomatoes in warm natural golden hour sunlight with micro water droplets, shot with depth of field."
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFW2mRz1hlYIzhxwpC6RieN_oZBZg_fWsoZFEvf7x5pkUPo0dW6Ogx0KeBE99d6ZmvCmNzKsRjxuqOTJZ56XjmDGNEiyg_qiSeMicnbRdcdR_FzsP_52eiijQDKiKOxgeBx5QhepBrH8ZZ2HivZVu1fYeALDRYMs56ZQhkzMQtNUOmHwwVhJ37K_MWdFw4dRHEPLfLAf7cSHaU4F1X2_SX7la92KZSfJz8qIi88g4"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-black/20 p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="bg-white backdrop-blur-md px-3 py-1 rounded-full text-secondary font-label-badge text-label-badge shadow-sm flex items-center gap-1">
            <PiSunHorizonFill /> Harvested at 5:15 AM
          </span>
          <span className="bg-white text-red-600 font-semibold text-sm text-label-badge px-2.5 py-0.5 rounded-full">
            Selling Fast
          </span>
        </div>
        <div className="space-y-2">
          <div className="bg-white backdrop-blur-md rounded-2xl p-3 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-xl">
                🥭
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                  Ratnagiri Alphonso (Devgad)
                </h4>
                <p className="font-label-caption text-label-caption text-on-surface-variant">
                  Naturally tree-ripened • 6 Pcs Crates
                </p>
              </div>
            </div>
            <FunButton
              fun={AddToCartMehtod}
              title="Add"
              style="px-3 py-1 rounded-md bg-[var(--color-primary-hover)] text-white hover:bg-primary flex items-center justify-center transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellComponent;
