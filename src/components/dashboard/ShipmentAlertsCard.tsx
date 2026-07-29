"use client";

import { shipmentAlertsSummary, shipmentAlertsData } from "@/data/dashboard";
import { AlertTriangle, ArrowUpRight, MoreHorizontal, MapPin, CloudRain, FileWarning } from "lucide-react";

export function ShipmentAlertsCard() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#FEFEFE] p-4 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-extrabold text-[#333333]">
              Shipment Alerts
            </h3>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-black text-white">
              {shipmentAlertsSummary.totalDelays}
            </span>
          </div>
          <button
            type="button"
            className="rounded-lg p-1 text-[#757575] hover:bg-[#F0F0F0] hover:text-[#333333] transition"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
        <p className="text-[11px] font-medium text-[#757575] mt-0.5">
          {shipmentAlertsSummary.totalDelays} Delays Detected across active routes
        </p>

        {/* 3 Summary Count Cards */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          {shipmentAlertsSummary.counts.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center rounded-xl bg-[#E3DDFF]/40 p-2 text-center border border-[#E3DDFF]"
            >
              <span className="text-xl font-black text-[#856DF3]">
                {item.count}
              </span>
              <span className="text-[9px] font-bold text-[#333333] leading-tight mt-0.5 line-clamp-2">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Item List */}
      <div className="mt-4 space-y-2">
        {shipmentAlertsData.map((alert) => {
          let IconComp = FileWarning;
          if (alert.type.includes("Address")) IconComp = MapPin;
          if (alert.type.includes("Weather")) IconComp = CloudRain;

          return (
            <div
              key={alert.id}
              className="group flex items-center justify-between rounded-lg p-2 hover:bg-[#F8F9FB] border border-transparent hover:border-[#E0E0E0]/60 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-[#F0F0F0] text-[#333333] group-hover:bg-[#856DF3] group-hover:text-white transition-colors shrink-0">
                  <IconComp className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0">
                  <h4 className="truncate text-xs font-bold text-[#333333]">
                    {alert.type}
                  </h4>
                  <p className="truncate text-[10px] font-medium text-[#757575]">
                    <span className="font-bold text-[#856DF3]">{alert.trackingId}</span> • {alert.mode} • {alert.date}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-[#757575] group-hover:text-[#856DF3] transition-colors shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
