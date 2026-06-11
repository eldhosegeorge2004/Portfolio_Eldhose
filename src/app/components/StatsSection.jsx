"use client";
import React from "react";
import dynamic from "next/dynamic";
import { DocumentTextIcon, UserGroupIcon, ClockIcon, TrophyIcon } from "@heroicons/react/24/outline";

// Dynamically import react-animated-numbers to avoid SSR issues
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const statsList = [
  {
    metric: "Projects Built",
    value: "15",
    postfix: "+",
    icon: <DocumentTextIcon className="w-8 h-8" />,
    color: "cyan"
  },
  {
    metric: "Technologies",
    value: "12",
    postfix: "+",
    icon: <UserGroupIcon className="w-8 h-8" />,
    color: "magenta"
  },
  {
    metric: "CGPA Score",
    value: "7.86",
    postfix: "",
    icon: <ClockIcon className="w-8 h-8" />,
    color: "electricPurple"
  },
  {
    metric: "Hackathons",
    value: "3",
    postfix: "+",
    icon: <TrophyIcon className="w-8 h-8" />,
    color: "cyan"
  },
];

const animationConfigs = (_, index) => {
  return {
    mass: 1,
    friction: 100,
    tensions: 140 * (index + 1),
  };
};

const StatsSection = () => {
  return (
    <div className="py-16 border-y border-white/5 bg-obsidian relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {statsList.map((stat, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center pt-8 md:pt-0 group`}
              >
                <div className={`text-${stat.color} mb-4 transform group-hover:scale-110 transition-transform duration-300 opacity-80 group-hover:opacity-100`}>
                  {stat.icon}
                </div>
                <h2 className="text-white text-4xl xl:text-5xl font-black font-[family-name:var(--font-syne)] flex flex-row items-center mb-2">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseFloat(stat.value)}
                    locale="en-US"
                    className="text-white"
                  />
                  {stat.postfix && <span className={`text-${stat.color}`}>{stat.postfix}</span>}
                </h2>
                <p className="text-slate-400 text-sm font-mono tracking-widest uppercase text-center mt-2 group-hover:text-white transition-colors duration-300">
                  {stat.metric}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
