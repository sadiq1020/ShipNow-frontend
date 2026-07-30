"use client";

import { ShieldCheck, FileX, Loader, Clock } from "lucide-react";

export function InvoicesKpiCards() {
  const cards = [
    {
      id: "paid",
      title: "Paid Invoices",
      amount: "$28,890",
      count: "350",
      icon: ShieldCheck,
    },
    {
      id: "unpaid",
      title: "Unpaid Invoices",
      amount: "$16,700",
      count: "120",
      icon: FileX,
    },
    {
      id: "pending",
      title: "Pending Invoices",
      amount: "$8,050",
      count: "80",
      icon: Loader,
    },
    {
      id: "overdue",
      title: "Overdue Invoices",
      amount: "$22,110",
      count: "245",
      icon: Clock,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 w-full">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.id}
            className="flex items-center justify-between rounded-2xl bg-[#FEFEFE] p-4 sm:p-5 border border-[#E0E0E0]/80 shadow-2xs w-full"
          >
            {/* Left Side: Icon Container */}
            <div className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-2xl bg-[#856DF3] text-white shadow-xs shrink-0">
              <Icon className="h-6 w-6 stroke-[2.2]" />
            </div>

            {/* Right Side: Right-Aligned Text Content Pushed to Right Border */}
            <div className="flex flex-col items-end text-right">
              <span className="text-xs font-medium text-[#757575]">
                {card.title}
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-[#333333] tracking-tight mt-1">
                {card.amount}
              </span>
              <div className="flex items-center gap-1 mt-1 text-[11px] text-[#757575]">
                <span>from</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-md text-[10px]">
                  {card.count}
                </span>
                <span>Invoices</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
