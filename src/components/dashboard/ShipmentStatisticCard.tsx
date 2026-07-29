"use client";

import { shipmentStatsSeries } from "@/data/dashboard";
import { ChevronDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

export function ShipmentStatisticCard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last Year");
  const maxCount = 4500;

  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#FEFEFE] p-4 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-extrabold text-[#333333]">
            Shipment Statistic
          </h3>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-xl font-black text-[#333333]">4,352</span>
            <span className="flex items-center rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600">
              <TrendingUp className="mr-0.5 h-3 w-3" /> +8.7%
            </span>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 rounded-lg bg-[#F8F9FB] border border-[#E0E0E0] px-2.5 py-1.5 text-xs font-semibold text-[#333333] hover:bg-[#F0F0F0] transition"
        >
          <span>{selectedPeriod}</span>
          <ChevronDown className="h-3.5 w-3.5 text-[#757575]" />
        </button>
      </div>

      {/* SVG Chart Area */}
      <div className="relative mt-4 h-44 w-full">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between text-[9px] font-semibold text-[#757575]/60 pointer-events-none">
          <div className="border-b border-dashed border-[#E0E0E0]">4.8K</div>
          <div className="border-b border-dashed border-[#E0E0E0]">3.6K</div>
          <div className="border-b border-dashed border-[#E0E0E0]">2.4K</div>
          <div className="border-b border-dashed border-[#E0E0E0]">1.2K</div>
          <div className="border-b border-[#E0E0E0]">0K</div>
        </div>

        {/* Bars Container */}
        <div className="relative flex h-full items-end justify-between px-6 pt-4 pb-5">
          {shipmentStatsSeries.map((item) => {
            const heightPercent = (item.count / maxCount) * 100;

            return (
              <div
                key={item.month}
                className="group relative flex flex-col items-center flex-1 justify-end h-full cursor-pointer"
              >
                {/* May 2030 Highlight Tooltip Card */}
                {item.highlighted && (
                  <div className="absolute -top-7 z-10 animate-bounce rounded-lg bg-[#333333] px-2 py-1 text-center shadow-lg">
                    <span className="block text-[9px] font-normal text-gray-300">
                      May 2030
                    </span>
                    <span className="block text-xs font-black text-white">
                      3,124
                    </span>
                    <div className="absolute left-1/2 -bottom-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#333333]"></div>
                  </div>
                )}

                {/* Hover Tooltip for non-highlighted items */}
                {!item.highlighted && (
                  <div className="absolute -top-8 z-10 hidden group-hover:block rounded bg-[#333333] px-1.5 py-0.5 text-[10px] font-bold text-white shadow-md">
                    {item.count.toLocaleString()}
                  </div>
                )}

                {/* Bar */}
                <div className="w-4 rounded-t-md bg-[#F0F0F0] overflow-hidden transition-all duration-300 group-hover:bg-[#856DF3]/30 h-full flex items-end">
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={clsx(
                      "w-full rounded-t-md transition-all duration-500",
                      item.highlighted
                        ? "bg-gradient-to-t from-[#856DF3] to-[#A290F5] shadow-md shadow-[#856DF3]/30"
                        : "bg-[#757575]/20 group-hover:bg-[#856DF3]"
                    )}
                  />
                </div>

                {/* Month Label */}
                <span
                  className={clsx(
                    "mt-2 text-[10px] font-bold transition-colors",
                    item.highlighted
                      ? "text-[#856DF3]"
                      : "text-[#757575] group-hover:text-[#333333]"
                  )}
                >
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
