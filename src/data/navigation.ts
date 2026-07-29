import { NavItem } from "@/types";

export const navigationData: NavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard", iconName: "LayoutDashboard", isActive: true },
  { id: "analytics", label: "Analytics", href: "/analytics", iconName: "BarChart3" },
  { id: "calendar", label: "Calendar", href: "/calendar", iconName: "Calendar" },
  { id: "shipments", label: "Shipments", href: "/shipments", iconName: "Package" },
  { id: "tracking", label: "Tracking", href: "/tracking", iconName: "TrendingUp" },
  { id: "warehouse", label: "Warehouse", href: "/warehouse", iconName: "Building2" },
  { id: "fleets", label: "Fleets", href: "/fleets", iconName: "Truck" },
  { id: "drivers", label: "Drivers", href: "/drivers", iconName: "Users" },
  { id: "invoices", label: "Invoices & Billing", href: "/invoices", iconName: "FileText" },
  { id: "message", label: "Message", href: "/messages", iconName: "MessageSquare", badgeCount: 19 },
  { id: "notification", label: "Notification", href: "/notifications", iconName: "Bell", badgeCount: 5 },
  { id: "settings", label: "Settings", href: "/settings", iconName: "Settings" },
];
