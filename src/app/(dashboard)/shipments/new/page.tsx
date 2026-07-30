"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  ChevronDown,
  Check,
} from "lucide-react";
import { clsx } from "clsx";

export default function CreateShipmentPage() {
  // Form State
  const [senderCompany, setSenderCompany] = useState("GreenHaven");
  const [senderEmail, setSenderEmail] = useState("logistics@greenhaven.com");
  const [senderPhone, setSenderPhone] = useState("408-555-7210");
  const [pickupAddress, setPickupAddress] = useState(
    "1120 Birch Street, Portland, OR 97205, USA"
  );

  const [recipientCompany, setRecipientCompany] = useState("FreshNest");
  const [recipientEmail, setRecipientEmail] = useState("warehouse@freshnest.com");
  const [recipientPhone, setRecipientPhone] = useState("786-555-4432");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const [itemDescription, setItemDescription] = useState(
    "Premium Garden Tool Set"
  );
  const [quantity, setQuantity] = useState("40");
  const [itemValue, setItemValue] = useState("$3,200");
  const [weight, setWeight] = useState("125");
  const [weightUnit, setWeightUnit] = useState("Kg");

  const [length, setLength] = useState("80");
  const [width, setWidth] = useState("60");
  const [height, setHeight] = useState("");

  const [freightType, setFreightType] = useState("Road Freight");
  const [carrier, setCarrier] = useState("FedEx");
  const [shippingMethod, setShippingMethod] = useState("");
  const [shipmentId] = useState("#SH9583742");
  const [shipmentDate, setShipmentDate] = useState("March 21, 2035");
  const [notes, setNotes] = useState("");

  // Additional Services & Tracking Toggles
  const [insurance, setInsurance] = useState(true);
  const [tempControl, setTempControl] = useState(true);
  const [signature, setSignature] = useState(true);
  const [fragile, setFragile] = useState(false);
  const [notifyRecipient, setNotifyRecipient] = useState(true);

  // Form Reset / Delete Handler
  const handleReset = () => {
    setSenderCompany("");
    setSenderEmail("");
    setSenderPhone("");
    setPickupAddress("");
    setRecipientCompany("");
    setRecipientEmail("");
    setRecipientPhone("");
    setDeliveryAddress("");
    setItemDescription("");
    setQuantity("");
    setItemValue("");
    setWeight("");
    setLength("");
    setWidth("");
    setHeight("");
    setShippingMethod("");
    setNotes("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Shipment submitted successfully!");
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto min-h-screen pb-12">
      {/* 1. Page Title & Breadcrumb Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/shipments"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#E0E0E0] text-[#333333] hover:bg-[#F0F0F0] transition shrink-0"
            aria-label="Back to Shipments"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#333333] tracking-tight">
              Create New Shipment
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5 text-xs font-semibold text-[#757575]">
              <Link
                href="/dashboard"
                className="text-[#2A1298] hover:underline transition-colors"
              >
                Dashboard
              </Link>
              <span>/</span>
              <Link
                href="/shipments"
                className="text-[#2A1298] hover:underline transition-colors"
              >
                Shipments
              </Link>
              <span>/</span>
              <span className="text-[#757575]">Create New Shipment</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Form Container Card */}
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-2xl bg-[#FEFEFE] border border-[#E0E0E0] p-5 sm:p-6 shadow-2xs flex flex-col gap-6"
      >
        <h2 className="text-lg font-bold text-[#333333]">Shipment Form</h2>

        {/* SECTION A: SENDER INFO & RECIPIENT INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {/* Sender Info Card */}
          <div className="flex flex-col gap-4 rounded-2xl bg-[#F8F9FB] p-4 sm:p-5 border border-[#E0E0E0]/60">
            <h3 className="text-sm font-bold text-[#333333]">Sender Info</h3>

            {/* Company Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-[#757575]">
                Company
              </label>
              <input
                type="text"
                value={senderCompany}
                onChange={(e) => setSenderCompany(e.target.value)}
                placeholder="Sender company name"
                className="h-10 w-full rounded-xl bg-white border border-[#E0E0E0]/80 px-3.5 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20"
              />
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Email
                </label>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="logistics@greenhaven.com"
                  className="h-10 w-full rounded-xl bg-white border border-[#E0E0E0]/80 px-3.5 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Phone Number
                </label>
                <div className="flex items-center gap-1.5 h-10 w-full rounded-xl bg-white border border-[#E0E0E0]/80 px-2.5 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-[#333333] shrink-0 border-r border-[#E0E0E0] pr-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/flags/usa.png"
                      alt="US Flag"
                      className="h-3.5 w-5 rounded-xs object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <span>+1</span>
                    <ChevronDown className="h-3 w-3 text-[#757575]" />
                  </div>
                  <input
                    type="tel"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    placeholder="408-555-7210"
                    className="w-full bg-transparent font-medium text-[#333333] placeholder-[#333333] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Pickup Address Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-[#757575]">
                Pickup Address
              </label>
              <textarea
                rows={2}
                value={pickupAddress}
                onChange={(e) => setPickupAddress(e.target.value)}
                placeholder="1120 Birch Street, Portland, OR 97205, USA"
                className="w-full rounded-xl bg-white border border-[#E0E0E0]/80 p-3 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 resize-none"
              />
            </div>
          </div>

          {/* Recipient Info Card */}
          <div className="flex flex-col gap-4 rounded-2xl bg-[#F8F9FB] p-4 sm:p-5 border border-[#E0E0E0]/60">
            <h3 className="text-sm font-bold text-[#333333]">Recipient Info</h3>

            {/* Company Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-[#757575]">
                Company
              </label>
              <input
                type="text"
                value={recipientCompany}
                onChange={(e) => setRecipientCompany(e.target.value)}
                placeholder="FreshNest"
                className="h-10 w-full rounded-xl bg-white border border-[#E0E0E0]/80 px-3.5 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20"
              />
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Email
                </label>
                <input
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="warehouse@freshnest.com"
                  className="h-10 w-full rounded-xl bg-white border border-[#E0E0E0]/80 px-3.5 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Phone Number
                </label>
                <div className="flex items-center gap-1.5 h-10 w-full rounded-xl bg-white border border-[#E0E0E0]/80 px-2.5 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-[#333333] shrink-0 border-r border-[#E0E0E0] pr-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/flags/usa.png"
                      alt="US Flag"
                      className="h-3.5 w-5 rounded-xs object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <span>+1</span>
                    <ChevronDown className="h-3 w-3 text-[#757575]" />
                  </div>
                  <input
                    type="tel"
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    placeholder="786-555-4432"
                    className="w-full bg-transparent font-medium text-[#333333] placeholder-[#333333] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address Field (Showing validation state #2A1298) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-[#757575]">
                Delivery Address
              </label>
              <textarea
                rows={2}
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="Street address, city, state/province, ZIP code"
                className="w-full rounded-xl bg-white border border-[#2A1298] p-3 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:ring-2 focus:ring-[#2A1298]/20 resize-none"
              />
              {!deliveryAddress && (
                <span className="text-xs font-medium text-[#2A1298]">
                  Address is required.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* SECTION B: PACKAGE DETAILS & SHIPPING DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          {/* Package Details Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[#333333]">Package Details</h3>

            {/* Item Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-[#757575]">
                Item Description
              </label>
              <input
                type="text"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                placeholder="Premium Garden Tool Set"
                className="h-10 w-full rounded-xl bg-[#F5F5F5] border border-transparent px-3.5 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:bg-white focus:border-[#856DF3]"
              />
            </div>

            {/* Quantity & Value */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Quantity
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="40"
                    className="h-10 w-full rounded-xl bg-[#F5F5F5] border border-transparent px-3.5 pr-8 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:bg-white focus:border-[#856DF3]"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 text-[#757575]">
                    <button
                      type="button"
                      onClick={() => setQuantity(String(Number(quantity || 0) + 1))}
                      className="hover:text-[#333333]"
                    >
                      <ChevronDown className="h-3 w-3 rotate-180" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuantity(String(Math.max(0, Number(quantity || 0) - 1)))}
                      className="hover:text-[#333333]"
                    >
                      <ChevronDown className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Value
                </label>
                <input
                  type="text"
                  value={itemValue}
                  onChange={(e) => setItemValue(e.target.value)}
                  placeholder="$3,200"
                  className="h-10 w-full rounded-xl bg-[#F5F5F5] border border-transparent px-3.5 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:bg-white focus:border-[#856DF3]"
                />
              </div>
            </div>

            {/* Weight & Units */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Weight
                </label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="125"
                  className="h-10 w-full rounded-xl bg-[#F5F5F5] border border-transparent px-3.5 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:bg-white focus:border-[#856DF3]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Units
                </label>
                <div className="relative">
                  <select
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value)}
                    className="h-10 w-full appearance-none rounded-xl bg-[#F5F5F5] border border-transparent px-3.5 pr-8 text-xs font-medium text-[#333333] outline-none cursor-pointer transition focus:bg-white focus:border-[#856DF3]"
                  >
                    <option value="Kg">Kg</option>
                    <option value="Lbs">Lbs</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#757575] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Dimensions (Length, Width, Height) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-[#757575]">
                Dimensions
              </label>
              <div className="grid grid-cols-3 gap-3">
                <div className="relative">
                  <input
                    type="text"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="80"
                    className="h-10 w-full rounded-xl bg-[#F5F5F5] border border-transparent px-3 pr-8 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:bg-white focus:border-[#856DF3]"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-[#757575]">
                    cm
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="60"
                    className="h-10 w-full rounded-xl bg-[#F5F5F5] border border-transparent px-3 pr-8 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:bg-white focus:border-[#856DF3]"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-[#757575]">
                    cm
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="ex. 20"
                    className="h-10 w-full rounded-xl bg-[#F5F5F5] border border-transparent px-3 pr-8 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:bg-white focus:border-[#856DF3]"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-[#757575]">
                    cm
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-[10px] text-[#757575] px-1">
                <span>Length</span>
                <span>Width</span>
                <span>Height</span>
              </div>
            </div>
          </div>

          {/* Shipping Details Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[#333333]">Shipping Details</h3>

            {/* Freight Type Radio Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-[#757575]">
                Freight Type
              </label>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#333333] pt-1">
                {["Road Freight", "Rail Freight", "Ocean Freight", "Air Freight"].map(
                  (type) => (
                    <label
                      key={type}
                      className="flex items-center gap-1.5 cursor-pointer hover:text-[#856DF3]"
                    >
                      <input
                        type="radio"
                        name="freightType"
                        value={type}
                        checked={freightType === type}
                        onChange={(e) => setFreightType(e.target.value)}
                        className="h-4 w-4 accent-[#856DF3] cursor-pointer"
                      />
                      <span>{type}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Carrier, Shipping Method, Shipment ID, Shipment Date Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Carrier */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Carrier
                </label>
                <div className="relative">
                  <select
                    value={carrier}
                    onChange={(e) => setCarrier(e.target.value)}
                    className="h-10 w-full appearance-none rounded-xl bg-[#F5F5F5] border border-transparent px-3.5 pr-8 text-xs font-medium text-[#333333] outline-none cursor-pointer transition focus:bg-white focus:border-[#856DF3]"
                  >
                    <option value="FedEx">FedEx</option>
                    <option value="DHL">DHL</option>
                    <option value="UPS">UPS</option>
                    <option value="USPS">USPS</option>
                    <option value="Aramex">Aramex</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#757575] pointer-events-none" />
                </div>
              </div>

              {/* Shipping Method (Showing validation highlight #2A1298) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Shipping Method
                </label>
                <div className="relative">
                  <select
                    value={shippingMethod}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="h-10 w-full appearance-none rounded-xl bg-white border border-[#2A1298] px-3.5 pr-8 text-xs font-medium text-[#333333] outline-none cursor-pointer transition focus:ring-2 focus:ring-[#2A1298]/20"
                  >
                    <option value="">Select Method</option>
                    <option value="express">Express Standard</option>
                    <option value="priority font-bold">Priority Overnight</option>
                    <option value="economy">Economy Ground</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#757575] pointer-events-none" />
                </div>
                {!shippingMethod && (
                  <span className="text-xs font-medium text-[#2A1298]">
                    Shipping method is required.
                  </span>
                )}
              </div>

              {/* Shipment ID */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Shipment ID
                </label>
                <input
                  type="text"
                  readOnly
                  value={shipmentId}
                  className="h-10 w-full rounded-xl bg-[#F5F5F5] border border-transparent px-3.5 text-xs font-medium text-[#757575] cursor-not-allowed"
                />
                <span className="text-[10px] text-[#757575]">Auto-generated</span>
              </div>

              {/* Shipment Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-normal text-[#757575]">
                  Shipment Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={shipmentDate}
                    onChange={(e) => setShipmentDate(e.target.value)}
                    placeholder="March 21, 2035"
                    className="h-10 w-full rounded-xl bg-[#F5F5F5] border border-transparent px-3.5 pr-9 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:bg-white focus:border-[#856DF3]"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#757575]" />
                </div>
              </div>
            </div>

            {/* Special Delivery Notes */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-[#757575]">
                Notes
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add special delivery notes (optional)"
                className="w-full rounded-xl bg-[#F5F5F5] border border-transparent p-3 text-xs font-medium text-[#333333] placeholder-[#333333] outline-none transition focus:bg-white focus:border-[#856DF3] resize-none"
              />
            </div>
          </div>
        </div>

        {/* SECTION C: ADDITIONAL SERVICES & TRACKING UPDATES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-[#E0E0E0]/60">
          {/* Additional Services Checkboxes */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold text-[#757575]">
              Additional Services
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#333333]">
              <label
                onClick={() => setInsurance(!insurance)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div
                  className={clsx(
                    "flex h-4 w-4 items-center justify-center rounded-md transition-colors",
                    insurance
                      ? "bg-[#856DF3] text-white"
                      : "bg-[#F0F0F0] border border-[#E0E0E0]"
                  )}
                >
                  {insurance && <Check className="h-3 w-3 stroke-[3]" />}
                </div>
                <span>Insurance Coverage</span>
              </label>

              <label
                onClick={() => setTempControl(!tempControl)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div
                  className={clsx(
                    "flex h-4 w-4 items-center justify-center rounded-md transition-colors",
                    tempControl
                      ? "bg-[#856DF3] text-white"
                      : "bg-[#F0F0F0] border border-[#E0E0E0]"
                  )}
                >
                  {tempControl && <Check className="h-3 w-3 stroke-[3]" />}
                </div>
                <span>Temperature Control</span>
              </label>

              <label
                onClick={() => setSignature(!signature)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div
                  className={clsx(
                    "flex h-4 w-4 items-center justify-center rounded-md transition-colors",
                    signature
                      ? "bg-[#856DF3] text-white"
                      : "bg-[#F0F0F0] border border-[#E0E0E0]"
                  )}
                >
                  {signature && <Check className="h-3 w-3 stroke-[3]" />}
                </div>
                <span>Signature on Delivery</span>
              </label>

              <label
                onClick={() => setFragile(!fragile)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div
                  className={clsx(
                    "flex h-4 w-4 items-center justify-center rounded-md transition-colors",
                    fragile
                      ? "bg-[#856DF3] text-white"
                      : "bg-[#F0F0F0] border border-[#E0E0E0]"
                  )}
                >
                  {fragile && <Check className="h-3 w-3 stroke-[3]" />}
                </div>
                <span>Fragile Item Handling</span>
              </label>
            </div>
          </div>

          {/* Tracking & Status Updates Toggle */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold text-[#757575]">
              Tracking & Status Updates
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setNotifyRecipient(!notifyRecipient)}
                className={clsx(
                  "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                  notifyRecipient ? "bg-[#856DF3]" : "bg-gray-200"
                )}
              >
                <span
                  className={clsx(
                    "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out",
                    notifyRecipient ? "translate-x-5" : "translate-x-0"
                  )}
                />
              </button>
              <span className="text-xs font-semibold text-[#333333]">
                Notify Recipient via Email/SMS
              </span>
            </div>
          </div>
        </div>

        {/* SECTION D: BOTTOM ACTION BUTTONS */}
        <div className="flex items-center justify-end gap-3 pt-6 border-t border-[#E0E0E0]/60">
          <button
            type="button"
            onClick={handleReset}
            className="h-10 px-5 rounded-xl text-sm font-medium text-[#757575] hover:text-[#333333] hover:bg-[#F0F0F0] transition"
          >
            Delete Form
          </button>

          <button
            type="submit"
            className="h-10 px-6 rounded-xl bg-[#333333] text-white text-sm font-bold shadow-xs hover:bg-[#1A1A1A] active:scale-[0.98] transition-all"
          >
            Submit Shipment
          </button>
        </div>
      </form>
    </div>
  );
}
