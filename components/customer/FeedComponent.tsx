import React from "react";
import { AiFillStar } from "react-icons/ai";
import LinkButton from "../common/LinkButton";

const REVIEWS = [
  {
    id: 1,
    quote:
      "The pre-cut Sambar bowl saves me 25 minutes of morning rush before packing my daughter's tiffin. Vegetables smell like real soil, not cold-storage plastic.",
    name: "Priya Seshadri",
    location: "Defense Colony, Indiranagar",
    initials: "PS",
  },
  {
    id: 2,
    quote:
      "I was skeptical about ready-cut veggies staying fresh, but FreshMart completely changed my mind. Crisp, clean, and extremely hygienic packaging.",
    name: "Rahul Verma",
    location: "Koramangala 4th Block",
    initials: "RV",
  },
  {
    id: 3,
    quote:
      "Absolute lifesaver for working professionals. The fruit bowls are always sweet and ripe, and delivery is right on schedule every single morning.",
    name: "Ananya Dixit",
    location: "HSR Layout, Sector 2",
    initials: "AD",
  },
];

const FeedComponent = () => {
  return (
    <section className="mt-12">
      <div className="flex justify-between items-center">
        <div className="text-center md:text-left mb-8">
          <span className="text-primary text-sm font-bold tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
            Real Urban Kitchens
          </span>
          <h2 className="font-headline-md text-3xl font-bold text-on-surface mt-2">
            Loved by 45,000+ Families
          </h2>
        </div>
        <LinkButton
          title="Give Your Feedback"
          url="/about"
          style="font-semibold text-[var(--color-success)] text-xl underline"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review) => (
          <div
            key={review.id}
            className="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-surface-variant/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className="text-lg" />
                  ))}
                </div>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold">
                  Verified Order
                </span>
              </div>
              <p className="text-body-md text-on-surface italic leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-surface-variant/40">
              <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                {review.initials}
              </div>
              <div>
                <p className="font-semibold text-sm text-on-surface">
                  {review.name}
                </p>
                <p className="text-xs text-on-surface-variant">
                  {review.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedComponent;
