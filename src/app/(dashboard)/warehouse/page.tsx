import { WarehouseHeader, SmallKpiCardsStack } from "@/components/warehouse/WarehouseOverviewCards";
import { WarehouseInventoryCard } from "@/components/warehouse/WarehouseInventoryCard";
import { CapacityUsageCard } from "@/components/warehouse/CapacityUsageCard";
import { WarehouseStorageTable } from "@/components/warehouse/WarehouseStorageTable";
import { PackageStatusCard } from "@/components/warehouse/PackageStatusCard";
import { WarehouseMapCard } from "@/components/warehouse/WarehouseMapCard";
import { WarehouseActivityLog } from "@/components/warehouse/WarehouseActivityLog";

export default function WarehousePage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto min-h-screen pb-8">
      {/* 1. Page Header & Freight Mode Selector Tabs */}
      <WarehouseHeader />

      {/* ========================================================= */}
      {/* DESKTOP LAYOUT (xl: >= 1280px)                            */}
      {/* ========================================================= */}
      <div className="hidden xl:flex flex-col gap-6 w-full">
        {/* Row 1: Left 200px Stacked KPI Cards | Center Inventory Bar Chart | Right 339px Capacity Usage */}
        <div className="flex flex-row gap-5 items-stretch w-full">
          <div className="w-[200px] shrink-0 flex flex-col">
            <SmallKpiCardsStack />
          </div>
          <div className="flex-1 min-w-0 flex flex-col">
            <WarehouseInventoryCard />
          </div>
          <div className="w-[339px] shrink-0 flex flex-col">
            <CapacityUsageCard />
          </div>
        </div>

        {/* Row 2: Warehouse Storage Data Table (8 cols) & Package Status (4 cols) */}
        <div className="grid grid-cols-12 gap-5 items-stretch">
          <div className="col-span-8 flex flex-col">
            <WarehouseStorageTable />
          </div>
          <div className="col-span-4 flex flex-col">
            <PackageStatusCard />
          </div>
        </div>

        {/* Row 3: Warehouse Map (8 cols) & Warehouse Activity Log (4 cols) */}
        <div className="grid grid-cols-12 gap-5 items-stretch">
          <div className="col-span-8 flex flex-col">
            <WarehouseMapCard />
          </div>
          <div className="col-span-4 flex flex-col">
            <WarehouseActivityLog />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* TABLET & MOBILE LAYOUT (< 1280px)                         */}
      {/* Matches user's Tablet screenshot:                         */}
      {/* 1. 3 KPI Cards                                           */}
      {/* 2. Warehouse Inventory Card                              */}
      {/* 3. Capacity Usage & Package Status (Side-by-side on md)   */}
      {/* 4. Warehouse Storage Table (Right below Capacity/Package)*/}
      {/* 5. Warehouse Map                                         */}
      {/* 6. Warehouse Activity Log                                */}
      {/* ========================================================= */}
      <div className="flex xl:hidden flex-col gap-5 w-full">
        {/* 1. Top Small KPI Cards */}
        <SmallKpiCardsStack />

        {/* 2. Warehouse Inventory Card */}
        <WarehouseInventoryCard />

        {/* 3. Side-by-Side Block: Capacity Usage & Package Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          <CapacityUsageCard />
          <PackageStatusCard />
        </div>

        {/* 4. Warehouse Storage Data Table (Right below Capacity Usage & Package Status) */}
        <WarehouseStorageTable />

        {/* 5. Warehouse Map Card */}
        <WarehouseMapCard />

        {/* 6. Warehouse Activity Log Card */}
        <WarehouseActivityLog />
      </div>
    </div>
  );
}
