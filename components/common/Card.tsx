import Image from "next/image";
import FunButton from "./FunButton";
import { AddToCartMehtod } from "@/constants/method";

const Card = () => {
  return (
    <div className="rounded-xl shadow p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="relative h-44 rounded-xl overflow-hidden mb-3">
          <Image
            src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6"
            alt="Fresh strawberries"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            unoptimized
            className="object-cover"
          />

          <span className="absolute top-2 left-2 bg-white/60 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
            Uncut
          </span>

          <span className="absolute top-2 right-2 bg-white/60 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
            Ooty Farm
          </span>
        </div>
        <p className="font-headline-sm text-headline-sm text-on-surface">
          Crunchy Ooty Carrots
        </p>
        <p className="font-label-caption text-label-caption text-on-surface-variant mt-0.5">
          Rich in Beta-Carotene • Shelf life: 7 days
        </p>
      </div>
      <div className="mt-4 pt-3 flex items-center justify-between">
        <div>
          <span className="font-title-price-lg text-title-price-lg text-primary">
            ₹39
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            / 500g
          </span>
        </div>
        <FunButton
          fun={AddToCartMehtod}
          title="Add"
          style="px-3 py-1 rounded-md bg-[var(--color-primary-hover)] text-white hover:bg-primary flex items-center justify-center transition-colors"
        />
      </div>
    </div>
  );
};

export default Card;
