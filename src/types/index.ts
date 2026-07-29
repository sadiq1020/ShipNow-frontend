export interface NavItem {
  id: string;
  label: string;
  href: string;
  iconName: string;
  badgeCount?: number;
  isActive?: boolean;
}

export interface OverviewCardData {
  id: string;
  title: string;
  value: string;
  unit?: string;
  change: string;
  changeType: 'positive' | 'negative';
  period: string;
  icon: string;
}

export interface ShipmentAlertItem {
  id: string;
  type: string;
  trackingId: string;
  mode: string;
  date: string;
  severity?: 'warning' | 'error' | 'info';
}

export interface ActivityItem {
  id: string;
  user: string;
  handle: string;
  action: string;
  orderId?: string;
  timestamp: string;
  iconType: 'request' | 'tag' | 'return' | 'resolve' | 'update';
}

export interface ShipmentRecord {
  id: string;
  trackingId: string;
  company: string;
  category: string;
  carrier: string;
  route: {
    from: string;
    to: string;
  };
  shippingDate: string;
  status: 'In Transit' | 'Out for Delivery' | 'Delivered' | 'Processing';
}

export interface CategoryDistribution {
  name: string;
  productsCount: number;
  percentage: number;
  color: string;
}
