"use client";

import { shipmentStatsSeries } from "@/data/dashboard";
import { ChevronDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

export function ShipmentStatisticCard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last Year");
  const maxCount = 4800;

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-extrabold text-[#333333]">
            Shipment Statistic
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[28px] md:text-[24px] lg:text-[28px] leading-tight font-bold text-[#333333]">
              4,352
            </span>
            <span className="flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-600">
              <TrendingUp className="mr-1 h-3.5 w-3.5 stroke-[2.5]" /> +8.7%
            </span>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 rounded-xl bg-[#F8F9FB] border border-[#E0E0E0] px-3 py-1.5 text-xs font-semibold text-[#333333] hover:bg-[#F0F0F0] transition"
        >
          <span>{selectedPeriod}</span>
          <ChevronDown className="h-3.5 w-3.5 text-[#757575]" />
        </button>
      </div>

      {/* Step / Column Gradient Block Chart Area */}
      <div className="relative mt-6 h-48 w-full">
        {/* Background Grid Lines & Y-Axis Labels */}
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] font-semibold text-[#757575]/60 pointer-events-none pb-7">
          <div className="flex items-center gap-2">
            <span className="w-7 text-right shrink-0">4.8K</span>
            <div className="w-full border-b border-dashed border-[#E0E0E0]/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 text-right shrink-0">3.6K</span>
            <div className="w-full border-b border-dashed border-[#E0E0E0]/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 text-right shrink-0">2.4K</span>
            <div className="w-full border-b border-dashed border-[#E0E0E0]/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 text-right shrink-0">1.2K</span>
            <div className="w-full border-b border-dashed border-[#E0E0E0]/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 text-right shrink-0">0K</span>
            <div className="w-full border-b border-dashed border-[#E0E0E0]/80" />
          </div>
        </div>

        {/* Step Columns Container */}
        <div className="absolute inset-0 pl-10 pr-2 pb-7 flex items-end justify-between gap-1.5">
          {shipmentStatsSeries.map((item) => {
            const heightPercent = (item.count / maxCount) * 100;

            return (
              <div
                key={item.month}
                className="group relative flex-1 flex flex-col items-center justify-end h-full cursor-pointer"
              >
                {/* May Highlight Floating Tooltip Card */}
                {item.highlighted && (
                  <div className="absolute -top-12 z-20 flex flex-col items-center">
                    <div className="rounded-xl bg-[#E3DDFF] px-3.5 py-1.5 text-center shadow-md border border-[#E3DDFF]/80">
                      <span className="block text-[11px] font-semibold text-[#757575]">
                        May 2030
                      </span>
                      <span className="block text-base font-black text-[#333333] leading-tight mt-0.5">
                        3,124
                      </span>
                    </div>
                  </div>
                )}

                {/* Hover Tooltip for non-highlighted items */}
                {!item.highlighted && (
                  <div className="absolute -top-8 z-20 hidden group-hover:block rounded-lg bg-[#333333] px-2 py-1 text-[10px] font-bold text-white shadow-md">
                    {item.count.toLocaleString()}
                  </div>
                )}

                {/* Column Block */}
                <div
                  style={{ height: `${heightPercent}%` }}
                  className="relative w-full flex flex-col justify-start transition-all duration-300"
                >
                  {/* Top Solid Horizontal Line */}
                  <div
                    className={clsx(
                      "h-[3.5px] w-full rounded-full transition-colors",
                      item.highlighted ? "bg-[#333333]" : "bg-[#333333]"
                    )}
                  />

                  {/* Dot on top of May column */}
                  {item.highlighted && (
                    <div className="absolute left-1/2 -top-[5px] -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[#1A1A1A] border-2 border-white shadow-xs z-10" />
                  )}

                  {/* Gradient Fill Box */}
                  <div
                    className={clsx(
                      "flex-1 w-full transition-opacity duration-300",
                      item.highlighted
                        ? "bg-gradient-to-b from-[#856DF3]/90 via-[#856DF3]/40 to-[#856DF3]/05"
                        : "bg-gradient-to-b from-[#333333]/15 via-[#333333]/05 to-transparent group-hover:from-[#856DF3]/30"
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* X-Axis Month Labels */}
        <div className="absolute bottom-0 left-0 right-0 pl-10 pr-2 flex justify-between">
          {shipmentStatsSeries.map((item) => (
            <div key={item.month} className="flex-1 text-center">
              <span
                className={clsx(
                  "text-[11px] font-bold transition-colors",
                  item.highlighted
                    ? "text-[#856DF3] font-black"
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
