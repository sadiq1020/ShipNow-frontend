"use client";

import { useState } from "react";
import { InvoicesKpiCards } from "@/components/invoices/InvoicesKpiCards";
import {
  InvoicesTable,
  mockInvoicesData,
} from "@/components/invoices/InvoicesTable";
import {
  InvoiceDetailsCard,
  InvoiceDetailsData,
} from "@/components/invoices/InvoiceDetailsCard";
import { Search } from "lucide-react";

export default function InvoicesPage() {
  // Default selected invoice is INV-1008 (ModaWear) to match Figma screenshots
  const [selectedInvoice, setSelectedInvoice] =
    useState<InvoiceDetailsData | null>(
      mockInvoicesData.find((inv) => inv.id === "INV-1008") || mockInvoicesData[0]
    );

  const handleSelectInvoice = (inv: InvoiceDetailsData) => {
    setSelectedInvoice(inv);
  };

  const handleCloseDetails = () => {
    setSelectedInvoice(null);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto min-h-screen pb-8">
      {/* Top Header Row with Title, Breadcrumbs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#333333] tracking-tight">
            Invoices & Billing
          </h1>
          <div className="flex items-center gap-1.5 mt-0.5 text-xs font-semibold text-[#757575]">
            <span className="text-[#2A1298]">Dashboard</span>
            <span>/</span>
            <span className="text-[#757575]">Invoices & Billing</span>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative flex items-center w-full md:w-64">
          <Search className="absolute left-3.5 h-4 w-4 text-[#757575]" />
          <input
            type="text"
            placeholder="Search anything"
            className="h-10 w-full rounded-2xl bg-white pl-10 pr-4 text-xs text-[#333333] placeholder:text-[#333333] outline-none border border-[#E0E0E0] shadow-2xs focus:border-[#856DF3]/50 transition"
          />
        </div>
      </div>

      {/* 1. Top 4 Summary KPI Cards */}
      <InvoicesKpiCards />

      {/* 2. Main Content Region: Table & Details Panel */}

      {/* ========================================================= */}
      {/* DESKTOP VIEW (xl: >= 1280px): Side-by-side Table & Details */}
      {/* ========================================================= */}
      <div className="hidden xl:grid grid-cols-12 gap-5 items-start w-full">
        <div
          className={
            selectedInvoice ? "col-span-7 transition-all" : "col-span-12 transition-all"
          }
        >
          <InvoicesTable
            selectedInvoiceId={selectedInvoice?.id || null}
            onSelectInvoice={handleSelectInvoice}
          />
        </div>

        {selectedInvoice && (
          <div className="col-span-5 transition-all">
            <InvoiceDetailsCard
              invoice={selectedInvoice}
              onClose={handleCloseDetails}
            />
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* TABLET & MOBILE VIEW (< 1280px):                           */}
      {/* Shows only Invoices Table first. When an invoice is        */}
      {/* checked/selected, Invoice Details appears over/under it   */}
      {/* with a back arrow to return to table.                      */}
      {/* ========================================================= */}
      <div className="flex xl:hidden flex-col gap-5 w-full relative">
        <InvoicesTable
          selectedInvoiceId={selectedInvoice?.id || null}
          onSelectInvoice={handleSelectInvoice}
        />

        {/* Tablet Overlay Modal / Floating Detail Panel when selected */}
        {selectedInvoice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs xl:hidden overflow-y-auto">
            <div className="w-full max-w-[706px] my-auto">
              <InvoiceDetailsCard
                invoice={selectedInvoice}
                onClose={handleCloseDetails}
                isOverlay={true}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
