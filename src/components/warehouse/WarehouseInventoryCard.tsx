"use client";

import { MoreHorizontal } from "lucide-react";

export function WarehouseInventoryCard() {
  const inventoryCategories = [
    {
      name: "Electronics",
      percentage: "25%",
      count: "2,500",
      fillHeight: "33px",
      bgStyle: { backgroundColor: "#856DF3" },
    },
    {
      name: "Apparel",
      percentage: "20%",
      count: "2,000",
      fillHeight: "26.4px",
      bgStyle: {
        background:
          "repeating-linear-gradient(-45deg, #856DF3, #856DF3 4px, rgba(255, 255, 255, 0.35) 4px, rgba(255, 255, 255, 0.35) 7px)",
      },
    },
    {
      name: "Home & Kitchen",
      percentage: "18%",
      count: "1,800",
      fillHeight: "23.8px",
      bgStyle: { backgroundColor: "#262626" },
    },
    {
      name: "Beauty & Health",
      percentage: "15%",
      count: "1,500",
      fillHeight: "19.8px",
      bgStyle: {
        background:
          "repeating-linear-gradient(-45deg, #262626, #262626 4px, rgba(255, 255, 255, 0.35) 4px, rgba(255, 255, 255, 0.35) 7px)",
      },
    },
    {
      name: "Automotive Parts",
      percentage: "12%",
      count: "1,200",
      fillHeight: "15.8px",
      bgStyle: { backgroundColor: "#737373" },
    },
    {
      name: "Sports Equipment",
      percentage: "10%",
      count: "1,000",
      fillHeight: "13.2px",
      bgStyle: {
        background:
          "repeating-linear-gradient(-45deg, #525252, #525252 4px, rgba(255, 255, 255, 0.35) 4px, rgba(255, 255, 255, 0.35) 7px)",
      },
    },
  ];

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full h-full min-h-[300px]">
      {/* Top Title & Main Package Count */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xs font-bold text-[#757575]">
            Warehouse Inventory
          </h3>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#333333] tracking-tight">
              10,000
            </span>
            <span className="text-xs font-medium text-[#757575]">
              packages
            </span>
          </div>
        </div>

        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-lg text-[#757575] hover:bg-[#F0F0F0] hover:text-[#333333] transition"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Grid of Columns with Dotted Dividers */}
      <div className="grid grid-cols-6 items-end h-[132px] mt-4 pt-2">
        {inventoryCategories.map((cat, idx) => (
          <div
            key={cat.name}
            className={`flex flex-col items-center h-full justify-end px-1 sm:px-2 ${
              idx < 5 ? "border-r border-dashed border-[#E0E0E0]" : ""
            }`}
          >
            {/* Background Column Track (Figma: 74.33px wide x 132px high, rounded 4px) */}
            <div className="relative w-full max-w-[74.33px] h-[132px] bg-gradient-to-b from-[#F9FAFB] to-[#ECEEF2] rounded-[4px] flex items-end overflow-hidden border border-[#E0E0E0]/40">
              {/* Fill Portion at Bottom with Exact Figma Rounded Corners */}
              <div
                className="w-full rounded-t-[4px] rounded-b-[2px] transition-all duration-500"
                style={{
                  height: cat.fillHeight,
                  ...cat.bgStyle,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Category Labels & Subtexts Below Bars */}
      <div className="grid grid-cols-6 text-center mt-3 pt-2 border-t border-[#E0E0E0]/40">
        {inventoryCategories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center px-0.5">
            <span className="text-[10px] font-medium text-[#757575] line-clamp-1">
              {cat.name}
            </span>
            <span className="text-[10px] font-bold text-[#333333] mt-0.5 whitespace-nowrap">
              {cat.percentage}{" "}
              <span className="font-normal text-[#757575]">· {cat.count}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
