"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#F8F9FB] text-[#333333] font-sans antialiased">
      {/* Sidebar Layout Navigation */}
      <Sidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 px-4 sm:px-6 lg:px-8 py-5">
        <Header onMobileMenuOpen={() => setMobileOpen(true)} />
        
        <main className="flex-1">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
