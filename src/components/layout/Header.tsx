"use client";

import { Menu } from "lucide-react";

interface HeaderProps {
  onMobileMenuOpen?: () => void;
}

export function Header({ onMobileMenuOpen }: HeaderProps) {
  return (
    // Mobile Top Bar containing the mobile menu toggle button
    <header className="flex md:hidden items-center justify-between w-full py-2 border-b border-[#E0E0E0]/60 mb-4">
      <button
        onClick={onMobileMenuOpen}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEFEFE] border border-[#E0E0E0] text-[#333333] shadow-xs hover:bg-[#F0F0F0] transition"
        aria-label="Open Mobile Menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <span className="text-sm font-black tracking-tight text-[#333333]">
        SHIPNOW
      </span>
    </header>
  );
}
