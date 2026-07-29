"use client";

import { Minus, Navigation, Plus, Search, Truck } from "lucide-react";
import { useState } from "react";

export function RouteMapCard() {
  const [shippingId, setShippingId] = useState("");

  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#F4F4F5] p-3 sm:p-4 border border-[#E0E0E0]/80 shadow-2xs w-full h-full min-h-[360px]">
      {/* Top Controls: Search Input (Icon on Right) & Zoom Stack */}
      <div className="flex items-center justify-between gap-3 z-10">
        {/* Search Bar with Search Icon on Right */}
        <div className="relative flex-1 max-w-[240px] sm:max-w-xs">
          <input
            type="text"
            placeholder="Search by Shipping ID..."
            value={shippingId}
            onChange={(e) => setShippingId(e.target.value)}
            className="h-10 w-full rounded-2xl bg-white border border-[#E0E0E0]/50 pl-4 pr-10 text-xs font-semibold text-[#333333] placeholder-[#757575] shadow-xs outline-none focus:border-[#856DF3]"
          />
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#333333]" />
        </div>

        {/* Zoom Controls Vertical Stack */}
        <div className="flex flex-col items-center bg-white rounded-2xl border border-[#E0E0E0]/50 shadow-xs p-1">
          <button
            type="button"
            className="p-1.5 text-[#333333] hover:text-[#856DF3] transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
          <div className="w-4 h-[1px] bg-[#E0E0E0]" />
          <button
            type="button"
            className="p-1.5 text-[#333333] hover:text-[#856DF3] transition-colors"
          >
            <Minus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Map Graphics Canvas Area */}
      <div className="relative flex-1 w-full my-3 min-h-[160px] flex items-center justify-center">
        {/* SVG Route Line: Black left segment, Purple right segment */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
        >
          {/* Black Segment (Origin to Midpoint) */}
          <line
            x1="0"
            y1="160"
            x2="300"
            y2="110"
            stroke="#222226"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Vibrant Purple Segment (Midpoint to Destination) */}
          <line
            x1="300"
            y1="110"
            x2="600"
            y2="40"
            stroke="#856DF3"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Midpoint Purple Navigation Arrow Badge */}
        <div className="absolute left-[50%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#856DF3] text-white shadow-lg shadow-[#856DF3]/40 border-2 border-white ring-4 ring-[#856DF3]/20">
            <Navigation className="h-4 w-4 rotate-45 fill-white" />
          </div>
        </div>
      </div>

      {/* Floating Bottom Shipment Details Card */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-[#E0E0E0]/60 w-full z-10">
        {/* Row 1: ID, Status Pill & Courier Info */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[14px] sm:text-lg font-bold text-[#333333] block">
              #SH8743921
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="rounded-full bg-[#E3DDFF] px-3 py-0.5 text-xs font-semibold text-[#856DF3]">
                In Transit
              </span>
              <span className="text-xs font-semibold text-[#757575]">
                On Schedule
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs font-normal text-[#757575] block">
              Courier:
            </span>
            <span className="text-sm font-semibold text-[#333333] block mt-0.5">
              Daniel Cooper
            </span>
            <span className="text-xs font-normal text-[#757575] block">
              SkyLogix Express
            </span>
          </div>
        </div>

        {/* Row 2: Progress Track Bar */}
        <div className="my-4 flex items-center justify-between">
          {/* Left Node */}
          <div className="h-5 w-5 rounded-full border-2 border-[#856DF3] bg-[#E3DDFF] flex items-center justify-center shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#856DF3]" />
          </div>

          {/* Active Purple Progress Line */}
          <div className="h-1 bg-[#856DF3] flex-1" />

          {/* Middle Truck Badge */}
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#856DF3] text-white shadow-sm shrink-0 mx-1">
            <Truck className="h-3.5 w-3.5 fill-white" />
          </div>

          {/* Remaining Gray Progress Line */}
          <div className="h-1 bg-[#E0E0E0] flex-1" />

          {/* Right Inactive Node */}
          <div className="h-5 w-5 rounded-full border-2 border-[#E0E0E0] bg-white shrink-0" />
        </div>

        {/* Row 3: Origin & Destination Timestamps */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs sm:text-sm font-semibold text-[#333333] block">
              San Francisco, CA, USA
            </span>
            <span className="text-xs font-medium text-[#757575] block mt-0.5">
              Mar 19, 2035 – 10:30 AM
            </span>
          </div>

          <div className="text-right">
            <span className="text-xs sm:text-sm font-semibold text-[#333333] block">
              New York, NY, USA
            </span>
            <span className="text-xs font-medium text-[#757575] block mt-0.5">
              Mar 23, 2035 – 03:00 PM (estimated)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
