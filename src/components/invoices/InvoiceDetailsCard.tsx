"use client";

import { ChevronLeft, FileText } from "lucide-react";
import { clsx } from "clsx";

export interface InvoiceDetailsData {
  id: string;
  companyName: string;
  companyEmail: string;
  companyAddress: string;
  companyPhone: string;
  shippingId: string;
  issuedDate: string;
  dueDate: string;
  amount: string;
  status: "Paid" | "Unpaid" | "Overdue";
  items: {
    description: string;
    shipmentType: string;
    shipmentSpeed: string;
    price: string;
    qty: number;
    amount: string;
  }[];
  subtotal: string;
  tax: string;
  fee: string;
  total: string;
}

interface InvoiceDetailsCardProps {
  invoice: InvoiceDetailsData;
  onClose?: () => void;
  isOverlay?: boolean;
}

export function InvoiceDetailsCard({
  invoice,
  onClose,
  isOverlay = false,
}: InvoiceDetailsCardProps) {
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
    <div
      className={clsx(
        "flex flex-col gap-4 rounded-2xl bg-[#FEFEFE] p-5 border border-[#E0E0E0]/80 shadow-md w-full h-full justify-between transition-all",
        isOverlay && "relative z-20"
      )}
    >
      {/* Top Header Row with Action Buttons */}
      <div className="flex items-center justify-between gap-2 border-b border-[#E0E0E0]/60 pb-3">
        <div className="flex items-center gap-1.5">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-xl hover:bg-[#F0F0F0] text-[#333333] transition"
              title="Back to Invoices"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          <h3 className="text-base font-bold text-[#333333]">Invoice Details</h3>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-3.5 py-1.5 rounded-xl bg-[#F0F0F0] text-xs font-bold text-[#333333] hover:bg-[#E0E0E0] transition"
          >
            Edit
          </button>
          <button
            type="button"
            className="px-3.5 py-1.5 rounded-xl bg-[#F0F0F0] text-xs font-bold text-[#333333] hover:bg-[#E0E0E0] transition"
          >
            Hold
          </button>
          <button
            type="button"
            className="px-4 py-1.5 rounded-xl bg-[#333333] text-xs font-bold text-white shadow-xs hover:bg-[#1A1A1A] transition"
          >
            Send Invoice
          </button>
        </div>
      </div>

      {/* Invoice Number, Status Badge & Dates */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mt-1">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#2A1298]">
              Invoice #{invoice.id}
            </span>
            <span
              className={clsx(
                "px-2.5 py-0.5 rounded-full text-[11px] font-bold",
                getStatusBadge(invoice.status)
              )}
            >
              {invoice.status}
            </span>
          </div>
        </div>

        <div className="flex flex-col text-xs text-[#757575] sm:text-right">
          <span>
            Issue Date: <strong className="text-[#333333]">{invoice.issuedDate}</strong>
          </span>
          <span>
            Due Date: <strong className="text-[#333333]">{invoice.dueDate}</strong>
          </span>
        </div>
      </div>

      {/* Bill From / Bill To Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl bg-[#F8F9FB] p-4 border border-[#E0E0E0]/60 my-1">
        {/* Bill From */}
        <div className="flex flex-col text-xs">
          <span className="text-[10px] font-semibold text-[#757575] uppercase tracking-wider">
            Bill From
          </span>
          <span className="text-sm font-bold text-[#333333] mt-1">
            {invoice.companyName}
          </span>
          <span className="text-[#757575] mt-0.5">{invoice.companyEmail}</span>
          <span className="text-[#757575] mt-0.5 leading-relaxed">
            {invoice.companyAddress}
          </span>
          <span className="text-[#757575] mt-0.5">{invoice.companyPhone}</span>
        </div>

        {/* Bill To */}
        <div className="flex flex-col text-xs sm:text-right">
          <span className="text-[10px] font-semibold text-[#757575] uppercase tracking-wider">
            Bill To
          </span>
          <span className="text-sm font-bold text-[#333333] mt-1">
            ShipNow Logistics
          </span>
          <span className="text-[#757575] mt-0.5">accounts@shipnow.com</span>
          <span className="text-[#757575] mt-0.5 leading-relaxed">
            901 Distribution Ave, Charlotte, NC 28217, USA
          </span>
          <span className="text-[#757575] mt-0.5">+1 704-555-9911</span>
        </div>
      </div>

      {/* Package Summary Table */}
      <div className="flex flex-col gap-2">
        <h4 className="text-xs font-bold text-[#333333]">Package Summary</h4>

        <div className="w-full overflow-x-auto scrollbar-none rounded-xl border border-[#E0E0E0]/60">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F8F9FB] border-b border-[#E0E0E0]/60 text-[10px] font-semibold text-[#757575] uppercase tracking-wider">
                <th className="py-2.5 px-3">Description</th>
                <th className="py-2.5 px-3">Shipment Type</th>
                <th className="py-2.5 px-3 text-right">Price</th>
                <th className="py-2.5 px-3 text-center">Qty</th>
                <th className="py-2.5 px-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E0E0E0]/60">
              {invoice.items.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#F8F9FB]/60 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#333333]">
                    {item.description}
                  </td>
                  <td className="py-2.5 px-3 text-[#757575]">
                    <div className="flex flex-col">
                      <span>{item.shipmentType}</span>
                      <span className="text-[10px] text-[#757575]">
                        {item.shipmentSpeed}
                      </span>
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-right font-medium text-[#333333]">
                    {item.price}
                  </td>
                  <td className="py-2.5 px-3 text-center font-semibold text-[#333333]">
                    {item.qty}
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#333333]">
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Subtotal, Tax, Fee & Total Block */}
      <div className="flex flex-col items-end gap-1.5 pt-2 border-t border-[#E0E0E0]/60 text-xs">
        <div className="flex justify-between w-48 text-[#757575]">
          <span>Sub Total</span>
          <span className="font-semibold text-[#333333]">{invoice.subtotal}</span>
        </div>
        <div className="flex justify-between w-48 text-[#757575]">
          <span>Tax (8%)</span>
          <span className="font-semibold text-[#333333]">{invoice.tax}</span>
        </div>
        <div className="flex justify-between w-48 text-[#757575]">
          <span>Fee</span>
          <span className="font-semibold text-[#333333]">{invoice.fee}</span>
        </div>
        <div className="flex justify-between w-48 pt-1.5 border-t border-[#E0E0E0]/60 text-sm font-extrabold text-[#333333]">
          <span>Total</span>
          <span>{invoice.total}</span>
        </div>
      </div>

      {/* Note Footer */}
      <div className="text-[11px] text-[#757575] leading-relaxed pt-2 border-t border-[#E0E0E0]/40">
        <strong>Note:</strong> Please process payment by the due date to avoid
        delivery disruption. Late fees may apply after 3 business days past due.
      </div>
    </div>
  );
}
