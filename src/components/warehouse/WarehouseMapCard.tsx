"use client";

import { useState } from "react";
import { clsx } from "clsx";

export function WarehouseMapCard() {
  const [activeFloor, setActiveFloor] = useState("Floor 1");

  const topSections = [
    {
      title: "Electronics",
      available: "20",
      total: "100",
      shelves: [
        { code: "A1", status: "available" },
        { code: "A2", status: "full" },
        { code: "A3", status: "available" },
      ],
    },
    {
      title: "Home & Kitchen",
      available: "10",
      total: "100",
      shelves: [
        { code: "C1", status: "full" },
        { code: "C2", status: "full" },
        { code: "C3", status: "full" },
      ],
    },
    {
      title: "Automotive Parts",
      available: "50",
      total: "100",
      shelves: [
        { code: "D1", status: "available" },
        { code: "D2", status: "available" },
        { code: "D3", status: "available" },
      ],
    },
    {
      title: "Sports Equipment",
      available: "45",
      total: "100",
      shelves: [
        { code: "F1", status: "available" },
        { code: "F2", status: "full" },
        { code: "F3", status: "full" },
      ],
    },
  ];

  const apparelShelves = [
    { code: "B1", status: "available" },
    { code: "B2", status: "full" },
    { code: "B3", status: "full" },
    { code: "B4", status: "available" },
    { code: "B5", status: "available" },
    { code: "B6", status: "full" },
    { code: "B7", status: "full" },
    { code: "B8", status: "available" },
    { code: "B9", status: "full" },
    { code: "B10", status: "available" },
  ];

  const beautyShelves = [
    { code: "E1", status: "available" },
    { code: "E2", status: "full" },
    { code: "E3", status: "available" },
    { code: "E4", status: "available" },
  ];

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full overflow-hidden">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#333333]">Warehouse Map</h3>

        {/* Floor Selection Tabs */}
        <div className="flex items-center gap-1 bg-[#F4F4F5] p-1 rounded-xl">
          {["Floor 1", "Floor 2", "Floor 3"].map((floor) => {
            const isActive = activeFloor === floor;
            return (
              <button
                key={floor}
                type="button"
                onClick={() => setActiveFloor(floor)}
                className={clsx(
                  "px-3 py-1 rounded-lg text-[11px] font-bold transition-all",
                  isActive
                    ? "bg-[#333333] text-white shadow-xs"
                    : "text-[#757575] hover:text-[#333333]"
                )}
              >
                {floor}
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Content Container */}
      <div className="flex flex-col gap-3.5 mt-1 w-full">
        {/* Top 4 Categories: 2 cols on Mobile, 4 cols on Tablet & Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {topSections.map((sec) => (
            <div
              key={sec.title}
              className="flex flex-col justify-between rounded-xl bg-[#F8F9FB] p-3 border border-[#E0E0E0]/50 gap-2.5 overflow-hidden"
            >
              <span className="text-xs font-bold text-[#333333] truncate">
                {sec.title}
              </span>

              {/* Shelf Boxes Row */}
              <div className="flex items-center justify-between w-full gap-1">
                {sec.shelves.map((shelf) => (
                  <div
                    key={shelf.code}
                    className={clsx(
                      "flex h-8 w-8 sm:h-8.5 sm:w-8.5 xl:h-9 xl:w-9 items-center justify-center rounded-lg text-[11px] sm:text-xs font-bold transition-all border shrink-0",
                      shelf.status === "available"
                        ? "bg-[#E3DDFF]/80 text-[#856DF3] border-[#856DF3]/30"
                        : "bg-[#E0E0E0]/80 text-[#757575] border-[#E0E0E0]"
                    )}
                  >
                    {shelf.code}
                  </div>
                ))}
              </div>

              <span className="text-[10px] text-[#757575] font-medium truncate">
                Available Space{" "}
                <span className="font-bold text-[#333333]">
                  {sec.available}
                </span>
                /{sec.total}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom 2 Categories: Apparel & Beauty & Health */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Apparel Card (8 cols on md+, 100% on mobile) */}
          <div className="md:col-span-8 flex flex-col justify-between rounded-xl bg-[#F8F9FB] p-3 border border-[#E0E0E0]/50 gap-2.5 overflow-hidden">
            <span className="text-xs font-bold text-[#333333]">Apparel</span>

            {/* Shelf Boxes: 2 rows of 5 on Mobile, 1 row of 10 on Tablet/Desktop */}
            <div className="grid grid-cols-5 sm:flex sm:items-center sm:justify-between w-full gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none py-0.5">
              {apparelShelves.map((shelf) => (
                <div
                  key={shelf.code}
                  className={clsx(
                    "flex h-7.5 w-7.5 sm:h-8 sm:w-8 xl:h-9 xl:w-9 items-center justify-center rounded-lg text-[10px] sm:text-[11px] xl:text-xs font-bold transition-all border shrink-0 mx-auto sm:mx-0",
                    shelf.status === "available"
                      ? "bg-[#E3DDFF]/80 text-[#856DF3] border-[#856DF3]/30"
                      : "bg-[#E0E0E0]/80 text-[#757575] border-[#E0E0E0]"
                  )}
                >
                  {shelf.code}
                </div>
              ))}
            </div>

            <span className="text-[10px] text-[#757575] font-medium truncate">
              Available Space <span className="font-bold text-[#333333]">20</span>/100
            </span>
          </div>

          {/* Beauty & Health Card (4 cols on md+, 100% on mobile) */}
          <div className="md:col-span-4 flex flex-col justify-between rounded-xl bg-[#F8F9FB] p-3 border border-[#E0E0E0]/50 gap-2.5 overflow-hidden">
            <span className="text-xs font-bold text-[#333333]">Beauty & Health</span>

            {/* Shelf Boxes Row */}
            <div className="flex items-center justify-between w-full gap-1">
              {beautyShelves.map((shelf) => (
                <div
                  key={shelf.code}
                  className={clsx(
                    "flex h-8 w-8 sm:h-8.5 sm:w-8.5 xl:h-9 xl:w-9 items-center justify-center rounded-lg text-[11px] sm:text-xs font-bold transition-all border shrink-0",
                    shelf.status === "available"
                      ? "bg-[#E3DDFF]/80 text-[#856DF3] border-[#856DF3]/30"
                      : "bg-[#E0E0E0]/80 text-[#757575] border-[#E0E0E0]"
                  )}
                >
                  {shelf.code}
                </div>
              ))}
            </div>

            <span className="text-[10px] text-[#757575] font-medium truncate">
              Available Space <span className="font-bold text-[#333333]">30</span>/100
            </span>
          </div>
        </div>
      </div>

      {/* Legend Footer */}
      <div className="flex items-center gap-4 text-[11px] text-[#757575] pt-2 border-t border-[#E0E0E0]/50">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-xs bg-[#E3DDFF] border border-[#856DF3]/40" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-xs bg-[#E0E0E0]" />
          <span>Full</span>
        </div>
      </div>
    </div>
  );
}
