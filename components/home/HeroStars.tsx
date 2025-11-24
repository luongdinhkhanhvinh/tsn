"use client";

import React from "react";

interface HeroStarsProps {
  className?: string;
}

export const HeroStars: React.FC<HeroStarsProps> = ({ className }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute mix-blend-screen will-change-transform will-change-opacity w-[742px] h-[350px] top-[16px] left-[30%]">
        <div className="animate-flash">
          <div
            className="absolute inset-0 bg-no-repeat bg-left-top bg-cover bg-scroll bg-origin-content pointer-events-none"
            style={{
              backgroundImage: "url('/images/bg_banner_4.png')",
            }}
          />
        </div>
      </div>

      <div className="absolute mix-blend-screen will-change-transform will-change-opacity w-28 h-28 top-44 right-52">
        <div className="animate-flash">
          <div
            className="absolute inset-0 bg-no-repeat bg-left-top bg-cover bg-scroll bg-origin-content pointer-events-none"
            style={{
              backgroundImage: "url('/images/bg_banner_3.png')",
            }}
          />
        </div>
      </div>
    </div>
  );
};
