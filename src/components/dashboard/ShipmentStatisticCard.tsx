"use client";

import { shipmentStatsSeries } from "@/data/dashboard";
import { ChevronDown, TrendingUp } from "lucide-react";
import { useState } from "react";

export function ShipmentStatisticCard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last Year");

  // Chart layout constants
  const chartW = 400;
  const chartH = 160;
  const padX = 25;
  const padTop = 15;
  const padBot = 5;
  const maxCount = 4800;

  // Calculate SVG data points
  const points = shipmentStatsSeries.map((item, i) => {
    const x =
      padX +
      (i / (shipmentStatsSeries.length - 1)) * (chartW - padX * 2);
    const y =
      chartH -
      padBot -
      (item.count / maxCount) * (chartH - padTop - padBot);
    return { x, y, ...item };
  });

  // Build smooth cubic bezier path through all points
  const buildSmoothPath = () => {
    if (points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const tension = (curr.x - prev.x) * 0.35;
      d += ` C ${prev.x + tension} ${prev.y}, ${curr.x - tension} ${curr.y}, ${curr.x} ${curr.y}`;
    }
    return d;
  };

  const linePath = buildSmoothPath();
  const last = points[points.length - 1];
  const first = points[0];
  const areaPath = `${linePath} L ${last.x} ${chartH} L ${first.x} ${chartH} Z`;

  const highlightedPt = points.find((p) => p.highlighted);

  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#FEFEFE] p-4 border border-[#E0E0E0]/80 shadow-2xs w-full">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-extrabold text-[#333333]">
            Shipment Statistic
          </h3>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[24px] leading-tight font-black text-[#333333]">
              4,352
            </span>
            <span className="flex items-center rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600">
              <TrendingUp className="mr-0.5 h-3 w-3" /> +8.7%
            </span>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 rounded-lg bg-[#F8F9FB] border border-[#E0E0E0] px-2.5 py-1.5 text-xs font-semibold text-[#333333] hover:bg-[#F0F0F0] transition"
        >
          <span>{selectedPeriod}</span>
          <ChevronDown className="h-3.5 w-3.5 text-[#757575]" />
        </button>
      </div>

      {/* Line / Area Chart */}
      <div className="relative mt-4 w-full">
        {/* Y-axis grid labels */}
        <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-[9px] font-semibold text-[#757575]/60 pointer-events-none pr-2 py-1" style={{ height: chartH }}>
          <span>4.8K</span>
          <span>3.6K</span>
          <span>2.4K</span>
          <span>1.2K</span>
          <span>0K</span>
        </div>

        <svg
          viewBox={`0 0 ${chartW} ${chartH}`}
          className="w-full"
          style={{ height: "auto", aspectRatio: `${chartW}/${chartH}` }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Gradient fill for area below the line */}
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#856DF3" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#856DF3" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Horizontal dashed grid lines */}
          {[0, 1, 2, 3, 4].map((i) => {
            const y = padTop + (i / 4) * (chartH - padTop - padBot);
            return (
              <line
                key={i}
                x1={padX - 5}
                y1={y}
                x2={chartW - padX + 5}
                y2={y}
                stroke="#E0E0E0"
                strokeWidth="0.8"
                strokeDasharray="4 3"
              />
            );
          })}

          {/* Area fill */}
          <path d={areaPath} fill="url(#areaGradient)" />

          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#856DF3"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data dots */}
          {points.map((pt) => (
            <circle
              key={pt.month}
              cx={pt.x}
              cy={pt.y}
              r={pt.highlighted ? 5 : 2.5}
              fill={pt.highlighted ? "#856DF3" : "#856DF3"}
              stroke={pt.highlighted ? "#FEFEFE" : "none"}
              strokeWidth={pt.highlighted ? 2.5 : 0}
              className="transition-all duration-200"
            />
          ))}

          {/* Highlighted May tooltip */}
          {highlightedPt && (
            <g>
              {/* Tooltip bg rect - light lavender #E3DDFF */}
              <rect
                x={highlightedPt.x - 31}
                y={highlightedPt.y - 52}
                width={63}
                height={42}
                rx={8}
                ry={8}
                fill="#E3DDFF"
              />
              {/* Tooltip caret / arrow */}
              <polygon
                points={`${highlightedPt.x - 5},${highlightedPt.y - 11} ${highlightedPt.x + 5},${highlightedPt.y - 11} ${highlightedPt.x},${highlightedPt.y - 5}`}
                fill="#E3DDFF"
              />
              {/* Date text */}
              <text
                x={highlightedPt.x}
                y={highlightedPt.y - 33}
                textAnchor="middle"
                fill="#757575"
                fontSize="9"
                fontWeight="600"
                fontFamily="Nunito Sans, sans-serif"
              >
                May 2030
              </text>
              {/* Number text */}
              <text
                x={highlightedPt.x}
                y={highlightedPt.y - 18}
                textAnchor="middle"
                fill="#333333"
                fontSize="14"
                fontWeight="900"
                fontFamily="Nunito Sans, sans-serif"
              >
                3,124
              </text>
            </g>
          )}
        </svg>

        {/* X-axis month labels */}
        <div className="flex justify-between px-3 mt-1">
          {shipmentStatsSeries.map((item) => (
            <span
              key={item.month}
              className={`text-[10px] font-bold ${
                item.highlighted ? "text-[#856DF3]" : "text-[#757575]"
              }`}
            >
              {item.month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
