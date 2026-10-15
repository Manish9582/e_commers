"use client";
import React from "react";
import {
  LuLeaf,
  HiOutlineSparkles,
  BsHandbag,
  ImSpoonKnife,
  FaTractor,
  MdVerified,
  BsSpeedometer2,
  FaFire,
  IoIosTimer,
} from "@/constants/icons";

import LinkButton from "@/components/common/LinkButton";
import SellComponent from "@/components/customer/SellComponent";
import TopSellCompnent from "@/components/customer/TopSellCompnent";
import ItemCateCompnent from "@/components/customer/ItemCateCompnent";
import VegCardComponent from "@/components/customer/VegCardComponent";
import Card from "@/components/common/Card";
import ShopsComponent from "@/components/customer/ShopsComponent";
import FeedComponent from "@/components/customer/FeedComponent";

const Home = () => {
  const featuresData = [
    {
      icon: <FaTractor />,
      iconBg: "bg-secondary-container text-secondary",
      title: "120+ Farms",
      subtitle: "Direct Mandi Fair Price",
    },
    {
      icon: <MdVerified />,
      iconBg: "bg-tertiary-fixed text-tertiary",
      title: "0% Chemical",
      subtitle: "NPOP Certified Labs",
    },
    {
      icon: <BsSpeedometer2 />,
      iconBg: "bg-primary-fixed text-primary",
      title: "24 Mins Avg",
      subtitle: "Hoskote & Kolar Hubs",
    },
  ];
  return (
    <div className="max-w-8xl mx-auto px-4 lg:px-12 py-6 md:py-8">
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 bg-[var(--color-primary-light)]/5 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center gap-2 ">
                <span className="inline-flex bg-white items-center gap-1.5 bg-surface-container-lowest text-secondary px-3 py-1 rounded-full font-label-badge text-label-badge shadow-sm">
                  <LuLeaf /> 100% Ozone Washed & Hygienic
                </span>
                <span className="inline-flex bg-[var(--color-accent-orange)]/40 items-center gap-1.5 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full font-label-badge text-label-badge shadow-sm">
                  <HiOutlineSparkles /> 30-Min Express Slot Open
                </span>
              </div>
              <div className="text-5xl max-w-4xl">
                Freshest Harvest Delivered from Mandi to Your Kitchen in{" "}
                <span className="underline font-semibold">30 Mins</span>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Picked this morning from verified Karnataka & Maharashtra
                organic farmer collectives. Zero chemical wax, triple ozone
                purified, packed in breathable crates.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <LinkButton
                  url="/shop"
                  icon={BsHandbag}
                  title="Shop Today's Harvest"
                  style="bg-[var(--color-success)] text-white font-semibold hover:bg-primary-container text-on-primary px-6 py-3.5 rounded-full font-label-btn text-label-btn shadow-md hover:shadow-lg transition-all"
                />
                <LinkButton
                  url="/shop"
                  icon={ImSpoonKnife}
                  title="Explore Cut & Ready Bowls"
                  style="bg-white font-semibold hover:bg-primary-container text-on-primary px-6 py-3.5 rounded-full font-label-btn text-label-btn shadow-md hover:shadow-lg transition-all"
                />
              </div>
            </div>
            <div className="relative z-10 mt-8 pt-6 bg-white backdrop-blur-sm rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
              {featuresData.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${item.iconBg}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-headline-sm text-headline-sm text-on-surface font-bold leading-none">
                        {item.title}
                      </p>
                      <p className="font-label-caption text-label-caption text-on-surface-variant">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  {index < featuresData.length - 1 && (
                    <div className="w-px h-8 bg-surface-variant hidden sm:block"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
            <SellComponent />
            <TopSellCompnent />
          </div>
        </div>
      </section>
      <ItemCateCompnent />
      <VegCardComponent />

      <div className="bg-[var(--color-accent-orange)] mt-8 mb-4 text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md mb-8">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/20 0 px-3 py-1 rounded-full font-label-badge text-label-badge text-tertiary-fixed">
            <FaFire />
            <span className="text-sm font-semibold">
              MORNING MANDI AUCTION DEALS
            </span>
          </div>
          <h2 className="text-4xl font-semibold">Subah Ki Taaza Mandi Deals</h2>
          <p className="font-body-md text-body-md text-tertiary-fixed-dim">
            Harvested at dawn, priced at farm gate wholesale rates. Refreshes
            every 4 hours.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-lowest/15 backdrop-blur-md px-5 py-3 rounded-2xl">
          <IoIosTimer className="text-2xl font-bold" />
          <div className="flex items-center gap-2 font-semibold text-2xl">
            <span id="hours-box">02</span>
            <span className="opacity-70">:</span>
            <span id="minutes-box">44</span>
            <span className="opacity-70">:</span>
            <span id="seconds-box">18</span>
          </div>
          <span className="font-label-caption text-label-caption text-tertiary-fixed ml-1">
            Left to order
          </span>
        </div>
      </div>

      <Card />
      <ShopsComponent />

      <FeedComponent />
    </div>
  );
};

export default Home;
