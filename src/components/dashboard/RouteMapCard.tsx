"use client";

import { Search, Plus, Minus, Navigation, Truck, MapPin } from "lucide-react";
import { useState } from "react";

export function RouteMapCard() {
  const [shippingId, setShippingId] = useState("");

  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#FEFEFE] border border-[#E0E0E0]/80 shadow-2xs w-full min-h-[300px] h-full">
      {/* Map Header Controls */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-2">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#757575]" />
          <input
            type="text"
            placeholder="Search by Shipping ID..."
            value={shippingId}
            onChange={(e) => setShippingId(e.target.value)}
            className="h-8 w-full rounded-lg bg-white/90 backdrop-blur-md border border-[#E0E0E0] pl-8 pr-3 text-xs font-semibold text-[#333333] placeholder-[#757575] outline-none shadow-xs transition focus:border-[#856DF3]"
          />
        </div>

        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md rounded-lg border border-[#E0E0E0] p-0.5 shadow-xs">
          <button className="flex h-7 w-7 items-center justify-center rounded-md text-[#333333] hover:bg-[#F0F0F0]">
            <Plus className="h-3.5 w-3.5" />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-md text-[#333333] hover:bg-[#F0F0F0]">
            <Minus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Stylized Vector Map Graphics */}
      <div className="relative h-48 w-full bg-[#EAEBED]/60 overflow-hidden flex items-center justify-center">
        {/* Map Background Grids */}
        <div className="absolute inset-0 bg-[radial-gradient(#856DF3_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>

        {/* Route Curved Path SVG */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 600 200">
          <path
            d="M 60 140 Q 250 20, 540 80"
            fill="none"
            stroke="#856DF3"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="drop-shadow-md"
          />
          <path
            d="M 60 140 Q 250 20, 540 80"
            fill="none"
            stroke="#E3DDFF"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>

        {/* Origin Marker */}
        <div className="absolute left-[8%] bottom-[25%] flex flex-col items-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#333333] text-white shadow-md">
            <MapPin className="h-4 w-4" />
          </div>
        </div>

        {/* Animated Mid-Route Marker */}
        <div className="absolute left-[45%] top-[25%] flex items-center justify-center animate-pulse">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#856DF3] text-white shadow-lg shadow-[#856DF3]/40">
            <Navigation className="h-4 w-4 rotate-45" />
          </div>
        </div>

        {/* Destination Marker */}
        <div className="absolute right-[8%] top-[35%] flex flex-col items-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#856DF3] text-white shadow-md">
            <Truck className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Shipment Details Bottom Card Overlay */}
      <div className="p-4 bg-[#FEFEFE] border-t border-[#E0E0E0]/80">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E0E0E0]/60 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-[#333333]">#SH8743921</span>
              <span className="rounded-md bg-[#856DF3]/15 px-2 py-0.5 text-[10px] font-extrabold text-[#856DF3]">
                In Transit
              </span>
              <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                On Schedule
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-medium text-[#757575] block">Courier</span>
            <span className="text-xs font-bold text-[#333333]">
              Daniel Cooper <span className="font-normal text-[#757575]">(SkyLogix Express)</span>
            </span>
          </div>
        </div>

        {/* Timeline Progress */}
        <div className="mt-3 grid grid-cols-2 gap-4">
          <div>
            <span className="text-[11px] font-extrabold text-[#333333] block">
              San Francisco, CA, USA
            </span>
            <span className="text-[10px] font-medium text-[#757575]">
              Mar 19, 2035 - 10:30 AM
            </span>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-extrabold text-[#333333] block">
              New York, NY, USA
            </span>
            <span className="text-[10px] font-medium text-[#757575]">
              Mar 23, 2035 - 03:00 PM (estimated)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
