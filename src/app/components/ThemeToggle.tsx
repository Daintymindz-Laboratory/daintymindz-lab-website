"use client";

import type { Theme } from "../hooks/useTheme";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
  compact?: boolean;
};

export default function ThemeToggle({
  theme,
  onToggle,
  compact = false,
}: ThemeToggleProps) {
  const nextTheme = theme === "dark" ? "light" : "dark";
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`group inline-flex items-center justify-center gap-3 rounded-full border border-foreground/10 surface-panel px-3 py-2 text-foreground transition-all duration-300 hover:border-amber/30 hover:text-amber ${
        compact ? "w-full" : ""
      }`}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <span className="relative flex h-8 w-14 items-center rounded-full bg-foreground/8 p-1 transition-colors duration-300">
        <span
          className={`absolute h-6 w-6 rounded-full bg-amber transition-transform duration-300 ${
            isDark ? "translate-x-0" : "translate-x-6"
          }`}
        />
        <svg
          className="relative z-10 h-4 w-4 text-graphite-deep"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 1.5v3M12 19.5v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1.5 12h3M19.5 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        </svg>
        <svg
          className="relative z-10 ml-auto h-4 w-4 text-graphite-deep"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M21 12.79A9 9 0 1111.21 3c-.03.26-.04.53-.04.79A9 9 0 0021 12.79z" />
        </svg>
      </span>
      <span className={`font-body text-[11px] font-semibold tracking-[0.22em] uppercase ${compact ? "text-center" : "hidden lg:inline"}`}>
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
}