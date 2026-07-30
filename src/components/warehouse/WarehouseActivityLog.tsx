"use client";

import { CheckSquare, Layers, Truck, FileText, MoreHorizontal } from "lucide-react";

export function WarehouseActivityLog() {
  const activities = [
    {
      id: "1",
      user: "Leo Fernandez",
      action: "confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)",
      time: "01:45 PM",
      icon: CheckSquare,
      iconBg: "bg-[#333333] text-white",
    },
    {
      id: "2",
      user: "Ava Martinez",
      action: "added 25 units of Smart Router Kit to Section A1 (Electronics)",
      time: "09:15 AM",
      icon: Layers,
      iconBg: "bg-[#856DF3] text-white",
    },
    {
      id: "3",
      user: "Oscar Liam",
      action: "dispatched 18 units of Stainless Steel Cookware Set from Section C5 (Home & Kitchen)",
      time: "05:30 PM",
      icon: Truck,
      iconBg: "bg-[#333333] text-white",
    },
    {
      id: "4",
      user: "Dina Choi",
      action: "created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)",
      time: "04:10 PM",
      icon: FileText,
      iconBg: "bg-[#856DF3] text-white",
    },
  ];

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full h-full min-h-[300px]">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#333333]">
          Warehouse Activity Log
        </h3>
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-lg text-[#757575] hover:bg-[#F0F0F0] hover:text-[#333333] transition"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Activity Timeline List */}
      <div className="flex flex-col gap-4 my-auto mt-4">
        {activities.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex items-start gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full shrink-0 ${item.iconBg}`}
              >
                <Icon className="h-4 w-4 stroke-[2]" />
              </div>

              <div className="flex flex-col text-xs">
                <p className="text-[#757575] leading-relaxed">
                  <span className="font-bold text-[#2A1298] hover:underline cursor-pointer">
                    {item.user}
                  </span>{" "}
                  {item.action}
                </p>
                <span className="text-[10px] text-[#757575] mt-1 font-medium">
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
