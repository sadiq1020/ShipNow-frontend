"use client";

import { shipmentsData } from "@/data/shipments";
import { Search, SlidersHorizontal, MoreHorizontal, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

export function RecentShipmentsTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredShipments = shipmentsData.filter((item) => {
    return (
      item.trackingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.carrier.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Transit":
        return "bg-[#E0E0E0] text-[#333333]";
      case "Out for Delivery":
        return "bg-[#E3DDFF] text-[#856DF3]";
      case "Delivered":
        return "bg-emerald-100 text-emerald-700";
      case "Processing":
        return "bg-sky-100 text-sky-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex flex-col justify-start rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full h-full">
      {/* Top Header & Search Bar */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <h3 className="text-[16px] font-semibold text-[#333333]">
          Recent Shipments
        </h3>

        <div className="flex items-center gap-2">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-56">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#757575]" />
            <input
              type="text"
              placeholder="Search shipment"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-full rounded-xl bg-[#F0F0F0] border border-transparent pl-9 pr-3 text-xs font-semibold text-[#333333] placeholder-[#757575] outline-none transition focus:bg-white focus:border-[#856DF3]"
            />
          </div>

          {/* Filter Option Button */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0F0F0] text-[#757575] hover:text-[#333333] transition"
            title="Filter options"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>

          {/* Action Menu Button */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0F0F0] text-[#757575] hover:text-[#333333] transition"
            title="More"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Table Container */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-xs border-collapse">
          {/* Soft Lavender Rounded Table Header */}
          <thead>
            <tr className="bg-[#E3DDFF]/80 text-[11px] font-bold text-[#333333]">
              <th className="py-3 px-3 rounded-l-xl">
                <div className="h-4 w-4 rounded bg-[#F0F0F0] border border-[#E0E0E0]" />
              </th>
              <th className="py-3 px-3">
                <div className="flex items-center gap-1">
                  Shipping ID <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3">
                <div className="flex items-center gap-1">
                  Company <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3">
                <div className="flex items-center gap-1">
                  Carriers <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3">
                <div className="flex items-center gap-1">
                  Route <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3">
                <div className="flex items-center gap-1">
                  Shipping Date <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3 text-center rounded-r-xl">
                <div className="flex items-center justify-center gap-1">
                  Status <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Rows */}
          <tbody className="divide-y divide-[#E0E0E0]/60 font-semibold text-[#333333]">
            {filteredShipments.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-[#F8F9FB] transition-colors cursor-pointer"
              >
                <td className="py-3.5 px-3">
                  <div className="h-4 w-4 rounded bg-[#F0F0F0] border border-[#E0E0E0]" />
                </td>
                <td className="py-3.5 px-3 font-semibold text-[#856DF3]">
                  {row.trackingId}
                </td>
                <td className="py-3.5 px-3">
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#333333]">
                      {row.company}
                    </span>
                    <span className="text-[11px] font-normal text-[#757575]">
                      {row.category}
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-3 font-medium text-[#333333]">
                  {row.carrier}
                </td>
                <td className="py-3.5 px-3 text-[#333333] font-medium">
                  {row.route.from} → {row.route.to}
                </td>
                <td className="py-3.5 px-3 font-medium text-[#757575]">
                  {row.shippingDate}
                </td>
                <td className="py-3.5 px-3 text-center">
                  <span
                    className={clsx(
                      "inline-block rounded-full px-3 py-1 text-xs font-semibold shadow-2xs",
                      getStatusBadge(row.status)
                    )}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
