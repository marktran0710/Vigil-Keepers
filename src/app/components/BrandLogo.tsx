import React from "react";

type BrandLogoProps = {
  compact?: boolean;
  showText?: boolean;
  className?: string;
};

const BRAND_NAME = "\u6a02\u9f61\u5bb6";

export function BrandLogo({
  compact = false,
  showText = false,
  className = "",
}: BrandLogoProps) {
  const size = compact ? "w-24 sm:w-28" : "w-36";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.jpg"
        alt={`${BRAND_NAME} logo`}
        className={`${size} h-auto shrink-0`}
        width="603"
        height="559"
      />

      {showText ? (
        <div>
          <div className="text-xl font-semibold leading-none text-slate-950">
            {BRAND_NAME}
          </div>
          <div className="mt-1 text-xs text-slate-500">
            Final dignity and care planning
          </div>
        </div>
      ) : null}
    </div>
  );
}
