"use client";

import { ShipmentGridRecord } from "@/types";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { Plane, Truck, Anchor, Train, ArrowUpDown } from "lucide-react";
import { clsx } from "clsx";

interface ShipmentsTableViewProps {
  records: ShipmentGridRecord[];
}

export function ShipmentsTableView({ records }: ShipmentsTableViewProps) {
  const getModeIcon = (mode?: string) => {
    switch (mode) {
      case "airplane":
        return <Plane className="h-3 w-3 text-[#757575]" />;
      case "truck":
        return <Truck className="h-3 w-3 text-[#757575]" />;
      case "ship":
        return <Anchor className="h-3 w-3 text-[#757575]" />;
      case "train":
        return <Train className="h-3 w-3 text-[#757575]" />;
      default:
        return <Truck className="h-3 w-3 text-[#757575]" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Delivery":
      case "In Transit":
      case "Out for Delivery":
        return "bg-[#E3DDFF] text-[#2A1298]";
      case "Completed":
      case "Delivered":
        return "bg-emerald-100 text-emerald-700";
      case "Pending":
      case "Processing":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#FEFEFE] border border-[#E0E0E0] shadow-2xs overflow-hidden">
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200">
        <table className="w-full min-w-[1050px] text-left text-xs border-collapse">
          {/* Table Headers (Figma Spec: 10px Nunito Sans Regular #757575) */}
          <thead>
            <tr className="border-b border-[#E0E0E0] bg-[#F8F9FB] text-[10px] font-semibold text-[#757575] uppercase tracking-wider">
              <th className="py-3 px-3.5 w-8">
                <div className="h-4 w-4 rounded bg-[#F0F0F0] border border-[#E0E0E0]" />
              </th>
              <th className="py-3 px-3.5">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                  Shipping ID <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3.5">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                  Company <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3.5">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                  Carriers <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3.5">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                  Product Category <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3.5">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                  Weight <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3.5">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                  Route <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3.5">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                  Date <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3.5">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                  Progress <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-3 px-3.5 text-center">
                <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-[#333333]">
                  Status <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body (Figma Spec: 12px Nunito Sans SemiBold #333333, py-3.5 px-3.5) */}
          <tbody className="divide-y divide-[#E0E0E0]">
            {records.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-[#F8F9FB] transition-colors cursor-pointer"
              >
                {/* Checkbox */}
                <td className="py-3.5 px-3.5">
                  <div className="h-4 w-4 rounded bg-[#F0F0F0] border border-[#E0E0E0]" />
                </td>

                {/* Shipping ID & Mode */}
                <td className="py-3.5 px-3.5">
                  <div className="flex flex-col">
                    <span className="font-bold text-[#2A1298] text-xs">
                      {row.trackingId}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-normal text-[#757575] mt-0.5">
                      {getModeIcon(row.modeIcon)}
                      {row.modeLabel || "Freight"}
                    </span>
                  </div>
                </td>

                {/* Company Logo, Name & Category */}
                <td className="py-3.5 px-3.5">
                  <div className="flex items-center gap-2.5">
                    <CompanyLogo
                      logoType={row.logoType}
                      companyName={row.company}
                      className="h-6 w-6"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-[#333333] text-xs">
                        {row.company}
                      </span>
                      <span className="text-[10px] font-normal text-[#757575]">
                        {row.category}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Carrier */}
                <td className="py-3.5 px-3.5 font-medium text-[#333333] text-xs">
                  {row.carrier}
                </td>

                {/* Product Category */}
                <td className="py-3.5 px-3.5 font-medium text-[#333333] text-xs">
                  {row.productCategory || row.category}
                </td>

                {/* Weight */}
                <td className="py-3.5 px-3.5 font-medium text-[#333333] text-xs">
                  {row.weight || "1,000 kg"}
                </td>

                {/* Route (Origin & Destination) */}
                <td className="py-3.5 px-3.5">
                  <div className="flex flex-col text-xs">
                    <span className="font-semibold text-[#333333]">
                      {row.origin.city}{" "}
                      <span className="font-normal text-[10px] text-[#757575]">
                        (Origin)
                      </span>
                    </span>
                    <span className="font-bold text-[#2A1298] mt-0.5">
                      {row.destination.city}{" "}
                      <span className="font-normal text-[10px] text-[#757575]">
                        (Destination)
                      </span>
                    </span>
                  </div>
                </td>

                {/* Date (ATD & ETA) */}
                <td className="py-3.5 px-3.5">
                  <div className="flex flex-col text-xs">
                    <span className="font-medium text-[#333333]">
                      {row.origin.date}{" "}
                      <span className="font-normal text-[10px] text-[#757575]">
                        (ATD)
                      </span>
                    </span>
                    <span className="font-semibold text-[#2A1298] mt-0.5">
                      {row.destination.date}{" "}
                      <span className="font-normal text-[10px] text-[#757575]">
                        (ETA)
                      </span>
                    </span>
                  </div>
                </td>

                {/* Progress Bar */}
                <td className="py-3.5 px-3.5 w-28">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 flex-1 rounded-full bg-[#F0F0F0] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#856DF3]"
                        style={{ width: `${row.progress}%` }}
                      />
                    </div>
                    <span className="font-bold text-[#333333] text-[11px]">
                      {row.progress}%
                    </span>
                  </div>
                </td>

                {/* Status Badge */}
                <td className="py-3.5 px-3.5 text-center">
                  <span
                    className={clsx(
                      "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold shadow-2xs",
                      getStatusBadge(row.status)
                    )}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        row.status === "Completed" || row.status === "Delivered"
                          ? "bg-emerald-500"
                          : row.status === "Pending" || row.status === "Processing"
                          ? "bg-amber-500"
                          : "bg-[#2A1298]"
                      }`}
                    />
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
