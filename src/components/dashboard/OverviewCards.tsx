"use client";

import { overviewCardsData } from "@/data/dashboard";
import { Truck, Clock, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { clsx } from "clsx";

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Clock,
  DollarSign,
};

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {overviewCardsData.map((card) => {
        const IconComponent = iconMap[card.icon] || Truck;
        const isPositive = card.changeType === "positive";

        return (
          <div
            key={card.id}
            className="flex items-center justify-between rounded-xl bg-[#FEFEFE] p-4 border border-[#E0E0E0]/80 shadow-2xs transition-all hover:shadow-xs"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[12px] font-semibold text-[#757575]">
                {card.title}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[28px] md:text-[24px] lg:text-[28px] leading-tight font-bold text-[#333333] tracking-tight">
                  {card.value}
                </span>
                {card.unit && (
                  <span className="text-xs font-medium text-[#757575]">
                    {card.unit}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 mt-1 text-[11px] font-bold">
                <span
                  className={clsx(
                    "flex items-center px-1.5 py-0.5 rounded-md text-[10px]",
                    isPositive
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-rose-50 text-rose-500"
                  )}
                >
                  {isPositive ? (
                    <ArrowUpRight className="h-3 w-3 mr-0.5 stroke-[2.5]" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 mr-0.5 stroke-[2.5]" />
                  )}
                  {card.change}
                </span>
                <span className="text-[#757575] font-normal">{card.period}</span>
              </div>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#856DF3] text-white shadow-md shadow-[#856DF3]/25 shrink-0">
              <IconComponent className="h-6 w-6 stroke-[2.2]" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
