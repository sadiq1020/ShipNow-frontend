"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, ArrowUpDown, FileText, Check } from "lucide-react";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { InvoiceDetailsData } from "./InvoiceDetailsCard";
import { clsx } from "clsx";

export const mockInvoicesData: InvoiceDetailsData[] = [
  {
    id: "INV-1001",
    companyName: "TechGear Inc.",
    companyEmail: "billing@techgear.com",
    companyAddress: "101 Silicon Valley Way, San Jose, CA 95110, USA",
    companyPhone: "+1 408-555-0199",
    shippingId: "#SH9283746",
    issuedDate: "Mar 15, 2035",
    dueDate: "Mar 22, 2035",
    amount: "$1,250.00",
    status: "Paid",
    items: [
      {
        description: "Wireless Mechanical Keyboards",
        shipmentType: "Air Freight",
        shipmentSpeed: "Express",
        price: "$250.00",
        qty: 4,
        amount: "$1,000.00",
      },
      {
        description: "USB-C Hub Adapters",
        shipmentType: "Air Freight",
        shipmentSpeed: "Standard",
        price: "$50.00",
        qty: 5,
        amount: "$250.00",
      },
    ],
    subtotal: "$1,250.00",
    tax: "$100.00",
    fee: "$10.00",
    total: "$1,360.00",
  },
  {
    id: "INV-1002",
    companyName: "StyleHub Co.",
    companyEmail: "accounts@stylehub.com",
    companyAddress: "45 Fashion Ave, New York, NY 10001, USA",
    companyPhone: "+1 212-555-7821",
    shippingId: "#SH9182635",
    issuedDate: "Mar 16, 2035",
    dueDate: "Mar 23, 2035",
    amount: "$980.00",
    status: "Unpaid",
    items: [
      {
        description: "Designer Denim Jackets",
        shipmentType: "Road Freight",
        shipmentSpeed: "Express",
        price: "$140.00",
        qty: 5,
        amount: "$700.00",
      },
      {
        description: "Cotton Polo Shirts",
        shipmentType: "Road Freight",
        shipmentSpeed: "Standard",
        price: "$35.00",
        qty: 8,
        amount: "$280.00",
      },
    ],
    subtotal: "$980.00",
    tax: "$78.40",
    fee: "$10.00",
    total: "$1,068.40",
  },
  {
    id: "INV-1003",
    companyName: "FreshNest",
    companyEmail: "orders@freshnest.com",
    companyAddress: "782 Eco Park Dr, Portland, OR 97201, USA",
    companyPhone: "+1 503-555-4310",
    shippingId: "#SH9037821",
    issuedDate: "Mar 14, 2035",
    dueDate: "Mar 21, 2035",
    amount: "$1,320.00",
    status: "Paid",
    items: [
      {
        description: "Organic Air Purifiers",
        shipmentType: "Ocean Freight",
        shipmentSpeed: "Standard",
        price: "$330.00",
        qty: 4,
        amount: "$1,320.00",
      },
    ],
    subtotal: "$1,320.00",
    tax: "$105.60",
    fee: "$15.00",
    total: "$1,440.60",
  },
  {
    id: "INV-1004",
    companyName: "FitPlus Gear",
    companyEmail: "finance@fitplus.com",
    companyAddress: "238 Wellness Blvd, Austin, TX 78701, USA",
    companyPhone: "+1 512-555-9082",
    shippingId: "#SH9374652",
    issuedDate: "Mar 17, 2035",
    dueDate: "Mar 24, 2035",
    amount: "$1,150.00",
    status: "Unpaid",
    items: [
      {
        description: "Smart Fitness Watch Series 4",
        shipmentType: "Air Freight",
        shipmentSpeed: "Express",
        price: "$230.00",
        qty: 5,
        amount: "$1,150.00",
      },
    ],
    subtotal: "$1,150.00",
    tax: "$92.00",
    fee: "$10.00",
    total: "$1,252.00",
  },
  {
    id: "INV-1005",
    companyName: "AutoParts Pro",
    companyEmail: "support@autopartspro.com",
    companyAddress: "890 Motor Parkway, Detroit, MI 48201, USA",
    companyPhone: "+1 313-555-1289",
    shippingId: "#SH9457830",
    issuedDate: "Mar 15, 2035",
    dueDate: "Mar 22, 2035",
    amount: "$1,480.00",
    status: "Overdue",
    items: [
      {
        description: "Ceramic Brake Pad Sets",
        shipmentType: "Road Freight",
        shipmentSpeed: "Standard",
        price: "$148.00",
        qty: 10,
        amount: "$1,480.00",
      },
    ],
    subtotal: "$1,480.00",
    tax: "$118.40",
    fee: "$20.00",
    total: "$1,618.40",
  },
  {
    id: "INV-1006",
    companyName: "EcoLights",
    companyEmail: "info@ecolights.com",
    companyAddress: "54 Green Energy Way, Seattle, WA 98101, USA",
    companyPhone: "+1 206-555-6677",
    shippingId: "#SH8821349",
    issuedDate: "Mar 13, 2035",
    dueDate: "Mar 20, 2035",
    amount: "$790.00",
    status: "Paid",
    items: [
      {
        description: "LED Solar Garden Lanterns",
        shipmentType: "Road Freight",
        shipmentSpeed: "Express",
        price: "$79.00",
        qty: 10,
        amount: "$790.00",
      },
    ],
    subtotal: "$790.00",
    tax: "$63.20",
    fee: "$10.00",
    total: "$863.20",
  },
  {
    id: "INV-1007",
    companyName: "GreenHaven",
    companyEmail: "logistics@greenhaven.com",
    companyAddress: "12 Plant St, San Diego, CA 92101, USA",
    companyPhone: "+1 619-555-3412",
    shippingId: "#SH8967432",
    issuedDate: "Mar 14, 2035",
    dueDate: "Mar 21, 2035",
    amount: "$875.00",
    status: "Paid",
    items: [
      {
        description: "Hydroponic Starter Kits",
        shipmentType: "Road Freight",
        shipmentSpeed: "Standard",
        price: "$175.00",
        qty: 5,
        amount: "$875.00",
      },
    ],
    subtotal: "$875.00",
    tax: "$70.00",
    fee: "$10.00",
    total: "$955.00",
  },
  {
    id: "INV-1008",
    companyName: "ModaWear",
    companyEmail: "billing@modawear.com",
    companyAddress: "89 Franklin St, Boston, MA 02110, USA",
    companyPhone: "+1 617-555-2290",
    shippingId: "#SH8893247",
    issuedDate: "Mar 16, 2035",
    dueDate: "Mar 23, 2035",
    amount: "$910.00",
    status: "Unpaid",
    items: [
      {
        description: "Lightweight Hoodie Pack",
        shipmentType: "Road Freight",
        shipmentSpeed: "Express",
        price: "$120.00",
        qty: 3,
        amount: "$360.00",
      },
      {
        description: "Autumn Jacket Set",
        shipmentType: "Road Freight",
        shipmentSpeed: "Standard",
        price: "$180.00",
        qty: 2,
        amount: "$360.00",
      },
      {
        description: "Lightweight Hoodie Pack",
        shipmentType: "Road Freight",
        shipmentSpeed: "Express",
        price: "$95.00",
        qty: 2,
        amount: "$190.00",
      },
    ],
    subtotal: "$910.00",
    tax: "$72.80",
    fee: "$10.00",
    total: "$992.80",
  },
  {
    id: "INV-1009",
    companyName: "SunCore Panels",
    companyEmail: "billing@suncore.com",
    companyAddress: "400 Solar Way, Phoenix, AZ 85001, USA",
    companyPhone: "+1 602-555-8811",
    shippingId: "#SH9018723",
    issuedDate: "Mar 17, 2035",
    dueDate: "Mar 24, 2035",
    amount: "$1,600.00",
    status: "Unpaid",
    items: [
      {
        description: "Monocrystalline Solar Panels 400W",
        shipmentType: "Ocean Freight",
        shipmentSpeed: "Standard",
        price: "$400.00",
        qty: 4,
        amount: "$1,600.00",
      },
    ],
    subtotal: "$1,600.00",
    tax: "$128.00",
    fee: "$25.00",
    total: "$1,753.00",
  },
  {
    id: "INV-1010",
    companyName: "VitaFresh",
    companyEmail: "orders@vitafresh.com",
    companyAddress: "120 Health Ave, Denver, CO 80201, USA",
    companyPhone: "+1 303-555-9922",
    shippingId: "#SH8881190",
    issuedDate: "Mar 15, 2035",
    dueDate: "Mar 22, 2035",
    amount: "$1,120.00",
    status: "Overdue",
    items: [
      {
        description: "Cold-Pressed Juice Bottles (Pack of 24)",
        shipmentType: "Road Freight",
        shipmentSpeed: "Express",
        price: "$56.00",
        qty: 20,
        amount: "$1,120.00",
      },
    ],
    subtotal: "$1,120.00",
    tax: "$89.60",
    fee: "$15.00",
    total: "$1,224.60",
  },
  {
    id: "INV-1011",
    companyName: "SmartAppliance",
    companyEmail: "finance@smartappliance.com",
    companyAddress: "95 Tech Blvd, Chicago, IL 60601, USA",
    companyPhone: "+1 312-555-4432",
    shippingId: "#SH8923752",
    issuedDate: "Mar 18, 2035",
    dueDate: "Mar 25, 2035",
    amount: "$1,050.00",
    status: "Paid",
    items: [
      {
        description: "Smart Countertop Blenders",
        shipmentType: "Air Freight",
        shipmentSpeed: "Standard",
        price: "$210.00",
        qty: 5,
        amount: "$1,050.00",
      },
    ],
    subtotal: "$1,050.00",
    tax: "$84.00",
    fee: "$10.00",
    total: "$1,144.00",
  },
];

