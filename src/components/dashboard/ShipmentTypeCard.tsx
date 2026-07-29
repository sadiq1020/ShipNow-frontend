"use client";

import { MoreHorizontal } from "lucide-react";

export function ShipmentTypeCard() {
  const shipmentTypes = [
    {
      name: "Road Freight",
      count: "1,150 shipment",
      percentage: "46%",
      bgColor: "bg-[#856DF3]",
      textColor: "text-white",
    },
    {
      name: "Ocean Freight",
      count: "425 shipments",
      percentage: "17%",
      bgColor: "bg-[#757575]",
      textColor: "text-white",
    },
    {
      name: "Air Freight",
      count: "700 shipments",
      percentage: "28%",
      bgColor: "bg-[#333333]",
      textColor: "text-white",
    },
    {
      name: "Rail Freight",
      count: "225 shipments",
      percentage: "9%",
      bgColor: "bg-[#E0E0E0]",
      textColor: "text-[#333333]",
    },
  ];

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full h-full">
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-semibold text-[#333333]">
          Shipment Type
        </h3>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F8F9FB] border border-[#E0E0E0]/60 text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Large Donut Chart Graphics Container (Fills card width up to max-w-[250px]) */}
      <div className="flex-1 flex flex-col justify-center my-3 sm:my-5">
        <div className="relative w-full max-w-[250px] aspect-square mx-auto flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Road Freight: 46% (#856DF3) */}
            <circle
              cx="50"
              cy="50"
              r="39"
              fill="transparent"
              stroke="#856DF3"
              strokeWidth="11"
              strokeDasharray="112.72 132.33"
              strokeDashoffset="0"
              className="transition-all duration-500 hover:opacity-90"
            />
            {/* Air Freight: 28% (#333333) */}
            <circle
              cx="50"
              cy="50"
              r="39"
              fill="transparent"
              stroke="#333333"
              strokeWidth="11"
              strokeDasharray="68.61 176.44"
              strokeDashoffset="-112.72"
              className="transition-all duration-500 hover:opacity-90"
            />
            {/* Ocean Freight: 17% (#757575) */}
            <circle
              cx="50"
              cy="50"
              r="39"
              fill="transparent"
              stroke="#757575"
              strokeWidth="11"
              strokeDasharray="41.66 203.39"
              strokeDashoffset="-181.33"
              className="transition-all duration-500 hover:opacity-90"
            />
            {/* Rail Freight: 9% (#E0E0E0) */}
            <circle
              cx="50"
              cy="50"
              r="39"
              fill="transparent"
              stroke="#E0E0E0"
              strokeWidth="11"
              strokeDasharray="22.05 223.00"
              strokeDashoffset="-222.99"
              className="transition-all duration-500 hover:opacity-90"
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-xs sm:text-[13px] font-semibold text-[#757575] tracking-wide">
              Total Shipment
            </span>
            <span className="text-2xl sm:text-[28px] font-bold text-[#333333] tracking-tight leading-tight mt-0.5">
              2,500
            </span>
          </div>
        </div>
      </div>

      {/* Legend Items (2x2 Grid with Figma Percentage Badges) */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 pt-1">
        {shipmentTypes.map((item) => (
          <div key={item.name} className="flex items-center gap-2.5">
            {/* Percentage Badge Box (32px x 31px, radius 6px) */}
            <div
              className={`w-[32px] h-[31px] rounded-[6px] ${item.bgColor} ${item.textColor} flex items-center justify-center text-xs font-bold shrink-0 shadow-xs`}
            >
              {item.percentage}
            </div>

            {/* Title & Count */}
            <div className="flex flex-col min-w-0">
              <span className="truncate text-xs font-bold text-[#333333]">
                {item.name}
              </span>
              <span className="truncate text-[11px] font-medium text-[#757575]">
                {item.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
