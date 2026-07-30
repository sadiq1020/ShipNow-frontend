"use client";

import { SlidersHorizontal, ChevronDown, ArrowUpDown } from "lucide-react";

export function WarehouseStorageTable() {
  const rows = [
    {
      floor: "1",
      section: "A1 – A10",
      category: "Electronics",
      usedPercent: 80,
      availableNum: "20",
      totalNum: "100",
    },
    {
      floor: "2",
      section: "B1 – B10",
      category: "Apparel",
      usedPercent: 60,
      availableNum: "40",
      totalNum: "100",
    },
    {
      floor: "1",
      section: "C1 – C10",
      category: "Home & Kitchen",
      usedPercent: 90,
      availableNum: "10",
      totalNum: "100",
    },
    {
      floor: "3",
      section: "D1 – D10",
      category: "Automotive Parts",
      usedPercent: 50,
      availableNum: "50",
      totalNum: "100",
    },
    {
      floor: "2",
      section: "E1 – E10",
      category: "Beauty & Health",
      usedPercent: 70,
      availableNum: "30",
      totalNum: "100",
    },
  ];

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 className="text-sm font-bold text-[#333333]">
          Warehouse Storage
        </h3>

        {/* Filter & Sort Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 h-8 px-3 rounded-xl bg-[#F0F0F0]/60 text-xs font-semibold text-[#757575] hover:text-[#333333] transition"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Filter</span>
            <ChevronDown className="h-3 w-3" />
          </button>

          <div className="flex items-center gap-1.5 h-8 px-3 rounded-xl bg-[#F0F0F0]/60 text-xs text-[#757575]">
            <span>Sort by:</span>
            <span className="font-semibold text-[#333333]">Section</span>
            <ChevronDown className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto scrollbar-none mt-1">
        <table className="w-full min-w-[640px] text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#E0E0E0]/80 text-[10px] font-semibold text-[#757575] uppercase tracking-wider">
              <th className="py-2.5 px-3">
                <div className="flex items-center gap-1 cursor-pointer">
                  Floor <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-2.5 px-3">
                <div className="flex items-center gap-1 cursor-pointer">
                  Section <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-2.5 px-3">
                <div className="flex items-center gap-1 cursor-pointer">
                  Category <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-2.5 px-3">
                <div className="flex items-center gap-1 cursor-pointer">
                  Storage Used <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-2.5 px-3">
                <div className="flex items-center gap-1 cursor-pointer">
                  Percentage <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-2.5 px-3 text-right">
                <div className="flex items-center justify-end gap-1 cursor-pointer">
                  Available Space <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#E0E0E0]/60">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#F8F9FB] transition-colors">
                <td className="py-3 px-3 font-medium text-[#333333]">
                  {row.floor}
                </td>
                <td className="py-3 px-3 font-bold text-[#333333]">
                  {row.section}
                </td>
                <td className="py-3 px-3 font-normal text-[#757575]">
                  {row.category}
                </td>
                <td className="py-3 px-3 w-36">
                  <div className="h-3 w-[120px] rounded-[3px] bg-[#F0F0F0] overflow-hidden">
                    <div
                      className="h-full rounded-[3px] bg-[#856DF3]"
                      style={{ width: `${row.usedPercent}%` }}
                    />
                  </div>
                </td>
                <td className="py-3 px-3 font-bold text-[#333333]">
                  {row.usedPercent}%
                </td>
                <td className="py-3 px-3 text-right font-medium text-[#757575]">
                  <span className="font-bold text-[#333333]">
                    {row.availableNum}
                  </span>
                  /{row.totalNum}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
