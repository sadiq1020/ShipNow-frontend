"use client";

import { productCategoriesData } from "@/data/dashboard";
import { MoreHorizontal } from "lucide-react";

export function ProductCategoriesCard() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#FEFEFE] p-4 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-[#333333]">
            Product Categories
          </h3>
          <button
            type="button"
            className="rounded-lg p-1 text-[#757575] hover:bg-[#F0F0F0] hover:text-[#333333] transition"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-baseline justify-between mt-1">
          <span className="text-xs font-semibold text-[#757575]">
            Total Products
          </span>
          <span className="text-lg font-black text-[#333333]">1,000</span>
        </div>

        {/* Integrated Multi-Color Swatch Progress Bar */}
        <div className="mt-3 flex h-3.5 w-full overflow-hidden rounded-md bg-[#F0F0F0]">
          {productCategoriesData.map((cat) => (
            <div
              key={cat.name}
              style={{
                width: `${cat.percentage}%`,
                backgroundColor: cat.color,
              }}
              className="h-full transition-all duration-300 hover:opacity-90 border-r border-white/20 last:border-r-0"
              title={`${cat.name}: ${cat.percentage}%`}
            />
          ))}
        </div>
      </div>

      {/* Category List */}
      <div className="mt-4 space-y-2.5">
        {productCategoriesData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-lg p-2 hover:bg-[#F8F9FB] transition-colors"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className="h-3 w-3 rounded-full shrink-0 shadow-xs"
                style={{ backgroundColor: item.color }}
              />
              <span className="truncate text-xs font-bold text-[#333333]">
                {item.name}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold text-[#757575]">
              <span>{item.productsCount} products</span>
              <span className="w-8 text-right font-bold text-[#333333]">
                {item.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
