"use client";

import { useState } from "react";
import { Package, MoreHorizontal } from "lucide-react";
import { clsx } from "clsx";

export function PackageStatusCard() {
  const [activeTab, setActiveTab] = useState("All");

  const packages = [
    {
      id: "PKG-HK77420",
      date: "March 20, 2035 – 05:30 PM",
      status: "Sent",
      badgeStyle: "bg-[#E3DDFF] text-[#856DF3]",
    },
    {
      id: "PKG-A50812",
      date: "March 21, 2035 – 01:45 PM",
      status: "Received",
      badgeStyle: "bg-emerald-100 text-emerald-700",
    },
    {
      id: "PKG-E10293",
      date: "March 22, 2035 – 09:00 AM",
      status: "Expected",
      badgeStyle: "bg-[#F5F5F5] text-[#757575]",
    },
  ];

  const filteredPackages = packages.filter((pkg) => {
    if (activeTab === "All") return true;
    return pkg.status === activeTab;
  });

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full h-full min-h-[300px]">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#333333]">Package Status</h3>
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-lg text-[#757575] hover:bg-[#F0F0F0] hover:text-[#333333] transition"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Segmented Filter Tabs */}
      <div className="flex items-center gap-1 bg-[#F4F4F5] p-1 rounded-xl my-3">
        {["All", "Expected", "Received", "Sent"].map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "flex-1 py-1.5 rounded-lg text-[11px] font-bold transition-all text-center",
                isActive
                  ? "bg-[#333333] text-white shadow-xs"
                  : "text-[#757575] hover:text-[#333333]"
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Package List Items */}
      <div className="flex flex-col gap-3 my-auto">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F9FB] border border-[#E0E0E0]/50"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E3DDFF]/60 text-[#856DF3] shrink-0">
                <Package className="h-4 w-4 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#333333]">
                  {pkg.id}
                </span>
                <span className="text-[10px] text-[#757575]">{pkg.date}</span>
              </div>
            </div>

            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${pkg.badgeStyle}`}
            >
              {pkg.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
