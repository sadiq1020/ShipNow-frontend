import {
  OverviewCards,
  ProductCategoriesCard,
  ProfitSummaryCard,
  RecentActivityCard,
  RecentShipmentsTable,
  RouteMapCard,
  ShipmentAlertsCard,
  ShipmentStatisticCard,
  ShipmentTypeCard,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1177px] mx-auto">
      {/* 1. TOP BLOCK: Left (Overview KPI Cards + Charts) & Right (Shipment Type) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT REGION (8 Cols): 3 Overview Cards + 2 Charts */}
        <div className="lg:col-span-8 flex flex-col gap-6 justify-between">
          {/* 3 Overview KPI Summary Cards */}
          <OverviewCards />

          {/* Shipment Statistic & Profit Summary Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <ShipmentStatisticCard />
            <ProfitSummaryCard />
          </div>
        </div>

        {/* RIGHT REGION (4 Cols): Shipment Type Card (Tall Card Spanning Height) */}
        <div className="lg:col-span-4 flex flex-col">
          <ShipmentTypeCard />
        </div>
      </div>

      {/* 2. MIDDLE BLOCK: Product Categories (4 Cols) | Route Map (4 Cols) | Shipment Alerts (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-4 flex flex-col">
          <ProductCategoriesCard />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <RouteMapCard />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <ShipmentAlertsCard />
        </div>
      </div>

      {/* 3. BOTTOM BLOCK: Recent Shipments Data Table (8 Cols) & Recent Activity Feed (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 flex flex-col">
          <RecentShipmentsTable />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <RecentActivityCard />
        </div>
      </div>
    </div>
  );
}
