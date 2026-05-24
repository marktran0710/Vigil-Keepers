import React from "react";

type BrandLogoProps = {
  compact?: boolean;
  showText?: boolean;
  className?: string;
};

export function BrandLogo({
  compact = false,
  showText = true,
  className = "",
}: BrandLogoProps) {
  const size = compact ? "size-12" : "size-16";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        role="img"
        aria-label="樂齡家 logo"
        className={`${size} shrink-0`}
      >
        <path
          d="M60 9 C48 34 24 42 23 70 C22 93 39 108 60 108 C82 108 99 93 98 70 C97 43 72 34 60 9Z"
          fill="#fff7f2"
          stroke="#e5524c"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 67 C34 43 51 48 60 65 C70 48 87 43 98 67"
          fill="none"
          stroke="#e5524c"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M32 88 C48 94 72 94 88 88 C78 105 44 105 32 88Z"
          fill="#f5b6a5"
          opacity="0.9"
        />
        <circle cx="47" cy="67" r="14" fill="#f7dfc8" />
        <path
          d="M35 63 C38 51 51 51 57 60 C51 55 42 56 35 63Z"
          fill="#f8f8f2"
          stroke="#756658"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M39 70 C42 74 47 75 51 70"
          fill="none"
          stroke="#756658"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="43" cy="66" r="1.5" fill="#756658" />
        <circle cx="51" cy="66" r="1.5" fill="#756658" />
        <path d="M36 78 C44 84 52 84 59 78 L59 94 L36 94Z" fill="#b79bd2" />
        <circle cx="73" cy="63" r="16" fill="#f7dfc8" />
        <path
          d="M58 58 C65 44 84 45 92 58 C82 52 70 54 58 58Z"
          fill="#7b6557"
          stroke="#5f4f45"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M66 70 C70 75 77 75 81 70"
          fill="none"
          stroke="#756658"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="68" cy="65" r="1.6" fill="#756658" />
        <circle cx="80" cy="65" r="1.6" fill="#756658" />
        <path d="M58 78 C68 86 82 86 92 78 L94 96 L58 96Z" fill="#a9bd91" />
        <path
          d="M55 79 C61 75 65 73 70 70"
          fill="none"
          stroke="#6f765f"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M86 21 V39 M77 30 H95"
          stroke="#e5524c"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M56 43 C57 39 63 39 64 43 C65 39 71 39 72 43 C73 49 64 53 64 53 C64 53 55 49 56 43Z"
          fill="#ef7f64"
        />
      </svg>

      {showText ? (
        <div>
          <div className="text-xl font-semibold leading-none text-slate-950">
            樂齡家
          </div>
          <div className="mt-1 text-xs text-slate-500">
            Final dignity and care planning
          </div>
        </div>
      ) : null}
    </div>
  );
}
