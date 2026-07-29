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
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      {/* 1. TOP OVERVIEW SUMMARY CARDS */}
      <OverviewCards />

      {/* 2. MAIN DASHBOARD CONTENT GRID */}
      {/* 
        DESKTOP (lg: 1024px+): 2-Column layout (Left 8 cols, Right 4 cols)
        TABLET (md: 768px - 1023px): Optimized 2-Column responsive rows
        MOBILE (< 768px): Single vertical column stack
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN IN DESKTOP (8 COLS) / FULL WIDTH IN TABLET/MOBILE */}
        <div className="lg:col-span-8 flex flex-col gap-6 w-full">
          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <ShipmentStatisticCard />
            <ProfitSummaryCard />
          </div>

          {/* Categories & Route Map Row in Desktop; Responsive in Tablet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <ProductCategoriesCard />
            <RouteMapCard />
          </div>

          {/* Recent Shipments Data Table */}
          <RecentShipmentsTable />
        </div>

        {/* RIGHT COLUMN IN DESKTOP (4 COLS) / RESPONSIVE GRID IN TABLET/MOBILE */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full">
          <ShipmentTypeCard />
          <ShipmentAlertsCard />
          <RecentActivityCard />
        </div>
      </div>
    </div>
  );
}
