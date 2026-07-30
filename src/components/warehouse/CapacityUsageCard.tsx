"use client";

import { MoreHorizontal } from "lucide-react";

export function CapacityUsageCard() {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#1E1E24] p-5 text-white shadow-md w-full h-full min-h-[300px]">
      {/* Top Header Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-200">Capacity Usage</h3>
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 hover:bg-white/10 hover:text-white transition"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Center Donut Gauge Chart (Figma 180px x 180px, White Track & Purple Arc) */}
      <div className="relative flex flex-col items-center justify-center my-3">
        <div className="relative w-[180px] h-[180px] flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Pure White Background Track (Figma Exact Match) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#FFFFFF"
              strokeWidth="12"
            />
            {/* Purple Progress Arc #856DF3 (62.5% of 251.2 circumference = ~157) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#856DF3"
              strokeWidth="12"
              strokeDasharray="251.2"
              strokeDashoffset="94"
              strokeLinecap="butt"
            />
          </svg>

          {/* Center Text Inside Donut */}
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-[11px] font-medium text-gray-400">
              Total Usage
            </span>
            <span className="text-2xl font-black text-white tracking-tight mt-0.5">
              62.5%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Loaded vs Empty Shelves Stats */}
      <div className="grid grid-cols-2 gap-4 text-center border-t border-white/10 pt-3">
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-medium text-gray-400">Loaded</span>
          <span className="text-sm font-bold text-white mt-0.5">
            40 shelves
          </span>
        </div>
        <div className="flex flex-col items-center border-l border-white/10 pl-4">
          <span className="text-[10px] font-medium text-gray-400">Empty</span>
          <span className="text-sm font-bold text-white mt-0.5">
            24 shelves
          </span>
        </div>
      </div>
    </div>
  );
}
