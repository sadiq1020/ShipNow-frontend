"use client";

interface CompanyLogoProps {
  logoType?: string;
  companyName?: string;
  name?: string;
  className?: string;
  logoPath?: string;
}

export function CompanyLogo({
  logoType,
  companyName,
  name,
  className = "h-7 w-7",
  logoPath,
}: CompanyLogoProps) {
  const effectiveName = companyName || name || "Company";

  // If a custom image path is explicitly provided, render <img>
  if (logoPath) {
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoPath}
          alt={`${effectiveName} Logo`}
          width={28}
          height={28}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  // Helper to normalize company name to vector SVG key
  const getNormalizedType = (compName: string, rawType?: string): string => {
    const lowerName = compName.toLowerCase();
    if (lowerName.includes("techgear")) return "techgear";
    if (lowerName.includes("stylehub")) return "stylehub";
    if (lowerName.includes("freshnest")) return "freshnest";
    if (lowerName.includes("fitplus")) return "fitplus";
    if (lowerName.includes("autoparts")) return "autoparts";
    if (lowerName.includes("ecolights")) return "ecolights";
    if (lowerName.includes("greenhaven")) return "greenhaven";
    if (lowerName.includes("modawear")) return "modawear";
    if (lowerName.includes("suncore")) return "suncore";
    if (lowerName.includes("quickparts")) return "quickparts";
    if (lowerName.includes("vitafresh")) return "vitafresh";
    if (lowerName.includes("smartappliance")) return "smartappliance";
    if (lowerName.includes("styledepot")) return "styledepot";
    return rawType || "techgear";
  };

  const finalType = getNormalizedType(effectiveName, logoType);

  // Built-in crisp vector SVG marks matching Figma logos (Zero console 404 errors!)
  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`}>
      {finalType === "techgear" && (
        <svg className="h-full w-full text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M16 3L27.25 9.5V22.5L16 29L4.75 22.5V9.5L16 3ZM16 7L8.75 11.18V20.82L16 25L23.25 20.82V11.18L16 7Z" />
        </svg>
      )}

      {finalType === "stylehub" && (
        <svg className="h-full w-full text-[#856DF3] fill-current" viewBox="0 0 32 32">
          <path d="M16 4L28 26H4L16 4ZM16 10L9 22H23L16 10Z" />
        </svg>
      )}

      {finalType === "freshnest" && (
        <svg className="h-full w-full text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4ZM16 8C19.31 8 22 10.69 22 14C22 17.31 19.31 20 16 20C12.69 20 10 17.31 10 14C10 10.69 12.69 8 16 8Z" />
        </svg>
      )}

      {finalType === "fitplus" && (
        <svg className="h-full w-full text-[#856DF3] fill-current" viewBox="0 0 32 32">
          <path d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16H22C22 19.31 19.31 22 16 22C12.69 22 10 19.31 10 16C10 12.69 12.69 10 16 10V4Z" />
        </svg>
      )}

      {finalType === "ecolights" && (
        <svg className="h-full w-full text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M16 3L27 16L16 29L5 16L16 3ZM16 8L9.5 16L16 24.5L22.5 16L16 8Z" />
        </svg>
      )}

      {finalType === "autoparts" && (
        <svg className="h-full w-full text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M14 2H18V10H14V2ZM14 22H18V30H14V22ZM2 14H10V18H2V14ZM22 14H30V18H22V14ZM6.05 4.64L11.7 10.29L8.87 13.12L3.22 7.47L6.05 4.64ZM23.13 21.72L28.78 27.37L25.95 30.2L20.3 24.55L23.13 21.72ZM25.95 4.64L28.78 7.47L23.13 13.12L20.3 10.29L25.95 4.64ZM8.87 21.72L11.7 24.55L6.05 30.2L3.22 27.37L8.87 21.72Z" />
        </svg>
      )}

      {finalType === "greenhaven" && (
        <svg className="h-full w-full text-[#856DF3] fill-current" viewBox="0 0 32 32">
          <path d="M16 3L27 7V16C27 22.5 22 27.5 16 29C10 27.5 5 22.5 5 16V7L16 3ZM16 7L9 9.5V16C9 20.5 12.5 24.2 16 25.4C19.5 24.2 23 20.5 23 16V9.5L16 7Z" />
        </svg>
      )}

      {finalType === "modawear" && (
        <svg className="h-full w-full text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M4 8H9L16 18L23 8H28V24H23V15L17.5 23H14.5L9 15V24H4V8Z" />
        </svg>
      )}

      {finalType === "suncore" && (
        <svg className="h-full w-full text-[#333333] fill-current" viewBox="0 0 32 32">
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <circle cx="24" cy="8" r="3" />
          <circle cx="8" cy="16" r="3" />
          <circle cx="16" cy="16" r="3" />
          <circle cx="24" cy="16" r="3" />
          <circle cx="8" cy="24" r="3" />
          <circle cx="16" cy="24" r="3" />
          <circle cx="24" cy="24" r="3" />
        </svg>
      )}

      {finalType === "quickparts" && (
        <svg className="h-full w-full" viewBox="0 0 32 32">
          <path d="M4 24L10 8H14L8 24H4Z" fill="#856DF3" />
          <path d="M12 24L18 8H22L16 24H12Z" fill="#E55353" />
          <path d="M20 24L26 8H30L24 24H20Z" fill="#E55353" />
        </svg>
      )}

      {finalType === "vitafresh" && (
        <svg className="h-full w-full text-[#333333] fill-current" viewBox="0 0 32 32">
          <path d="M8 8C4.69 8 2 10.69 2 14C2 17.31 4.69 20 8 20C11.31 20 14 17.31 14 14C14 10.69 11.31 8 8 8ZM24 8C20.69 8 18 10.69 18 14C18 17.31 20.69 20 24 20C27.31 20 30 17.31 30 14ZM14 13H18V15H14V13Z" />
        </svg>
      )}

      {(finalType === "smartappliance" || finalType === "styledepot") && (
        <svg className="h-full w-full text-[#856DF3] fill-current" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="4" fill="none" />
          <circle cx="16" cy="16" r="5" fill="currentColor" />
        </svg>
      )}
    </div>
  );
}
