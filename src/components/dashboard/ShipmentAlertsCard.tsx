"use client";

import { shipmentAlertsData, shipmentAlertsSummary } from "@/data/dashboard";
import { ArrowUpRight, CloudRain, FileWarning, MapPin, MoreHorizontal } from "lucide-react";

export function ShipmentAlertsCard() {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full h-full">
      {/* Header & Subhead */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-semibold text-[#333333]">
            Shipment Alerts
          </h3>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F8F9FB] border border-[#E0E0E0]/60 text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        {/* Subhead: "12 Delays Detected" (12 font size 24px) */}
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-[24px] font-bold text-[#333333]">
            {shipmentAlertsSummary.totalDelays}
          </span>
          <span className="text-sm font-medium text-[#757575]">
            Delays Detected
          </span>
        </div>

        {/* 3 Summary Count Cards */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {shipmentAlertsSummary.counts.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center rounded-2xl bg-[#E3DDFF]/70 p-3 sm:p-4 text-center border border-[#E3DDFF]/50 shadow-2xs"
            >
              <span className="text-[28px] font-bold text-[#333333] leading-none">
                {item.count}
              </span>
              <span className="text-[12px] font-medium text-[#333333] leading-tight mt-2.5 text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Item List */}
      <div className="mt-5 space-y-3">
        {shipmentAlertsData.map((alert) => {
          let IconComp = FileWarning;
          if (alert.type.includes("Address")) IconComp = MapPin;
          if (alert.type.includes("Weather")) IconComp = CloudRain;

          return (
            <div
              key={alert.id}
              className="group flex items-center justify-between rounded-xl p-2.5 hover:bg-[#F8F9FB] border border-transparent hover:border-[#E0E0E0]/60 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F0F0] text-[#333333] group-hover:bg-[#856DF3] group-hover:text-white transition-colors shrink-0">
                  <IconComp className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="truncate text-xs sm:text-sm font-semibold text-[#333333]">
                    {alert.type}
                  </h4>
                  <p className="truncate text-[11px] font-medium text-[#757575] mt-0.5">
                    <span className="font-bold text-[#856DF3]">
                      {alert.trackingId}
                    </span>{" "}
                    • {alert.mode} • {alert.date}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-[#757575] group-hover:text-[#856DF3] transition-colors shrink-0 ml-2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
