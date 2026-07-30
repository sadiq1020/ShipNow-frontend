"use client";

import { Package, Clock, Truck, CheckCircle2, ChevronUp, ChevronDown, MoreHorizontal } from "lucide-react";

export function ShipmentsSummaryCards() {
  const cards = [
    {
      id: "total",
      title: "Total Shipments",
      value: "1,284",
      change: "4.6%",
      period: "this week",
      isPositive: true,
      icon: Package,
    },
    {
      id: "pending",
      title: "Pending",
      value: "285",
      change: "8.7%",
      period: "this week",
      isPositive: true,
      icon: Clock,
    },
    {
      id: "delivery",
      title: "Delivery",
      value: "594",
      change: "4.2%",
      period: "from last week",
      isPositive: false,
      icon: Truck,
    },
    {
      id: "completed",
      title: "Completed",
      value: "405",
      change: "3.9%",
      period: "this week",
      isPositive: true,
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
      {cards.map((card) => {
        const IconComp = card.icon;

        return (
          <div
            key={card.id}
            className="flex flex-col justify-between rounded-2xl bg-[#FEFEFE] p-4 sm:p-5 border border-[#E0E0E0]/80 shadow-2xs transition-all hover:shadow-xs"
          >
            {/* Top Row: Icon & Title + Action Menu */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E3DDFF]/60 text-[#856DF3]">
                  <IconComp className="h-4 w-4 stroke-[2.2]" />
                </div>
                <span className="text-xs font-semibold text-[#757575]">
                  {card.title}
                </span>
              </div>

              <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-lg text-[#757575] hover:bg-[#F0F0F0] hover:text-[#333333] transition"
              >
                <MoreHorizontal className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Bottom Row: Large Figure & Figma Trend Indicator */}
            <div className="flex items-baseline justify-between mt-5">
              {/* Figure */}
              <span className="text-2xl sm:text-3xl font-bold text-[#333333] tracking-tight">
                {card.value}
              </span>

              {/* Right Trend Structure (Figma Exact Match) */}
              <div className="flex items-center gap-2">
                {/* Round Chevron Icon */}
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full shrink-0 ${
                    card.isPositive
                      ? "bg-emerald-100/80 text-emerald-600"
                      : "bg-[#E3DDFF] text-[#856DF3]"
                  }`}
                >
                  {card.isPositive ? (
                    <ChevronUp className="h-3.5 w-3.5 stroke-[2.5]" />
                  ) : (
                    <ChevronDown className="h-3.5 w-3.5 stroke-[2.5]" />
                  )}
                </div>

                {/* Text & Percentage Pill */}
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1 text-[10px]">
                    <span className="font-normal text-[#757575]">
                      {card.isPositive ? "Up by" : "Down"}
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded-md font-bold text-[10px] ${
                        card.isPositive
                          ? "bg-emerald-100/70 text-emerald-700"
                          : "bg-[#E3DDFF] text-[#856DF3]"
                      }`}
                    >
                      {card.change}
                    </span>
                  </div>
                  <span className="text-[10px] font-normal text-[#757575] block mt-0.5">
                    {card.period}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