interface InvoicesTableProps {
  selectedInvoiceId: string | null;
  onSelectInvoice: (invoice: InvoiceDetailsData) => void;
}

export function InvoicesTable({
  selectedInvoiceId,
  onSelectInvoice,
}: InvoicesTableProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvoices = mockInvoicesData.filter(
    (inv) =>
      inv.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.shippingId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-emerald-100 text-emerald-700";
      case "Unpaid":
        return "bg-[#E3DDFF] text-[#856DF3]";
      case "Overdue":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 className="text-sm font-bold text-[#333333]">Invoices</h3>

        <div className="flex items-center gap-2">
          {/* Search Input */}
          <div className="relative flex items-center w-full sm:w-56">
            <Search className="absolute left-3 h-3.5 w-3.5 text-[#757575]" />
            <input
              type="text"
              placeholder="Search invoices"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 w-full rounded-xl bg-[#F4F4F5] pl-8 pr-3 text-xs text-[#333333] placeholder:text-[#757575] outline-none border border-transparent focus:border-[#856DF3]/40 transition"
            />
          </div>

          {/* Filter Button */}
          <button
            type="button"
            className="flex h-8 items-center gap-1.5 px-3 rounded-xl bg-[#F4F4F5] text-xs font-semibold text-[#757575] hover:text-[#333333] transition shrink-0"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
          </button>

          {/* New Invoice Button */}
          <button
            type="button"
            className="flex h-8 items-center justify-center px-4 rounded-xl bg-[#333333] text-xs font-bold text-white shadow-xs hover:bg-[#1A1A1A] transition shrink-0"
          >
            New Invoice
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto scrollbar-none mt-1">
        <table className="w-full min-w-[700px] text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#E0E0E0]/80 text-[10px] font-semibold text-[#757575] uppercase tracking-wider">
              <th className="py-2.5 px-3 w-8"></th>
              <th className="py-2.5 px-3">
                <div className="flex items-center gap-1 cursor-pointer">
                  Invoice ID <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-2.5 px-3">
                <div className="flex items-center gap-1 cursor-pointer">
                  Company <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-2.5 px-3">
                <div className="flex items-center gap-1 cursor-pointer">
                  Shipping ID <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-2.5 px-3">
                <div className="flex items-center gap-1 cursor-pointer">
                  Date <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-2.5 px-3">
                <div className="flex items-center gap-1 cursor-pointer">
                  Amount <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
              <th className="py-2.5 px-3 text-right">
                <div className="flex items-center justify-end gap-1 cursor-pointer">
                  Status <ArrowUpDown className="h-3 w-3 text-[#757575]" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#E0E0E0]/60">
            {filteredInvoices.map((inv) => {
              const isSelected = selectedInvoiceId === inv.id;

              return (
                <tr
                  key={inv.id}
                  onClick={() => onSelectInvoice(inv)}
                  className={clsx(
                    "cursor-pointer transition-colors",
                    isSelected
                      ? "bg-[#E3DDFF]/40 font-semibold"
                      : "hover:bg-[#F8F9FB]"
                  )}
                >
                  {/* Selection Checkbox / Radio */}
                  <td className="py-3 px-3">
                    <div
                      className={clsx(
                        "flex h-4.5 w-4.5 items-center justify-center rounded-md border transition-all",
                        isSelected
                          ? "bg-[#856DF3] border-[#856DF3] text-white"
                          : "border-[#E0E0E0] bg-white"
                      )}
                    >
                      {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                  </td>

                  {/* Invoice ID with Document Icon */}
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-1.5 text-[#2A1298] font-bold">
                      <span>{inv.id}</span>
                      <FileText className="h-3.5 w-3.5 stroke-[2] opacity-70" />
                    </div>
                  </td>

                  {/* Company Logo & Name */}
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <CompanyLogo name={inv.companyName} className="h-5 w-5 shrink-0" />
                      <span className="font-bold text-[#333333]">
                        {inv.companyName}
                      </span>
                    </div>
                  </td>

                  {/* Shipping ID */}
                  <td className="py-3 px-3 font-medium text-[#757575]">
                    {inv.shippingId}
                  </td>

                  {/* Date (Issued & Due) */}
                  <td className="py-3 px-3 text-[11px]">
                    <div className="flex flex-col">
                      <span className="text-[#333333] font-medium">
                        {inv.issuedDate}{" "}
                        <span className="text-[10px] text-[#757575]">(Issued)</span>
                      </span>
                      <span className="text-[#2A1298] font-bold">
                        {inv.dueDate}{" "}
                        <span className="text-[10px] text-[#757575] font-normal">
                          (Due)
                        </span>
                      </span>
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="py-3 px-3 font-bold text-[#333333]">
                    {inv.amount}
                  </td>

                  {/* Status Badge */}
                  <td className="py-3 px-3 text-right">
                    <span
                      className={clsx(
                        "inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold",
                        getStatusBadge(inv.status)
                      )}
                    >
                      {inv.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
