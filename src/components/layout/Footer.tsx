import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full mt-10 pt-6 pb-8 border-t border-[#E0E0E0]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#333333]">
      {/* Left Sub-wrapper: Copyright & Policy Links */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 text-[12px] leading-relaxed">
        <span className="font-bold text-[#333333]">
          Copyright © 2025 Peterdraw
        </span>
        <Link
          href="/privacy"
          className="text-[#757575] hover:text-[#333333] transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="text-[#757575] hover:text-[#333333] transition-colors"
        >
          Term and conditions
        </Link>
        <Link
          href="/contact"
          className="text-[#757575] hover:text-[#333333] transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Right Social Icons Container (Figma: Facebook, X, Instagram, YouTube, LinkedIn) */}
      <div className="flex items-center gap-3 text-[#757575]">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-7 w-7 flex items-center justify-center text-[#333333] hover:text-[#856DF3] transition-colors"
          aria-label="Facebook"
        >
          <svg
            className="h-4 w-4 stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14 9h-2a1 1 0 0 0-1 1v2H9.5v2.5H11V20h2.5v-5.5h2l.5-2.5h-2.5v-1.5a.5.5 0 0 1 .5-.5h1V9z" fill="currentColor" stroke="none" />
          </svg>
        </a>

        {/* X / Twitter */}
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-7 w-7 flex items-center justify-center text-[#333333] hover:text-[#856DF3] transition-colors"
          aria-label="X"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-7 w-7 flex items-center justify-center text-[#333333] hover:text-[#856DF3] transition-colors"
          aria-label="Instagram"
        >
          <svg
            className="h-4.5 w-4.5 stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-7 w-7 flex items-center justify-center text-[#333333] hover:text-[#856DF3] transition-colors"
          aria-label="YouTube"
        >
          <svg
            className="h-4.5 w-4.5 stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="4" ry="4" />
            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-7 w-7 flex items-center justify-center text-[#333333] hover:text-[#856DF3] transition-colors"
          aria-label="LinkedIn"
        >
          <svg
            className="h-4.5 w-4.5 stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="4" ry="4" />
            <line x1="8" y1="11" x2="8" y2="17" />
            <line x1="8" y1="8" x2="8.01" y2="8" />
            <line x1="12" y1="17" x2="12" y2="11" />
            <path d="M16 17v-3.5a2.5 2.5 0 0 0-5 0V17" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
