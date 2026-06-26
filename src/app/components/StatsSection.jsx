"use client";
import React, { useEffect, useRef } from "react";
import { DocumentTextIcon, UserGroupIcon, ClockIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  
  const rounded = useTransform(count, (latest) => 
    value % 1 !== 0 ? latest.toFixed(2) : Math.round(latest)
  );

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const statsList = [
  {
    metric: "Projects Built",
    value: 15,
    postfix: "+",
    icon: <DocumentTextIcon className="w-8 h-8" />,
    color: "cyan"
  },
  {
    metric: "Technologies",
    value: 12,
    postfix: "+",
    icon: <UserGroupIcon className="w-8 h-8" />,
    color: "magenta"
  },
  {
    metric: "CGPA Score",
    value: 7.86,
    postfix: "",
    icon: <ClockIcon className="w-8 h-8" />,
    color: "electricPurple"
  },
  {
    metric: "Hackathons",
    value: 3,
    postfix: "+",
    icon: <TrophyIcon className="w-8 h-8" />,
    color: "cyan"
  },
];

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
                  <AnimatedNumber value={stat.value} />
                  {stat.postfix && <span className={`text-${stat.color} ml-1`}>{stat.postfix}</span>}
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
