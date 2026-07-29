"use client";

import { profitSummarySeries } from "@/data/dashboard";
import { ChevronDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

export function ProfitSummaryCard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 8 Months");
  const maxVal = 100000;

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Top Header Row: Title & Filter Menu */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-extrabold text-[#333333]">
          Profit Summary
        </h3>

        {/* "Last 8 Months" Filter Dropdown Button */}
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-xl bg-[#F8F9FB] border border-[#E0E0E0] px-3 py-1.5 text-xs font-semibold text-[#333333] hover:bg-[#F0F0F0] transition"
        >
          <span>{selectedPeriod}</span>
          <ChevronDown className="h-3.5 w-3.5 text-[#757575]" />
        </button>
      </div>

      {/* Second Row: Main Value, Badge & Legend */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-1 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-[28px] md:text-[24px] lg:text-[28px] leading-tight font-black text-[#333333]">
            $624,550
          </span>
          <span className="flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-600">
            <TrendingUp className="mr-1 h-3.5 w-3.5 stroke-[2.5]" /> +5.62%
          </span>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-xs font-semibold text-[#757575]">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#856DF3]" />
            Revenue
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#333333]" />
            Cost
          </span>
        </div>
      </div>

      {/* SVG Dual Bar Chart Area */}
      <div className="relative mt-2 h-48 w-full">
        {/* Background Grid Lines & Y-Axis Labels */}
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] font-semibold text-[#757575]/60 pointer-events-none pb-7">
          <div className="flex items-center gap-2">
            <span className="w-9 text-right shrink-0">$100K</span>
            <div className="w-full border-b border-dashed border-[#E0E0E0]/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-9 text-right shrink-0">$75K</span>
            <div className="w-full border-b border-dashed border-[#E0E0E0]/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-9 text-right shrink-0">$50K</span>
            <div className="w-full border-b border-dashed border-[#E0E0E0]/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-9 text-right shrink-0">$25K</span>
            <div className="w-full border-b border-dashed border-[#E0E0E0]/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-9 text-right shrink-0">$0</span>
            <div className="w-full border-b border-[#E0E0E0]" />
          </div>
        </div>

        {/* Dual Bars Container */}
        <div className="absolute inset-0 pl-12 pr-2 pb-7 flex items-end justify-between">
          {profitSummarySeries.map((item) => {
            const revHeight = (item.revenue / maxVal) * 100;
            const costHeight = (item.cost / maxVal) * 100;

            return (
              <div
                key={item.month}
                className="group relative flex-1 flex flex-col items-center justify-end h-full cursor-pointer"
              >
                {/* May Highlight Tooltip: #F0F0F0 background, 8px radius, 8px padding, vertical layout */}
                {item.highlighted && (
                  <div className="absolute -top-14 z-20 flex flex-col items-center">
                    <div className="w-[114px] rounded-lg bg-[#F0F0F0] p-2 shadow-md border border-[#E0E0E0]/80">
                      <div className="flex flex-col gap-1 text-xs">
                        <div className="flex items-center justify-between text-[#757575]">
                          <span className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-[#856DF3] shrink-0" />
                            <span>Revenue</span>
                          </span>
                          <span className="font-extrabold text-[#333333]">
                            ${item.revenue.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[#757575]">
                          <span className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-[#333333] shrink-0" />
                            <span>Cost</span>
                          </span>
                          <span className="font-extrabold text-[#333333]">
                            ${item.cost.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover Tooltip for non-highlighted items */}
                {!item.highlighted && (
                  <div className="absolute -top-9 z-20 hidden group-hover:flex items-center gap-2 rounded-lg bg-[#F0F0F0] p-1.5 text-[10px] font-bold text-[#333333] shadow-md border border-[#E0E0E0]/80 whitespace-nowrap">
                    <span>Rev: ${item.revenue.toLocaleString()}</span>
                    <span>Cost: ${item.cost.toLocaleString()}</span>
                  </div>
                )}

                {/* Dual Bars Pair */}
                <div className="flex items-end gap-1 sm:gap-1.5 h-full">
                  {/* Revenue Bar: #856DF3 for May, #E3DDFF for non-highlighted */}
                  <div
                    style={{ height: `${revHeight}%` }}
                    className={clsx(
                      "w-3 sm:w-3.5 rounded-t-md transition-all duration-300",
                      item.highlighted
                        ? "bg-[#856DF3] shadow-md shadow-[#856DF3]/30"
                        : "bg-[#E3DDFF] group-hover:bg-[#856DF3]/80"
                    )}
                  />

                  {/* Cost Bar: Black (#1A1A1A) for May, #F0F0F0 for non-highlighted */}
                  <div
                    style={{ height: `${costHeight}%` }}
                    className={clsx(
                      "w-3 sm:w-3.5 rounded-t-md transition-all duration-300",
                      item.highlighted
                        ? "bg-[#1A1A1A] shadow-sm"
                        : "bg-[#F0F0F0] group-hover:bg-[#D1D5DB]"
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* X-Axis Month Labels */}
        <div className="absolute bottom-0 left-0 right-0 pl-12 pr-2 flex justify-between">
          {profitSummarySeries.map((item) => (
            <div key={item.month} className="flex-1 text-center">
              <span
                className={clsx(
                  "text-[11px] font-bold transition-colors",
                  item.highlighted
                    ? "text-[#333333] font-black"
                    : "text-[#757575] group-hover:text-[#333333]"
                )}
              >
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
