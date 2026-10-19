import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiArrowRight,
  FiAward,
  FiHeart,
  FiShield,
  FiUsers,
  FiTruck,
} from "react-icons/fi";
import { MdEco, MdOutlineGrass, MdVerified } from "react-icons/md";

// Key Performance Metrics
const STATS = [
  { value: "100%", label: "Organic Sourcing", icon: <MdVerified /> },
  { value: "30 Mins", label: "Average Delivery", icon: <FiTruck /> },
  { value: "5,000+", label: "Local Farmers", icon: <FiUsers /> },
  { value: "0 Plastics", label: "Eco Delivery", icon: <MdEco /> },
];

// Leadership Team Data
const LEADERSHIP_TEAM = [
  {
    name: "Manish",
    role: "Co-Founder & CEO",
    bio: "Pioneering sustainable direct-from-farm supply chains to connect certified farmer clusters across India with fresh produce lovers.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Roshan",
    role: "Co-Founder & COO",
    bio: "Mastermind behind cold-chain logistics, quick hyper-local fulfillment, and sub-30 minute farm-to-door deliveries.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Vivek",
    role: "Co-Founder & CTO",
    bio: "Building predictive demand AI and innovative eco-friendly packaging tech to ensure zero food waste and zero plastic usage.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
];

// Core Value Cards
const CORE_VALUES = [
  {
    icon: <MdOutlineGrass className="text-3xl text-[var(--color-primary)]" />,
    title: "100% Certified Organic",
    desc: "Sourced directly from verified organic soil, free from pesticides, harmful fertilizers, or chemical sprays.",
  },
  {
    icon: <MdEco className="text-3xl text-[var(--color-primary)]" />,
    title: "Zero-Plastic Mission",
    desc: "We pack all harvests in eco-friendly paper bags and reusable glass containers to keep the planet green.",
  },
  {
    icon: <FiShield className="text-3xl text-[var(--color-primary)]" />,
    title: "Fair Pay For Farmers",
    desc: "By eliminating middlemen, we pay our local farmer collectives 35% above market baseline rates.",
  },
];

const About = () => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        backgroundColor: "var(--color-surface-base)",
        color: "var(--color-text-body)",
      }}
    >
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text */}
          <div className="lg:w-6/12 flex flex-col items-start">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-1.5 shadow-sm"
              style={{
                backgroundColor: "var(--color-primary-container)",
                color: "var(--color-on-primary-container)",
              }}
            >
              <MdVerified className="text-sm" /> The FreshMart Promise
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              style={{ color: "var(--color-text-main)" }}
            >
              Fresh From{" "}
              <span style={{ color: "var(--color-primary)" }}>Our Farms</span>{" "}
              To Your Table.
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: "var(--color-text-muted)" }}
            >
              We believe food should be clean, natural, and transparent.
              FreshMart connects local organic farms directly to your doorstep
              within hours—preserving full nutrition without plastic waste.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="px-8 py-4 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg hover:opacity-90 cursor-pointer"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-text-inverse)",
                }}
              >
                <span>Explore Daily Harvest</span>
                <FiArrowRight className="text-base" />
              </Link>
            </div>
          </div>

          {/* Right Image Banner */}
          <div className="lg:w-6/12 w-full relative">
            <div
              className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4"
              style={{ borderColor: "var(--color-surface-low)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
                alt="Fresh Organic Vegetables Harvest"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                className="object-cover"
              />
              {/* Overlay Glass Badge */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/80 p-4 rounded-2xl border border-white/50 shadow-lg flex items-center justify-between text-gray-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center font-bold text-xl">
                    <FiHeart />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">
                      Cultivated With Love
                    </p>
                    <p className="text-sm font-extrabold text-gray-900">
                      100% Chemical-Free
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-full">
                  Certified Hub
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section
        className="py-10 border-y"
        style={{
          backgroundColor: "var(--color-surface-low)",
          borderColor: "var(--color-border-subtle)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm shrink-0"
                style={{
                  backgroundColor: "var(--color-primary-container)",
                  color: "var(--color-on-primary-container)",
                }}
              >
                {stat.icon}
              </div>
              <div>
                <h3
                  className="text-2xl font-black"
                  style={{ color: "var(--color-text-main)" }}
                >
                  {stat.value}
                </h3>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-2"
            style={{ color: "var(--color-primary)" }}
          >
            Why FreshMart Standing Out
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: "var(--color-text-main)" }}
          >
            Rooted In Pure Sustainability
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border shadow-sm flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border-subtle)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner"
                style={{ backgroundColor: "var(--color-surface-container)" }}
              >
                {value.icon}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--color-text-main)" }}
              >
                {value.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MEET THE FOUNDERS SECTION */}
      <section
        className="py-20 border-t"
        style={{
          backgroundColor: "var(--color-surface-low)",
          borderColor: "var(--color-border-subtle)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-semibold mb-2 inline-block"
              style={{
                backgroundColor: "var(--color-primary-container)",
                color: "var(--color-on-primary-container)",
              }}
            >
              Leadership & Vision
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-2"
              style={{ color: "var(--color-text-main)" }}
            >
              Meet Our Founders
            </h2>
            <p
              className="text-xs sm:text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              The team behind FreshMart’s mission to transform organic grocery
              delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border shadow-sm flex flex-col items-center text-center transition-all hover:shadow-lg"
                style={{
                  backgroundColor: "var(--color-surface-base)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="144px"
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  {member.name}
                </h3>
                <span
                  className="text-xs font-bold px-3.5 py-1 rounded-full my-2.5"
                  style={{
                    backgroundColor: "var(--color-primary-container)",
                    color: "var(--color-on-primary-container)",
                  }}
                >
                  {member.role}
                </span>
                <p
                  className="text-xs leading-relaxed mt-2"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div
          className="p-10 md:p-16 rounded-3xl text-center flex flex-col items-center justify-center gap-6 shadow-xl relative overflow-hidden"
          style={{
            backgroundColor: "var(--color-surface-container)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-sm mb-2"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            <FiAward />
          </div>

          <h2
            className="text-3xl sm:text-4xl font-extrabold max-w-xl"
            style={{ color: "var(--color-text-main)" }}
          >
            Taste The Freshness Of True Organic Harvest
          </h2>

          <p
            className="text-xs sm:text-sm max-w-lg leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Order today and enjoy farm-fresh greens, fresh fruits, and Vedic
            dairy directly delivered to your kitchen door.
          </p>

          <Link
            href="#"
            className="px-8 py-4 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 shadow-md hover:opacity-90 cursor-pointer"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            <span>Start Shopping Now</span>
            <FiArrowRight className="text-base" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
