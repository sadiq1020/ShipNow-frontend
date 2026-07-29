"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { LogoSymbol } from "@/components/ui/LogoSymbol";
import {
  LayoutDashboard,
  BarChart3,
  Calendar,
  Package,
  TrendingUp,
  Building2,
  Truck,
  Users,
  FileText,
  MessageSquare,
  Bell,
  Settings,
  X,
  Sparkles,
} from "lucide-react";
import { clsx } from "clsx";

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  BarChart3,
  Calendar,
  Package,
  TrendingUp,
  Building2,
  Truck,
  Users,
  FileText,
  MessageSquare,
  Bell,
  Settings,
};

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function Sidebar({ mobileOpen = false, onMobileClose }: SidebarProps) {
  const pathname = usePathname();

  const renderNavList = (isCompact = false) => (
    <ul className={clsx("space-y-1.5", isCompact ? "px-2" : "px-3")}>
      {navigationData.map((item) => {
        const IconComponent = iconMap[item.iconName] || LayoutDashboard;
        const isActive = pathname === item.href || (item.href === "/dashboard" && pathname === "/");

        if (isCompact) {
          return (
            <li key={item.id} className="relative flex justify-center">
              <Link
                href={item.href}
                className={clsx(
                  "relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-[#856DF3] text-white shadow-md shadow-[#856DF3]/30"
                    : "text-[#757575] hover:bg-[#F0F0F0] hover:text-[#333333]"
                )}
                title={item.label}
              >
                <IconComponent className="h-5 w-5 stroke-[2.2]" />
                {item.badgeCount && item.badgeCount > 0 ? (
                  <span className="absolute top-1 right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#856DF3] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#856DF3]"></span>
                  </span>
                ) : null}
              </Link>
            </li>
          );
        }

        return (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={onMobileClose}
              className={clsx(
                "group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200",
                isActive
                  ? "bg-[#856DF3] text-white shadow-sm shadow-[#856DF3]/30"
                  : "text-[#757575] hover:bg-[#F5F5F7] hover:text-[#333333]"
              )}
            >
              <div className="flex items-center space-x-3">
                <IconComponent
                  className={clsx(
                    "h-4.5 w-4.5 transition-colors stroke-[2]",
                    isActive ? "text-white" : "text-[#757575] group-hover:text-[#333333]"
                  )}
                />
                <span>{item.label}</span>
              </div>
              {item.badgeCount && item.badgeCount > 0 ? (
                <span
                  className={clsx(
                    "inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-bold",
                    isActive ? "bg-white/20 text-white" : "bg-[#856DF3]/15 text-[#856DF3]"
                  )}
                >
                  {item.badgeCount}
                </span>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#FEFEFE] border-r border-[#E0E0E0] transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center gap-2.5">
            <LogoSymbol className="h-7 w-7 text-[#856DF3]" />
            <span className="text-xl font-extrabold tracking-tight text-[#333333]">
              SHIPNOW
            </span>
          </div>
          <button
            onClick={onMobileClose}
            className="rounded-lg p-1.5 text-[#757575] hover:bg-[#F0F0F0]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* User Card */}
        <div className="mx-4 mb-4 flex items-center gap-3 rounded-xl bg-[#F8F9FB] p-3 border border-[#E0E0E0]/60">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#856DF3] font-bold text-white shadow-xs">
            JD
          </div>
          <div className="flex-1 overflow-hidden">
            <h4 className="truncate text-xs font-bold text-[#333333]">John Doe</h4>
            <p className="truncate text-[11px] font-medium text-[#757575]">Admin</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          {renderNavList(false)}
        </div>

        {/* Mobile Bottom Pro CTA */}
        <div className="p-4">
          <div className="rounded-2xl bg-gradient-to-br from-[#333333] to-[#1A1A1A] p-4 text-white shadow-lg">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E3DDFF]">
              <Sparkles className="h-4 w-4 text-[#856DF3]" />
              Pro Features
            </div>
            <p className="mt-1 text-xs text-gray-300 font-normal">
              Go Pro to access priority support and real-time analytics.
            </p>
            <button className="mt-3 w-full rounded-xl bg-[#856DF3] py-2 text-xs font-bold text-white shadow-md transition hover:bg-[#6f57e0]">
              Go Pro Today
            </button>
          </div>
        </div>
      </aside>

      {/* TABLET VIEW: 54px COMPACT ICON SIDEBAR (768px <= width < 1024px) */}
      <aside className="hidden md:flex lg:hidden flex-col items-center justify-between w-[54px] min-h-screen bg-[#FEFEFE] border-r border-[#E0E0E0] py-5 shrink-0">
        <div className="flex flex-col items-center gap-6 w-full">
          <Link href="/dashboard" className="transition hover:scale-105">
            <LogoSymbol className="h-7 w-7 text-[#856DF3]" />
          </Link>
          <div className="w-full">
            {renderNavList(true)}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#856DF3] text-xs font-bold text-white shadow-xs">
            JD
          </div>
        </div>
      </aside>

      {/* DESKTOP VIEW: EXPANDED 240px SIDEBAR (>= 1024px) */}
      <aside className="hidden lg:flex flex-col w-[240px] min-h-screen bg-[#FEFEFE] border-r border-[#E0E0E0] py-6 px-3 shrink-0 justify-between">
        <div className="flex flex-col gap-6">
          {/* Header Logo */}
          <div className="px-3 flex items-center gap-2.5">
            <LogoSymbol className="h-8 w-8 text-[#856DF3]" />
            <span className="text-xl font-black tracking-tight text-[#333333]">
              SHIPNOW
            </span>
          </div>

          {/* User Profile Snippet */}
          <div className="mx-1 flex items-center gap-3 rounded-2xl bg-[#F8F9FB] p-3 border border-[#E0E0E0]/70 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#856DF3] font-extrabold text-white text-sm shadow-xs">
              JD
            </div>
            <div className="flex-1 overflow-hidden">
              <h4 className="truncate text-xs font-extrabold text-[#333333]">John Doe</h4>
              <p className="truncate text-[11px] font-semibold text-[#757575]">Admin</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="w-full">
            {renderNavList(false)}
          </nav>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-6 px-1">
          <div className="relative overflow-hidden rounded-2xl bg-[#1E1E24] p-4 text-white shadow-xl border border-gray-800">
            <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full bg-[#856DF3]/20 blur-xl"></div>
            <h4 className="text-sm font-bold tracking-tight text-white leading-tight">
              Loving ShipNow Free?
            </h4>
            <p className="mt-1 text-[11px] text-gray-300 font-normal leading-relaxed">
              Go Pro to access priority support, real-time tracking, and full analytics.
            </p>
            <button className="mt-3 w-full rounded-xl bg-[#856DF3] py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#6f57e0] transition-colors">
              Go Pro Today
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
