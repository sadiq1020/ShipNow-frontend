"use client";

import { shipmentsData } from "@/data/shipments";
import { Search, SlidersHorizontal, MoreHorizontal, ArrowRight } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

export function RecentShipmentsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredShipments = shipmentsData.filter((item) => {
    const matchesSearch =
      item.trackingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.carrier.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Transit":
        return "bg-[#F0F0F0] text-[#333333] border border-[#E0E0E0]";
      case "Out for Delivery":
        return "bg-[#E3DDFF] text-[#856DF3] border border-[#856DF3]/30 font-bold";
      case "Delivered":
        return "bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold";
      case "Processing":
        return "bg-sky-50 text-sky-600 border border-sky-200 font-bold";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#FEFEFE] p-4 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Top Header & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="text-sm font-extrabold text-[#333333]">
            Recent Shipments
          </h3>
          <p className="text-[11px] font-medium text-[#757575] mt-0.5">
            Monitor real-time status and routing for active logistics
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#757575]" />
            <input
              type="text"
              placeholder="Search shipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-8 w-full rounded-lg bg-[#F8F9FB] border border-[#E0E0E0] pl-8 pr-3 text-xs font-semibold text-[#333333] placeholder-[#757575] outline-none transition focus:border-[#856DF3]"
            />
          </div>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F8F9FB] border border-[#E0E0E0] text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition"
            title="Filter options"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F8F9FB] border border-[#E0E0E0] text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition"
            title="More"
          >
            <MoreHorizontal className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Table Container for Mobile Viewports */}
      <div className="w-full overflow-x-auto rounded-lg border border-[#E0E0E0]/60 scrollbar-thin scrollbar-thumb-gray-300">
        <table className="w-full min-w-[706px] text-left text-xs">
          {/* Table Header */}
          <thead className="bg-[#E3DDFF]/30 text-[11px] font-extrabold uppercase tracking-wider text-[#333333] border-b border-[#E0E0E0]">
            <tr>
              <th className="py-3 px-4">Shipping ID</th>
              <th className="py-3 px-4">Company</th>
              <th className="py-3 px-4">Carrier</th>
              <th className="py-3 px-4">Route</th>
              <th className="py-3 px-4">Shipping Date</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>

          {/* Table Rows */}
          <tbody className="divide-y divide-[#E0E0E0]/60 font-semibold text-[#333333]">
            {filteredShipments.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-[#F8F9FB] transition-colors cursor-pointer"
              >
                <td className="py-3.5 px-4 font-black text-[#856DF3]">
                  {row.trackingId}
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-[#333333]">
                      {row.company}
                    </span>
                    <span className="text-[10px] font-normal text-[#757575]">
                      {row.category}
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-bold text-[#333333]">
                  {row.carrier}
                </td>
                <td className="py-3.5 px-4 text-[#757575]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="truncate">{row.route.from}</span>
                    <ArrowRight className="h-3 w-3 text-[#856DF3] shrink-0" />
                    <span className="truncate">{row.route.to}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-medium text-[#757575]">
                  {row.shippingDate}
                </td>
                <td className="py-3.5 px-4 text-center">
                  <span
                    className={clsx(
                      "inline-block rounded-full px-2.5 py-1 text-[10px] shadow-2xs",
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
