"use client";

import { recentActivityFeed } from "@/data/dashboard";
import { MoreHorizontal, FileText, Tag, RotateCcw, CheckCircle2, MapPin } from "lucide-react";

export function RecentActivityCard() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#FEFEFE] p-4 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-[#333333]">
          Recent Activity
        </h3>
        <button
          type="button"
          className="rounded-lg p-1 text-[#757575] hover:bg-[#F0F0F0] hover:text-[#333333] transition"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Activity Timeline List */}
      <div className="mt-4 space-y-3 relative">
        {recentActivityFeed.map((item, idx) => {
          let IconComp = FileText;
          if (item.iconType === "tag") IconComp = Tag;
          if (item.iconType === "return") IconComp = RotateCcw;
          if (item.iconType === "resolve") IconComp = CheckCircle2;
          if (item.iconType === "update") IconComp = MapPin;

          return (
            <div key={item.id} className="relative flex items-start gap-3">
              {/* Timeline Connector Line */}
              {idx !== recentActivityFeed.length - 1 && (
                <span className="absolute left-4 top-8 -bottom-3 w-[1.5px] bg-[#E0E0E0]" />
              )}

              {/* Icon Bubble */}
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F0F0F0] text-[#333333] border border-[#E0E0E0]/60 shrink-0">
                <IconComp className="h-4 w-4 text-[#856DF3]" />
              </div>

              {/* Activity Details */}
              <div className="flex-1 min-w-0 pt-0.5">
                <p className="text-xs text-[#333333] leading-snug">
                  <span className="font-bold text-[#856DF3] hover:underline cursor-pointer">
                    {item.handle}
                  </span>{" "}
                  <span className="font-normal text-[#333333]">{item.action}</span>{" "}
                  {item.orderId && (
                    <span className="font-bold text-[#333333]">
                      {item.orderId}
                    </span>
                  )}
                </p>
                <span className="text-[10px] font-semibold text-[#757575] block mt-0.5">
                  {item.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
