"use client";

import { MoreHorizontal, FileText, Tag, RotateCcw, CheckCircle2 } from "lucide-react";

export function RecentActivityCard() {
  const activities = [
    {
      id: "1",
      rolePrefix: "User ",
      handle: "@TechGuru99",
      actionText: "submitted a bulk shipment request",
      timestamp: "12:00 PM",
      isLavender: true,
      icon: FileText,
    },
    {
      id: "2",
      rolePrefix: "Customer Support ",
      handle: "@SupportKen",
      actionText: "added a priority tag to Order ID ",
      orderId: "77889JKL",
      timestamp: "11:30 AM",
      isLavender: false,
      icon: Tag,
    },
    {
      id: "3",
      rolePrefix: "User ",
      handle: "@SallyMae88",
      actionText: "initiated a return process for Order ID ",
      orderId: "44556GHI",
      timestamp: "11:00 AM",
      isLavender: true,
      icon: RotateCcw,
    },
    {
      id: "4",
      rolePrefix: "Administrator ",
      handle: "@AdminLisa",
      actionText: "resolved a delivery issue for Order ID ",
      orderId: "12345XYZ",
      timestamp: "10:15 AM",
      isLavender: false,
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="flex flex-col justify-start rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[16px] font-semibold text-[#333333]">
          Recent Activity
        </h3>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F8F9FB] border border-[#E0E0E0]/60 text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Activity Timeline List */}
      <div className="relative space-y-4">
        {activities.map((item, idx) => {
          const IconComp = item.icon;

          return (
            <div key={item.id} className="relative flex items-start gap-3.5">
              {/* Vertical Connecting Line */}
              {idx !== activities.length - 1 && (
                <span className="absolute left-5 top-10 bottom-[-16px] w-[1px] bg-[#E0E0E0]" />
              )}

              {/* Icon Circle Badge (Alternating Lavender & Gray) */}
              <div
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full shrink-0 shadow-2xs ${
                  item.isLavender
                    ? "bg-[#E3DDFF] text-[#333333]"
                    : "bg-[#E0E0E0] text-[#333333]"
                }`}
              >
                <IconComp className="h-4.5 w-4.5 stroke-[2]" />
              </div>

              {/* Activity Details */}
              <div className="flex-1 min-w-0 pt-1">
                <p className="text-xs sm:text-sm text-[#333333] leading-snug">
                  {item.rolePrefix && (
                    <span className="font-normal text-[#333333]">
                      {item.rolePrefix}
                    </span>
                  )}
                  <span className="font-bold text-[#856DF3] hover:underline cursor-pointer">
                    {item.handle}
                  </span>{" "}
                  <span className="font-normal text-[#333333]">
                    {item.actionText}
                  </span>
                  {item.orderId && (
                    <span className="font-bold text-[#333333]">
                      {item.orderId}
                    </span>
                  )}
                </p>

                <span className="text-[11px] font-medium text-[#757575] block mt-1">
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
