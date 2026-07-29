"use client";

import { useState } from "react";

interface CompanyLogoProps {
  logoType: string;
  companyName: string;
  className?: string;
}

export function CompanyLogo({
  logoType,
  companyName,
  className = "h-7 w-7",
}: CompanyLogoProps) {
  const [imageError, setImageError] = useState(false);

  // Path where user can optionally drop custom PNG/SVG files
  const customImagePath = `/logos/${logoType}.png`;

  if (!imageError) {
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={customImagePath}
          alt={`${companyName} Logo`}
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Built-in crisp vector SVG marks matching Figma logos
  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`}>
      {logoType === "techgear" && (
        // Dark Hexagon Mark
        <svg className="h-7 w-7 text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M16 3L27.25 9.5V22.5L16 29L4.75 22.5V9.5L16 3ZM16 7L8.75 11.18V20.82L16 25L23.25 20.82V11.18L16 7Z" />
        </svg>
      )}

      {logoType === "stylehub" && (
        // Purple Triangle Mark
        <svg className="h-7 w-7 text-[#856DF3] fill-current" viewBox="0 0 32 32">
          <path d="M16 4L28 26H4L16 4ZM16 10L9 22H23L16 10Z" />
        </svg>
      )}

      {logoType === "freshnest" && (
        // Black Dome / Tree Mark
        <svg className="h-7 w-7 text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4ZM16 8C19.31 8 22 10.69 22 14C22 17.31 19.31 20 16 20C12.69 20 10 17.31 10 14C10 10.69 12.69 8 16 8Z" />
        </svg>
      )}

      {logoType === "fitplus" && (
        // Purple Gear Ring Mark
        <svg className="h-7 w-7 text-[#856DF3] fill-current" viewBox="0 0 32 32">
          <path d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16H22C22 19.31 19.31 22 16 22C12.69 22 10 19.31 10 16C10 12.69 12.69 10 16 10V4Z" />
        </svg>
      )}

      {logoType === "ecolights" && (
        // Black Diamond Mark
        <svg className="h-7 w-7 text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M16 3L27 16L16 29L5 16L16 3ZM16 8L9.5 16L16 24.5L22.5 16L16 8Z" />
        </svg>
      )}

      {logoType === "autoparts" && (
        // Asterisk Burst Mark
        <svg className="h-7 w-7 text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M14 2H18V10H14V2ZM14 22H18V30H14V22ZM2 14H10V18H2V14ZM22 14H30V18H22V14ZM6.05 4.64L11.7 10.29L8.87 13.12L3.22 7.47L6.05 4.64ZM23.13 21.72L28.78 27.37L25.95 30.2L20.3 24.55L23.13 21.72ZM25.95 4.64L28.78 7.47L23.13 13.12L20.3 10.29L25.95 4.64ZM8.87 21.72L11.7 24.55L6.05 30.2L3.22 27.37L8.87 21.72Z" />
        </svg>
      )}

      {logoType === "greenhaven" && (
        // Purple Shield Mark
        <svg className="h-7 w-7 text-[#856DF3] fill-current" viewBox="0 0 32 32">
          <path d="M16 3L27 7V16C27 22.5 22 27.5 16 29C10 27.5 5 22.5 5 16V7L16 3ZM16 7L9 9.5V16C9 20.5 12.5 24.2 16 25.4C19.5 24.2 23 20.5 23 16V9.5L16 7Z" />
        </svg>
      )}

      {logoType === "modawear" && (
        // Black M Wave Mark
        <svg className="h-7 w-7 text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M4 8H9L16 18L23 8H28V24H23V15L17.5 23H14.5L9 15V24H4V8Z" />
        </svg>
      )}

      {logoType === "suncore" && (
        // Grid Dots Mark
        <svg className="h-7 w-7 text-[#333333] fill-current" viewBox="0 0 32 32">
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <circle cx="24" cy="8" r="3" />
          <circle cx="8" cy="16" r="3" />
          <circle cx="16" cy="16" r="3" />
          <circle cx="24" cy="16" r="3" />
          <circle cx="8" cy="24" r="3" />
          <circle cx="16" cy="24" r="3" />
          <circle cx="24" cy="24" r="3" />
        </svg>
      )}

      {logoType === "quickparts" && (
        // Diagonal Stripes Mark
        <svg className="h-7 w-7 text-[#856DF3] fill-current" viewBox="0 0 32 32">
          <path d="M6 24L16 8H22L12 24H6ZM14 24L24 8H28L18 24H14Z" />
        </svg>
      )}

      {logoType === "vitafresh" && (
        // Glasses Fruit Mark
        <svg className="h-7 w-7 text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M8 8C4.69 8 2 10.69 2 14C2 17.31 4.69 20 8 20C11.31 20 14 17.31 14 14C14 10.69 11.31 8 8 8ZM24 8C20.69 8 18 10.69 18 14C18 17.31 20.69 20 24 20C27.31 20 30 17.31 30 14C30 10.69 27.31 8 24 8ZM14 13H18V15H14V13Z" />
        </svg>
      )}

      {logoType === "styledepot" && (
        // Purple Spiral Mark
        <svg className="h-7 w-7 text-[#856DF3] fill-current" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="4" fill="none" />
          <circle cx="16" cy="16" r="5" fill="currentColor" />
        </svg>
      )}
    </div>
  );
}
