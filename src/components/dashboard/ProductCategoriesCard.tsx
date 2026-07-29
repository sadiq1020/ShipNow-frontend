"use client";

import { productCategoriesData } from "@/data/dashboard";
import { MoreHorizontal } from "lucide-react";

export function ProductCategoriesCard() {
  const categorySwatches = [
    { name: "Electronics", color: "bg-[#856DF3]", widthPercent: 24 },
    { name: "Home & Kitchen", color: "bg-[#E3DDFF]", widthPercent: 20 },
    { name: "Apparel", color: "bg-[#333333]", widthPercent: 18 },
    { name: "Beauty & Health", color: "bg-[#757575]", widthPercent: 14 },
    { name: "Sports & Outdoors", color: "bg-[#E0E0E0]", widthPercent: 12 },
    { name: "Automotive", color: "bg-[#F0F0F0]", widthPercent: 12 },
  ];

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-semibold text-[#333333]">
            Product Categories
          </h3>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F8F9FB] border border-[#E0E0E0]/60 text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-baseline justify-between mt-2">
          <span className="text-[14px] font-medium text-[#757575]">
            Total Products
          </span>
          <span className="text-2xl font-bold text-[#333333]">1,000</span>
        </div>

        {/* Top Segmented Bar with Rounded Outer Corners matching Figma */}
        <div className="mt-4 flex h-14 w-full gap-[3px] items-center">
          {categorySwatches.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === categorySwatches.length - 1;
            const cornerRadius = isFirst
              ? "rounded-l-2xl rounded-r-none"
              : isLast
              ? "rounded-r-2xl rounded-l-none"
              : "rounded-none";

            return (
              <div
                key={item.name}
                style={{ width: `${item.widthPercent}%` }}
                className={`h-full ${cornerRadius} ${item.color} shadow-2xs transition-all duration-300 hover:opacity-90`}
                title={`${item.name}: ${item.widthPercent}%`}
              />
            );
          })}
        </div>
      </div>

      {/* Category List Rows with Figma Badge Pills */}
      <div className="mt-5 space-y-3">
        {productCategoriesData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-2"
          >
            {/* Dot & Category Name */}
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className="h-2.5 w-2.5 rounded-full shrink-0 shadow-2xs"
                style={{ backgroundColor: item.color }}
              />
              <span className="truncate text-xs sm:text-sm font-bold text-[#333333]">
                {item.name}
              </span>
            </div>

            {/* Figma Pill Badge Box: "240 products | 24%" */}
            <div className="flex items-center gap-2 rounded-lg bg-[#F0F0F0] px-3 py-1.5 border border-[#E0E0E0]/50 shrink-0">
              <span className="text-xs font-semibold text-[#757575]">
                {item.productsCount} products
              </span>
              <span className="h-3 w.5 bg-[#E0E0E0]" />
              <span className="text-xs font-bold text-[#333333]">
                {item.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
