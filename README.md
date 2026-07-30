# ShipNow — Logistics & Shipping Dashboard

A pixel-perfect, fully responsive logistics dashboard built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **TypeScript**. Designed to match the provided Figma specifications across Desktop, Tablet, and Mobile breakpoints.

---

## 🔗 Live Demo

**[https://ship-now-frontend.vercel.app/](https://ship-now-frontend.vercel.app/)**

---

## 🚀 Setup Instructions

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sadiq1020/ShipNow-frontend.git

# 2. Navigate into the project
cd ShipNow-frontend

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🛠 Tech Stack

| Technology       | Version  | Purpose                          |
| ---------------- | -------- | -------------------------------- |
| Next.js          | 16.2.12  | App Router, SSR, file routing    |
| React            | 19.2.4   | UI component library             |
| TypeScript       | 5.x      | Type safety                      |
| Tailwind CSS     | 4.x      | Utility-first styling            |
| Lucide React     | 1.27.0   | Icon library                     |
| Framer Motion    | 12.42.2  | Animations & transitions         |
| clsx             | 2.1.1    | Conditional class utility        |

---

## 📄 Screen-by-Screen Status

| #  | Screen / Page             | Route              | Status           | Notes                                                                                              |
| -- | ------------------------- | ------------------ | ---------------- | -------------------------------------------------------------------------------------------------- |
| 1  | **Dashboard**             | `/dashboard`       | ✅ Complete      | KPI cards, Shipment Statistics chart, Profit Summary donut, Route Map, Shipment Types, Alerts, Activity Log. Responsive across Desktop / Tablet / Mobile. |
| 2  | **Shipments**             | `/shipments`       | ✅ Complete      | Full data grid with sorting, search, filters, status badges, pagination. Responsive layout.         |
| 3  | **New Shipment**          | `/shipments/new`   | ✅ Complete      | Multi-step shipment creation form with validation.                                                  |
| 4  | **Warehouse**             | `/warehouse`       | ✅ Complete      | Overview KPI cards, Warehouse Inventory bar chart (diagonal stripes, dotted dividers), Capacity Usage donut gauge, Storage table with progress bars, Package Status, Warehouse Map shelf grid, Activity Log. Desktop / Tablet / Mobile layouts. |
| 5  | **Invoices & Billing**    | `/invoices`        | ✅ Complete      | 4 KPI summary cards, interactive invoices table with selection, Invoice Details panel. Desktop: side-by-side. Tablet: full table + below side-by-side compact list & details. Mobile: stacked. |
| 6  | **Tracking**              | `/tracking`        | ⬜ Not Attempted | Placeholder page only.                                                                             |
| 7  | **Analytics**             | `/analytics`       | ⬜ Not Attempted | Placeholder page only.                                                                             |
| 8  | **Calendar**              | `/calendar`        | ⬜ Not Attempted | Placeholder page only.                                                                             |
| 9  | **Fleets**                | `/fleets`          | ⬜ Not Attempted | Placeholder page only.                                                                             |
| 10 | **Drivers**               | `/drivers`         | ⬜ Not Attempted | Placeholder page only.                                                                             |

### Shared / Global Components

| Component            | Status       | Notes                                                                 |
| -------------------- | ------------ | --------------------------------------------------------------------- |
| **Sidebar**          | ✅ Complete  | Responsive collapsible sidebar. Desktop expanded, Tablet icons-only, Mobile hamburger drawer. Active route highlighting. |
| **Header**           | ✅ Complete  | Mobile hamburger toggle, breadcrumbs.                                 |
| **Footer**           | ✅ Complete  | Global footer with links and social icons. "Go Pro Today" CTA banner. |
| **Company Logos**     | ✅ Complete  | Built-in crisp SVG vector marks for all companies (zero external image dependencies). |

---

## ⚠️ Known Issues

1. **Placeholder Pages**: The `Tracking`, `Analytics`, `Calendar`, `Fleets`, and `Drivers` pages are placeholder stubs — they were not part of the Figma design scope provided.
2. **Static / Mock Data**: All data (invoices, shipments, warehouse stats) is hardcoded mock data. No backend API integration.
3. **Company Logo Images**: Company logos render as built-in SVG vector marks. If you want to use custom PNG logo images, place them in `public/logos/<company>.png` and pass the `logoPath` prop to the `CompanyLogo` component.

---

## 💡 Assumptions Made

1. **Design Scope**: Only the screens provided in the Figma PDF were implemented (Dashboard, Shipments, New Shipment, Warehouse, Invoices & Billing). Sidebar navigation links for other pages (Tracking, Analytics, Calendar, Fleets, Drivers) were created as placeholder routes.
2. **Responsive Breakpoints**: Based on Figma artboard widths:
   - **Desktop**: `≥ 1280px` (`xl:`)
   - **Tablet**: `768px – 1279px` (`md:` to `lg:`)
   - **Mobile**: `< 768px`
3. **Color Tokens**: Extracted from Figma inspection — Deep Indigo `#2A1298`, Primary Purple `#856DF3`, Soft Lavender `#E3DDFF`, Card BG `#FEFEFE`, Main BG `#F8F9FB`, Dark Text `#333333`, Muted Text `#757575`.
4. **Font**: Used the default Next.js Geist font family as specified in the project scaffold.
5. **Invoices Tablet Behavior**: The Figma showed the full invoices table at the top (always visible) with a side-by-side compact invoice list + details panel appearing below it when an invoice is selected. This exact interaction pattern was implemented.
6. **No Authentication**: No login/auth flow was included as it was not part of the provided design scope.
7. **USA Flag Asset**: The USA flag icon is stored at `public/flags/usa.png` and used in the Dashboard Route Map card.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (dashboard)/
│   │   ├── layout.tsx          # Dashboard layout (Sidebar + Header + Footer)
│   │   ├── dashboard/page.tsx  # Main Dashboard
│   │   ├── shipments/page.tsx  # Shipments Grid
│   │   ├── shipments/new/page.tsx # New Shipment Form
│   │   ├── warehouse/page.tsx  # Warehouse Overview
│   │   ├── invoices/page.tsx   # Invoices & Billing
│   │   ├── tracking/page.tsx   # Placeholder
│   │   ├── analytics/page.tsx  # Placeholder
│   │   ├── calendar/page.tsx   # Placeholder
│   │   ├── fleets/page.tsx     # Placeholder
│   │   └── drivers/page.tsx    # Placeholder
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Root redirect
├── components/
│   ├── dashboard/              # Dashboard page components
│   ├── invoices/               # Invoices page components
│   ├── layout/                 # Sidebar, Header, Footer
│   ├── shipments/              # Shipments page components
│   ├── ui/                     # Shared UI components (CompanyLogo, etc.)
│   └── warehouse/              # Warehouse page components
└── data/                       # Static mock data files
```

---

## 📜 License

This project was built as part of a job assessment task.
