import LinkButton from "../common/LinkButton";
import categories from "@/constants/itemstypes";
import Image from "next/image";

const ItemCateCompnent = () => {
  return (
    <main className="my-8">
      <div className="flex justify-between items-center">
        <span>
          <p className="text-sm font-medium text-[var(--color-text-main)]">
            Mandi Aisles
          </p>
          <p className="font-semibold">Explore Daily Fresh Harvest</p>
        </span>
        <LinkButton
          url="/all-category"
          title="View all 14 categories"
          style="font-semibold text-[var(--color-success)]"
        />
      </div>
      <div className="mt-3 grid grid-cols-10 gap-3">
        {categories.slice(0, 10).map((cate, index) => {
          console.log(cate);
          return (
            <div key={index} className="border border-amber-400 rounded-full">
              <div className="relative w-6 h-6 rounded-xl bg-secondary-fixed/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src={cate.image}
                  alt={cate.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <strong>{CaretPosition.name}</strong>
              <p>{cate.description}</p>
              <p>{cate.id}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ItemCateCompnent;
