"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "./ThemeProvider";

const ORDER: Theme[] = ["light", "dark", "system"];

const ICONS: Record<Theme, React.ComponentType<{ className?: string }>> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

const LABELS: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

/**
 * Accessible theme toggle button.
 *
 * Cycles between `light` → `dark` → `system` on click / Enter / Space.
 * The current selection is reflected in `aria-label` and an `sr-only` label so
 * assistive technologies announce the active theme.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const Icon = ICONS[theme];
  const nextTheme = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Theme: ${LABELS[theme]}. Switch to ${LABELS[nextTheme]}.`}
      title={`Theme: ${LABELS[theme]} (click for ${LABELS[nextTheme]})`}
      className={
        "btn-icon inline-flex items-center justify-center rounded-md p-2 " +
        "hover:bg-slate-100 dark:hover:bg-slate-800 " +
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 " +
        (className ?? "")
      }
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">Current theme: {LABELS[theme]}</span>
    </button>
  );
}
