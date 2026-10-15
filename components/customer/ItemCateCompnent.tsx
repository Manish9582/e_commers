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
          <p className="font-semibold text-2xl">Explore Daily Fresh Harvest</p>
        </span>
        <LinkButton
          url="/all-category"
          title="View all 14 categories"
          style="font-semibold text-[var(--color-success)]"
        />
      </div>
      <div className="bg-[var(--color-primary-light)]/5 mt-2 rounded-md p-4 flex flex-wrap items-center justify-between gap-4 text-on-surface-variant font-body-sm text-body-sm mb-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg">
            sanitizer
          </span>
          <span id="form-guarantee-text">
            Whole produce is unpolished, mud-washed with pure ozonated water,
            natural farm shelf-life (5-7 days).
          </span>
        </div>
        <div className="flex items-center gap-3 font-label-badge text-label-badge">
          <span className="bg-surface-container-lowest text-secondary px-3 py-1 rounded-full shadow-sm">
            🌿 Clean Nitrogen-Flush Pack
          </span>
          <span className="bg-surface-container-lowest text-secondary px-3 py-1 rounded-full shadow-sm">
            🛡️ Zero Preservatives Added
          </span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-8 gap-3">
        {categories.slice(0, 8).map((cate, index) => {
          return (
            <div
              key={cate.id}
              className="group relative flex flex-col items-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 hover:border-slate-200 transition-all duration-300 ease-in-out"
            >
              <div className="relative w-14 h-14 rounded-full bg-slate-50 p-1 ring-2 ring-slate-100 group-hover:ring-primary/20 transition-all duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={cate.image}
                    alt={cate.name}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="mt-3 text-center flex-1 flex flex-col items-center">
                <h3 className="font-semibold text-slate-800 text-base group-hover:text-primary transition-colors">
                  {cate.name}
                </h3>

                {cate.description && (
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {cate.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ItemCateCompnent;
