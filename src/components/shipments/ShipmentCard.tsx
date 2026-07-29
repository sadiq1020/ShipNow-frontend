"use client";

import { ShipmentGridRecord } from "@/types";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { Plane, Truck, Anchor, Train } from "lucide-react";
import { clsx } from "clsx";

interface ShipmentCardProps {
  record: ShipmentGridRecord;
}

export function ShipmentCard({ record }: ShipmentCardProps) {
  const getModeIcon = () => {
    switch (record.modeIcon) {
      case "airplane":
        return <Plane className="h-4.5 w-4.5" />;
      case "truck":
        return <Truck className="h-4.5 w-4.5" />;
      case "ship":
        return <Anchor className="h-4.5 w-4.5" />;
      case "train":
        return <Train className="h-4.5 w-4.5" />;
      default:
        return <Truck className="h-4.5 w-4.5" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Transit":
        return "bg-[#E3DDFF] text-[#333333]";
      case "Out for Delivery":
        return "bg-[#E3DDFF] text-[#856DF3]";
      case "Delivered":
        return "bg-emerald-100 text-emerald-700";
      case "Processing":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#FEFEFE] p-4 sm:p-5 border border-[#E0E0E0]/80 shadow-2xs transition-all hover:shadow-xs w-full min-h-[320px]">
      {/* Top Row: Tracking ID + Status Badge & Mode Icon */}
      <div>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#333333] tracking-tight">
              {record.trackingId}
            </h3>
            <span
              className={clsx(
                "inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold leading-tight",
                getStatusBadge(record.status)
              )}
            >
              {record.status}
            </span>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F0F0] text-[#757575] shrink-0">
            {getModeIcon()}
          </div>
        </div>

        {/* Company Info Row */}
        <div className="flex items-center gap-3 mt-4">
          <CompanyLogo
            logoType={record.logoType}
            companyName={record.company}
            className="h-7 w-7"
          />
          <div className="min-w-0">
            <h4 className="truncate text-xs sm:text-sm font-bold text-[#333333] leading-tight">
              {record.company}
            </h4>
            <p className="truncate text-[10px] sm:text-[11px] font-normal text-[#757575] mt-0.5">
              {record.category}
            </p>
          </div>
        </div>

        {/* Origin & Destination Timeline Container */}
        <div className="mt-4 rounded-xl bg-[#F8F9FB] p-3 border border-[#E0E0E0]/50 space-y-3">
          {/* Origin */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#856DF3] shrink-0" />
              <span className="text-[10px] font-medium text-[#757575]">
                Origin
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-[#333333] block">
                {record.origin.city}
              </span>
              <span className="text-[10px] font-normal text-[#757575] block mt-0.5">
                {record.origin.date}
              </span>
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#856DF3] shrink-0" />
              <span className="text-[10px] font-medium text-[#757575]">
                Destination
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-[#333333] block">
                {record.destination.city}
              </span>
              <span className="text-[10px] font-normal text-[#757575] block mt-0.5">
                {record.destination.date}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: Progress Bar & Carrier */}
      <div className="mt-4 pt-2">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-[#757575] text-[11px] font-normal">
            Progres{" "}
            <span className="font-bold text-[#333333]">{record.progress}%</span>
          </span>
          <span className="text-[#757575] text-[11px] font-normal">
            Carriers{" "}
            <span className="font-bold text-[#333333]">{record.carrier}</span>
          </span>
        </div>

        {/* Progress Bar Line */}
        <div className="h-2 w-full rounded-full bg-[#F0F0F0] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#856DF3] transition-all duration-500"
            style={{ width: `${record.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
