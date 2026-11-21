import React from "react";
import Image from "next/image";

interface MauriLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function MauriLogo({
  className = "",
  size = 44,
  showText = true,
}: MauriLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Mauri Technologies Logo Image */}
      <div
        className="relative shrink-0 rounded-full overflow-hidden transition-transform duration-300 hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.png"
          alt="Mauri Technologies Logo"
          width={size}
          height={size}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-black tracking-tight text-[#002266]">
              MAURI
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/15 text-[#C2671A] tracking-wider uppercase">
              Nepal
            </span>
          </div>
          <span className="text-[10px] font-bold tracking-[0.26em] uppercase text-[#002266]/80 mt-1">
            Technologies
          </span>
        </div>
      )}
    </div>
  );
}
