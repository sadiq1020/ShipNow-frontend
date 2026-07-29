"use client";

import { Menu, Plus, Search } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onMobileMenuOpen?: () => void;
}

export function Header({ onMobileMenuOpen }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-transparent py-2">
      {/* Title & Greeting */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMobileMenuOpen}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEFEFE] border border-[#E0E0E0] text-[#333333] shadow-xs"
          aria-label="Open Mobile Menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <span className="text-base font-semibold text-[#757575] tracking-wider block">
            Hello John!
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#333333] tracking-tight">
            Good Morning
          </h1>
        </div>
      </div>

      {/* Right Controls: Search Input & "Add New Shipping" CTA */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        {/* Search Input Box */}
        <div className="relative flex-1 sm:w-[211px] sm:flex-none">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#757575]" />
          <input
            type="text"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-full rounded-lg bg-[#FEFEFE] border border-[#E0E0E0]/80 pl-9 pr-3 text-xs font-medium text-[#333333] placeholder-[#757575] outline-none transition focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 shadow-2xs"
          />
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className="h-10 px-4 rounded-lg bg-[#333333] hover:bg-[#1A1A1A] active:scale-[0.98] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm shrink-0"
        >
          <Plus className="h-4 w-4 stroke-[2.5]" />
          <span>Add New Shipping</span>
        </button>
      </div>
    </header>
  );
}
