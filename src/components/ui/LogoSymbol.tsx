interface LogoSymbolProps {
  className?: string;
  color?: string;
}

export function LogoSymbol({ className, color = "#856DF3" }: LogoSymbolProps) {
  return (
    <svg
      width="32"
      height="38"
      viewBox="0 0 32 38"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.6667 16H32L25.3333 37.3333H12L18.6667 16Z" fill={color} />
      <path d="M6.66667 0H20L13.3333 21.3333H0L6.66667 0Z" fill={color} />
    </svg>
  );
}
