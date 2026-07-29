import { OverviewCardData, ShipmentAlertItem, ActivityItem, CategoryDistribution } from "@/types";

export const overviewCardsData: OverviewCardData[] = [
  {
    id: "active_shipments",
    title: "Active Shipments",
    value: "1,284",
    unit: "shipments",
    change: "+8.7%",
    changeType: "positive",
    period: "from last week",
    icon: "Truck",
  },
  {
    id: "delivery_performance",
    title: "Delivery Performance",
    value: "94.3%",
    unit: "on-time",
    change: "-1.2%",
    changeType: "negative",
    period: "from last week",
    icon: "Clock",
  },
  {
    id: "revenue",
    title: "Revenue",
    value: "$82,450",
    change: "+12.4%",
    changeType: "positive",
    period: "from last month",
    icon: "DollarSign",
  },
];

export const shipmentStatsSeries = [
  { month: "Jan", count: 2100 },
  { month: "Feb", count: 2400 },
  { month: "Mar", count: 2800 },
  { month: "Apr", count: 3000 },
  { month: "May", count: 3124, highlighted: true },
  { month: "Jun", count: 2900 },
  { month: "Jul", count: 3600 },
  { month: "Aug", count: 4100 },
];

export const profitSummarySeries = [
  { month: "Jan", revenue: 52000, cost: 31000 },
  { month: "Feb", revenue: 64000, cost: 38000 },
  { month: "Mar", revenue: 58000, cost: 35000 },
  { month: "Apr", revenue: 71000, cost: 42000 },
  { month: "May", revenue: 87524, cost: 45680, highlighted: true },
  { month: "Jun", revenue: 76000, cost: 41000 },
  { month: "Jul", revenue: 82000, cost: 44000 },
  { month: "Aug", revenue: 91000, cost: 48000 },
];

export const shipmentTypeDistribution = [
  { name: "Road Freight", count: 1150, percentage: 46, color: "#856DF3" },
  { name: "Air Freight", count: 700, percentage: 28, color: "#333333" },
  { name: "Ocean Freight", count: 425, percentage: 17, color: "#757575" },
  { name: "Rail Freight", count: 225, percentage: 9, color: "#E3DDFF" },
];

export const productCategoriesData: CategoryDistribution[] = [
  { name: "Electronics", productsCount: 240, percentage: 24, color: "#856DF3" },
  { name: "Home & Kitchen", productsCount: 200, percentage: 20, color: "#E3DDFF" },
  { name: "Apparel", productsCount: 180, percentage: 18, color: "#333333" },
  { name: "Beauty & Health", productsCount: 140, percentage: 14, color: "#757575" },
  { name: "Sports & Outdoors", productsCount: 120, percentage: 12, color: "#E0E0E0" },
  { name: "Automotive", productsCount: 120, percentage: 12, color: "#CCCCCC" },
];

export const shipmentAlertsSummary = {
  totalDelays: 12,
  counts: [
    { title: "Customs Clearance Delay", count: 5 },
    { title: "Incorrect Address Provided", count: 4 },
    { title: "Weather-Related Hold", count: 3 },
  ],
};

export const shipmentAlertsData: ShipmentAlertItem[] = [
  {
    id: "a1",
    type: "Customs Clearance Delay",
    trackingId: "#SH8743921",
    mode: "Ocean Freight",
    date: "Mar 20",
  },
  {
    id: "a2",
    type: "Incorrect Address Provided",
    trackingId: "#SH9725810",
    mode: "Road Freight",
    date: "Mar 20",
  },
  {
    id: "a3",
    type: "Weather-Related Hold",
    trackingId: "#SH8790043",
    mode: "Air Freight",
    date: "Mar 19",
  },
  {
    id: "a4",
    type: "Incorrect Address Provided",
    trackingId: "#SH8716654",
    mode: "Rail Freight",
    date: "Mar 18",
  },
];

export const recentActivityFeed: ActivityItem[] = [
  {
    id: "act1",
    user: "TechGuru99",
    handle: "@TechGuru99",
    action: "submitted a bulk shipment request",
    timestamp: "12:00 PM",
    iconType: "request",
  },
  {
    id: "act2",
    user: "Customer Support",
    handle: "@SupportKari",
    action: "added a priority tag to Order ID",
    orderId: "77889JKL",
    timestamp: "11:30 AM",
    iconType: "tag",
  },
  {
    id: "act3",
    user: "SallyMae88",
    handle: "@SallyMae88",
    action: "initiated a return process for Order ID",
    orderId: "44556GHI",
    timestamp: "11:00 AM",
    iconType: "return",
  },
  {
    id: "act4",
    user: "Administrator",
    handle: "@AdminLisa",
    action: "resolved a delivery issue for Order ID",
    orderId: "12345XYZ",
    timestamp: "10:15 AM",
    iconType: "resolve",
  },
  {
    id: "act5",
    user: "Mickey92",
    handle: "@Mickey92",
    action: "updated the shipping address for Order ID",
    orderId: "67890ABC",
    timestamp: "09:45 AM",
    iconType: "update",
  },
];
