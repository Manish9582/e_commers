"use client";

import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

import { HiBolt, HiCheckCircle } from "react-icons/hi2";
import {
  MdEco,
  MdOutlineGrass,
  MdWaterDrop,
  MdLocalDining,
  MdScience,
  MdBookmarkAdd,
} from "react-icons/md";
import { GiPlantSeed } from "react-icons/gi";
import { FiArrowRight } from "react-icons/fi";
import Card from "@/components/common/Card";

const SPECIALTIES = [
  {
    label: "Ratnagiri GI Alphonso Mangoes",
    icon: <MdEco className="text-primary text-base" />,
  },
  {
    label: "Hydroponic Crispy Greens",
    icon: <MdOutlineGrass className="text-primary text-base" />,
  },
  {
    label: "Vedic A2 Gir Cow Bilona Ghee",
    icon: <MdWaterDrop className="text-primary text-base" />,
  },
];

const FEATURED_PRODUCTS = [
  {
    id: "mango",
    title: "Devgad Mango Box",
    price: "₹799/doz",
    icon: <MdLocalDining className="text-primary text-xl" />,
  },
  {
    id: "spinach",
    title: "Baby Spinach & Kale",
    price: "₹85/200g",
    icon: <GiPlantSeed className="text-primary text-xl" />,
  },
  {
    id: "ghee",
    title: "A2 Bilona Ghee",
    price: "₹1,150/500ml",
    icon: <MdScience className="text-primary text-xl" />,
  },
];

const ShopType = () => {
  return (
    <section className="px-6 mb-12 w-full my-8">
      <div
        className="relative overflow-hidden rounded-3xl flex flex-col lg:flex-row"
        style={{
          backgroundColor: "var(--color-surface-container)",
          border: "1px solid var(--color-border)",
        }}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-green-100/40 to-transparent pointer-events-none"></div>

        {/* Left Column: Image & Badges */}
        <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-full">
          <div className="relative w-full h-full min-h-[280px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGb-1l6p7HWEJ9K8vApgBj-zRpgmThqyXSLsMZW4iXbBmXhmovsYtk9ywsaap23AVGKf6LMBJ7hcnTPiACtH41jvAykV48yCp8JKk9rPFaFNvGimwNksvPKBoJoXtGdFs-_B-td87zjlDrVbD8mx4JoECgex79qSAs3L5YLYN0Ebk504OmUhu_FF9_AMWE8jrqDZSB6dV-Ett1YdKC5mV5ns1RcLLsgINoELlLrNc"
              alt="Bandra Organic Hub Shop Front"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              unoptimized
              className="object-cover"
            />
            {/* Absolute Badges on Image */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1 bg-[var(--color-primary)] text-white">
                <span className="text-sm">★</span> Featured Partner Hub
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold shadow-sm bg-amber-100 text-amber-900">
                100% Certified Organic
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md p-3 rounded-xl flex items-center justify-between text-gray-900 shadow-sm bg-white/90">
              <div className="flex items-center gap-1.5 text-sm font-bold">
                <HiBolt className="text-amber-500 text-lg" />
                <span>25-35 min delivery</span>
              </div>
              <span className="text-xs text-gray-500">1.2 km away</span>
            </div>
          </div>
        </div>

        {/* Right Column: Details, Specialties, Products, & Actions */}
        <div className="lg:w-7/12 p-8 lg:p-10 flex flex-col justify-between relative z-10">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  Bandra Organic Hub
                </h2>
                <HiCheckCircle
                  className="text-[var(--color-primary)] text-2xl"
                  title="FreshMart Verified"
                />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 shadow-sm">
                <AiFillStar className="text-amber-500 text-base" />
                <span className="text-sm font-bold text-gray-900">4.9</span>
                <span className="text-xs text-gray-500">(340+ reviews)</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Pali Hill, Bandra West • Premier community hub sourcing directly
              from certified organic farmer clusters across Ratnagiri, Saswad,
              and Nashik foothills.
            </p>

            {/* Specialties */}
            <div className="mb-6">
              <span className="text-xs text-gray-400 uppercase tracking-wider block mb-2 font-semibold">
                Specialties & In-Season Hits:
              </span>
              <div className="flex flex-wrap gap-2">
                {SPECIALTIES.map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium flex items-center gap-1.5 border border-gray-200"
                  >
                    {spec.icon}
                    {spec.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {FEATURED_PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="p-3 rounded-xl flex items-center gap-3 bg-gray-50 border border-gray-100 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-inner">
                    {prod.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-900 truncate">
                      {prod.title}
                    </p>
                    <p className="text-xs font-bold text-[var(--color-primary)] mt-0.5">
                      {prod.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Status & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-200 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-gray-700 font-medium">
                Open now until 8:30 PM • Free delivery above ₹499
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                title="Bookmark Hub"
              >
                <MdBookmarkAdd className="text-xl" />
              </button>
              <Link
                className="px-5 py-3 rounded-xl bg-[var(--color-primary)] hover:opacity-90 text-white text-sm font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                href="#"
              >
                <span>Visit Store & Shop Products</span>
                <FiArrowRight className="text-base" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <p className="mb-4 text-3xl font-medium">Shop Product</p>
          <Link href={"/product"}>All product</Link>
        </div>
        <div className="grid grid-cols-5 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default ShopType;
