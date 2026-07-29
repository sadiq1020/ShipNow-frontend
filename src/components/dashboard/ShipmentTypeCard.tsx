"use client";

import { shipmentTypeDistribution } from "@/data/dashboard";
import { MoreHorizontal } from "lucide-react";

export function ShipmentTypeCard() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#FEFEFE] p-4 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-[#333333]">
          Shipment Type
        </h3>
        <button
          type="button"
          className="rounded-lg p-1 text-[#757575] hover:bg-[#F0F0F0] hover:text-[#333333] transition"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Donut Chart Graphics */}
      <div className="relative my-4 flex items-center justify-center">
        <svg className="h-44 w-44 -rotate-90" viewBox="0 0 100 100">
          {/* Road Freight: 46% */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="transparent"
            stroke="#856DF3"
            strokeWidth="14"
            strokeDasharray="238.76"
            strokeDashoffset="0"
            className="transition-all duration-500 hover:opacity-85"
          />
          {/* Air Freight: 28% */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="transparent"
            stroke="#333333"
            strokeWidth="14"
            strokeDasharray="238.76"
            strokeDashoffset="-109.83"
            className="transition-all duration-500 hover:opacity-85"
          />
          {/* Ocean Freight: 17% */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="transparent"
            stroke="#757575"
            strokeWidth="14"
            strokeDasharray="238.76"
            strokeDashoffset="-176.68"
            className="transition-all duration-500 hover:opacity-85"
          />
          {/* Rail Freight: 9% */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="transparent"
            stroke="#E3DDFF"
            strokeWidth="14"
            strokeDasharray="238.76"
            strokeDashoffset="-217.27"
            className="transition-all duration-500 hover:opacity-85"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="text-[10px] font-semibold text-[#757575] uppercase tracking-wider">
            Total Shipment
          </span>
          <span className="text-xl font-black text-[#333333] tracking-tight">
            2,500
          </span>
        </div>
      </div>

      {/* Legend Grid */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        {shipmentTypeDistribution.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 rounded-lg bg-[#F8F9FB] p-2 border border-[#E0E0E0]/50"
          >
            <span
              className="h-3 w-3 rounded-md shrink-0 shadow-xs"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex flex-col min-w-0">
              <span className="truncate text-[11px] font-bold text-[#333333]">
                {item.name}
              </span>
              <span className="text-[10px] font-medium text-[#757575]">
                {item.count} shipments ({item.percentage}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
