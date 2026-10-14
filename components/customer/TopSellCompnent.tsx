"use client";
import { items } from "@/constants/itemstypes";
import Image from "next/image";
import FunButton from "../common/FunButton";
import { AddToCartMehtod } from "@/constants/method";

const TopSellCompnent = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((top, index) => {
        return (
          <div
            className="bg-surface-container-lowest rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
            key={index}
          >
            <div className="relative w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image
                src={top.image}
                alt={top.name}
                fill
                unoptimized
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <span className="font-label-caption text-label-caption text-secondary font-semibold">
                  {top.type}
                </span>
              </div>
              <p className="font-label-btn text-label-btn text-on-surface truncate">
                {top.name}
              </p>
              <div className="flex items-center justify-between mt-1">
                <span className="font-title-price-md text-title-price-md text-primary">
                  ₹28
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    /bunch
                  </span>
                </span>
                <FunButton
                  fun={AddToCartMehtod}
                  title="Add"
                  style="px-3 py-1 rounded-md bg-[var(--color-primary-hover)] text-white hover:bg-primary flex items-center justify-center transition-colors"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopSellCompnent;
