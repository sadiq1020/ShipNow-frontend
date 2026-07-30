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
  const [selectedInvoice, setSelectedInvoice] =
    useState<InvoiceDetailsData | null>(null);

  const handleSelectInvoice = (inv: InvoiceDetailsData) => {
    if (selectedInvoice?.id === inv.id) {
      setSelectedInvoice(null);
    } else {
      setSelectedInvoice(inv);
    }
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

      {/* ========================================================= */}
      {/* DESKTOP VIEW (xl: >= 1280px): Side-by-side Table & Details */}
      {/* ========================================================= */}
      <div className="hidden xl:grid grid-cols-12 gap-5 items-stretch w-full">
        <div
          className={
            selectedInvoice
              ? "col-span-7 flex flex-col h-full transition-all"
              : "col-span-12 flex flex-col h-full transition-all"
          }
        >
          <InvoicesTable
            selectedInvoiceId={selectedInvoice?.id || null}
            onSelectInvoice={handleSelectInvoice}
          />
        </div>

        {selectedInvoice && (
          <div className="col-span-5 flex flex-col h-full transition-all">
            <InvoiceDetailsCard
              invoice={selectedInvoice}
              onClose={handleCloseDetails}
            />
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* TABLET VIEW (md to xl):                                    */}
      {/* 1. Full-width Invoices table (ALL columns) — always shown  */}
      {/* 2. Below the table: side-by-side section appears when an   */}
      {/*    invoice is selected — narrow list left + details right   */}
      {/* ========================================================= */}
      <div className="hidden md:flex xl:hidden flex-col gap-5 w-full">
        {/* Full-width Invoices Table — always visible */}
        <InvoicesTable
          selectedInvoiceId={selectedInvoice?.id || null}
          onSelectInvoice={handleSelectInvoice}
        />

        {/* Below the table: side-by-side compact list + details panel */}
        {selectedInvoice && (
          <div className="flex gap-0 w-full items-stretch rounded-2xl border border-[#E0E0E0]/80 shadow-2xs bg-[#FEFEFE] overflow-hidden">
            {/* Left: Narrow compact invoice list */}
            <div className="w-[227px] min-w-[227px] shrink-0 overflow-hidden border-r border-[#E0E0E0]/60">
              <InvoicesTable
                selectedInvoiceId={selectedInvoice.id}
                onSelectInvoice={handleSelectInvoice}
                compact={true}
              />
            </div>

            {/* Right: Invoice Details panel */}
            <div className="flex-1 overflow-y-auto">
              <InvoiceDetailsCard
                invoice={selectedInvoice}
                onClose={handleCloseDetails}
                isOverlay={true}
              />
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* MOBILE VIEW (< md / < 768px):                              */}
      {/* Full-width table, then full-width details below when       */}
      {/* selected.                                                  */}
      {/* ========================================================= */}
      <div className="flex md:hidden flex-col gap-5 w-full">
        <InvoicesTable
          selectedInvoiceId={selectedInvoice?.id || null}
          onSelectInvoice={handleSelectInvoice}
        />

        {selectedInvoice && (
          <InvoiceDetailsCard
            invoice={selectedInvoice}
            onClose={handleCloseDetails}
            isOverlay={true}
          />
        )}
      </div>
    </div>
  );
}
