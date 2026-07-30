"use client";

import { useState } from "react";
import { Truck, Train, Anchor, Plane, ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

export function WarehouseHeader() {
  const [activeFreight, setActiveFreight] = useState("Road Freight");

  const freightModes = [
    { label: "Road Freight", icon: Truck },
    { label: "Rail Freight", icon: Train },
    { label: "Ocean Freight", icon: Anchor },
    { label: "Air Freight", icon: Plane },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
      <div>
        <h1 className="text-2xl font-bold text-[#333333] tracking-tight">
          Warehouse
        </h1>
        <div className="flex items-center gap-1.5 mt-0.5 text-xs font-semibold text-[#757575]">
          <span className="text-[#2A1298]">Dashboard</span>
          <span>/</span>
          <span className="text-[#757575]">Warehouse</span>
        </div>
      </div>

      {/* Freight Mode Selector Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-1 px-1 bg-[#F4F4F5] rounded-2xl border border-[#E0E0E0]/60 scrollbar-none">
        {freightModes.map((mode) => {
          const Icon = mode.icon;
          const isActive = activeFreight === mode.label;
          return (
            <button
              key={mode.label}
              type="button"
              onClick={() => setActiveFreight(mode.label)}
              className={clsx(
                "flex items-center gap-1.5 h-9 px-3.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0",
                isActive
                  ? "bg-[#333333] text-white shadow-xs"
                  : "text-[#757575] hover:text-[#333333] hover:bg-white/60"
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{mode.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SmallKpiCardsStack() {
  const overviewItems = [
    {
      id: "sku",
      title: "Total SKU",
      value: "285",
      change: "+2.58%",
    },
    {
      id: "hand",
      title: "Quantity on Hand",
      value: "12,450",
      unit: "units",
      change: "+4.37%",
    },
    {
      id: "capacity",
      title: "Capacity Usage",
      value: "62.5%",
      unit: "Full",
      change: "+1.54%",
    },
  ];

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 xl:flex xl:flex-col gap-3.5 w-full h-full justify-between">
      {overviewItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between rounded-2xl bg-[#FEFEFE] p-3.5 border border-[#E0E0E0]/80 shadow-2xs flex-1"
        >
          <span className="text-[11px] font-semibold text-[#757575]">
            {item.title}
          </span>

          <div className="flex items-baseline justify-between mt-2.5">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-[#333333] tracking-tight">
                {item.value}
              </span>
              {item.unit && (
                <span className="text-[10px] font-medium text-[#757575]">
                  {item.unit}
                </span>
              )}
            </div>

            <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded-md text-[10px] font-bold">
              <ArrowUpRight className="h-3 w-3 stroke-[2.5]" />
              {item.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
