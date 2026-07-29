"use client";

import { profitSummarySeries } from "@/data/dashboard";
import { ChevronDown, TrendingUp } from "lucide-react";
import { useState } from "react";

export function ProfitSummaryCard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 8 Months");
  const maxVal = 100000;

  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#FEFEFE] p-4 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Header & Controls */}
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-extrabold text-[#333333]">
            Profit Summary
          </h3>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[24px] leading-tight font-black text-[#333333]">
              $624,550
            </span>
            <span className="flex items-center rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600">
              <TrendingUp className="mr-0.5 h-3 w-3" /> +5.62%
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Legend */}
          <div className="hidden sm:flex items-center gap-3 text-[11px] font-semibold text-[#757575]">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#856DF3]" />
              Revenue
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E0E0E0]" />
              Cost
            </span>
          </div>

          <button
            type="button"
            className="flex items-center gap-1 rounded-lg bg-[#F8F9FB] border border-[#E0E0E0] px-2.5 py-1.5 text-xs font-semibold text-[#333333] hover:bg-[#F0F0F0] transition"
          >
            <span>{selectedPeriod}</span>
            <ChevronDown className="h-3.5 w-3.5 text-[#757575]" />
          </button>
        </div>
      </div>

      {/* SVG Dual Bar Chart Area */}
      <div className="relative mt-4 h-44 w-full">
        {/* Background Lines */}
        <div className="absolute inset-0 flex flex-col justify-between text-[9px] font-semibold text-[#757575]/60 pointer-events-none">
          <div className="border-b border-dashed border-[#E0E0E0]">$100K</div>
          <div className="border-b border-dashed border-[#E0E0E0]">$75K</div>
          <div className="border-b border-dashed border-[#E0E0E0]">$50K</div>
          <div className="border-b border-dashed border-[#E0E0E0]">$25K</div>
          <div className="border-b border-[#E0E0E0]">$0</div>
        </div>

        {/* Dual Bars Container */}
        <div className="relative flex h-full items-end justify-between px-6 pt-4 pb-5">
          {profitSummarySeries.map((item) => {
            const revHeight = (item.revenue / maxVal) * 100;
            const costHeight = (item.cost / maxVal) * 100;

            return (
              <div
                key={item.month}
                className="group relative flex flex-col items-center flex-1 justify-end h-full cursor-pointer"
              >
                {/* May Highlight Tooltip — light gray #F0F0F0, vertical layout */}
                {item.highlighted && (
                  <div className="absolute -top-14 z-20 rounded-lg bg-[#F0F0F0] px-2 py-2 shadow-md border border-[#E0E0E0]/60 whitespace-nowrap">
                    <div className="flex flex-col gap-1 text-[10px] font-bold text-[#333333]">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#856DF3] shrink-0" />
                        Revenue
                        <span className="font-black ml-auto">
                          ${item.revenue.toLocaleString()}
                        </span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#E0E0E0] shrink-0" />
                        Cost
                        <span className="font-black ml-auto">
                          ${item.cost.toLocaleString()}
                        </span>
                      </span>
                    </div>
                    {/* Caret arrow */}
                    <div className="absolute left-1/2 -bottom-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#F0F0F0] border-r border-b border-[#E0E0E0]/60"></div>
                  </div>
                )}

                {/* Bars Pair */}
                <div className="flex items-end gap-1 h-full">
                  {/* Revenue Bar */}
                  <div
                    style={{ height: `${revHeight}%` }}
                    className={`w-2.5 rounded-t-sm transition-all duration-300 ${
                      item.highlighted
                        ? "bg-[#856DF3] shadow-md shadow-[#856DF3]/30"
                        : "bg-[#856DF3]/70 group-hover:bg-[#856DF3]"
                    }`}
                  />
                  {/* Cost Bar */}
                  <div
                    style={{ height: `${costHeight}%` }}
                    className={`w-2.5 rounded-t-sm transition-all duration-300 ${
                      item.highlighted
                        ? "bg-[#333333] shadow-xs"
                        : "bg-[#E0E0E0] group-hover:bg-[#757575]"
                    }`}
                  />
                </div>

                {/* Month Label */}
                <span className="mt-2 text-[10px] font-bold text-[#757575] group-hover:text-[#333333]">
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
