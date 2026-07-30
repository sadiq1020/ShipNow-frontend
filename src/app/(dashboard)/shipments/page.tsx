"use client";

import { useState } from "react";
import { shipmentsGridData } from "@/data/shipmentsGrid";
import { ShipmentCard } from "@/components/shipments/ShipmentCard";
import { ShipmentsTableView } from "@/components/shipments/ShipmentsTableView";
import { ShipmentsSummaryCards } from "@/components/shipments/ShipmentsSummaryCards";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Plus,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

export default function ShipmentsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "table">("table");
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [timeFilter, setTimeFilter] = useState("This Month");
  const [itemsPerPage, setItemsPerPage] = useState("12");

  const tabs = ["All", "Completed", "Delivery", "Pending"];

  const filteredShipments = shipmentsGridData.filter((record) => {
    let matchesTab = activeTab === "All";
    if (activeTab === "Completed") {
      matchesTab = record.status === "Completed" || record.status === "Delivered";
    } else if (activeTab === "Delivery") {
      matchesTab =
        record.status === "Delivery" ||
        record.status === "In Transit" ||
        record.status === "Out for Delivery";
    } else if (activeTab === "Pending") {
      matchesTab = record.status === "Pending" || record.status === "Processing";
    }

    const matchesSearch =
      record.trackingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.carrier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.origin.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.destination.city.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto min-h-screen">
      {/* 1. Page Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#333333] tracking-tight">
            Shipments
          </h1>
          <div className="flex items-center gap-1.5 mt-1 text-xs font-semibold text-[#757575]">
            <Link
              href="/dashboard"
              className="text-[#856DF3] hover:underline transition-colors"
            >
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-[#757575]">Shipments</span>
          </div>
        </div>

        {/* Right CTA Button: "+ New Shipment" */}
        <Link
          href="/shipments/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#333333] px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#1A1A1A] transition-all shrink-0"
        >
          <Plus className="h-4 w-4" />
          <span>New Shipment</span>
        </Link>
      </div>

      {/* 2. Top 4 KPI Summary Cards */}
      <ShipmentsSummaryCards />

      {/* 3. Segmented Filter Tabs & View Toggle Row */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 w-full">
        {/* Horizontal Scrollable Tabs Container */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 px-1 rounded-2xl bg-[#F4F4F5] border border-[#E0E0E0]/60 scrollbar-none shrink-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "h-[34px] px-4 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0",
                  isActive
                    ? "bg-[#333333] text-white shadow-xs"
                    : "text-[#757575] hover:text-[#333333] hover:bg-white/60"
                )}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Right Search, Filter, Sort & View Mode Switcher */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Input Box */}
          <div className="relative flex-1 sm:w-56 min-w-[180px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#757575]" />
            <input
              type="text"
              placeholder="Search id, company, etc"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-10 w-full rounded-xl bg-[#F0F0F0]/60 border border-transparent pl-9 pr-3 text-xs font-semibold text-[#333333] placeholder-[#757575] outline-none transition focus:bg-white focus:border-[#856DF3]"
            />
          </div>

          {/* Filter Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F0F0]/60 text-[#757575] hover:text-[#333333] transition shrink-0"
            title="Filter options"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>

          {/* Time Filter Button */}
          <button
            type="button"
            className="flex h-10 items-center gap-2 rounded-xl bg-[#F0F0F0]/60 px-3.5 text-xs font-semibold text-[#333333] hover:bg-[#E0E0E0]/60 transition shrink-0"
          >
            <Calendar className="h-3.5 w-3.5 text-[#757575]" />
            <span>{timeFilter}</span>
            <ChevronDown className="h-3.5 w-3.5 text-[#757575]" />
          </button>

          {/* View Toggle Switch (Grid vs Table View) */}
          <div className="flex items-center gap-1 bg-[#F0F0F0]/60 p-1 rounded-xl shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={clsx(
                "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                viewMode === "table"
                  ? "bg-white text-[#856DF3] shadow-xs"
                  : "text-[#757575] hover:text-[#333333]"
              )}
              title="Table View"
            >
              <List className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={clsx(
                "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                viewMode === "grid"
                  ? "bg-white text-[#856DF3] shadow-xs"
                  : "text-[#757575] hover:text-[#333333]"
              )}
              title="Grid View"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Content Area (Table View or Grid View) */}
      {filteredShipments.length > 0 ? (
        viewMode === "table" ? (
          <ShipmentsTableView records={filteredShipments} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
            {filteredShipments.map((record) => (
              <ShipmentCard key={record.id} record={record} />
            ))}
          </div>
        )
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-12 text-center border border-[#E0E0E0]/80 shadow-2xs">
          <p className="text-sm font-bold text-[#333333]">
            No shipments found matching &quot;{searchTerm}&quot;
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveTab("All");
              setSearchTerm("");
            }}
            className="mt-3 rounded-xl bg-[#856DF3] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#6f57e0] transition"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* 5. Pagination Controls Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 pt-4 border-t border-[#E0E0E0]/60">
        {/* Items Per Page Selector */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#757575]">
          <span>Show</span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(e.target.value)}
            className="h-8 rounded-lg bg-white border border-[#E0E0E0]/80 px-2 text-xs font-bold text-[#333333] outline-none shadow-2xs cursor-pointer"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="48">48</option>
          </select>
          <span>of 1,240 results</span>
        </div>

        {/* Page Number Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-[#E0E0E0]/60 text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition"
            aria-label="Previous Page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#856DF3] font-bold text-white shadow-xs text-xs"
          >
            1
          </button>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-[#E0E0E0]/60 font-semibold text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition text-xs"
          >
            2
          </button>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-[#E0E0E0]/60 font-semibold text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition text-xs"
          >
            3
          </button>

          <span className="px-1 text-xs text-[#757575] font-bold">...</span>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-[#E0E0E0]/60 font-semibold text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition text-xs"
          >
            16
          </button>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-[#E0E0E0]/60 text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition"
            aria-label="Next Page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
