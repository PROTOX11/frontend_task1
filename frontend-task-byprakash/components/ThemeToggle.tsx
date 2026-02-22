// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="
        fixed top-3 right-3 z-50
        p-2 sm:p-3 rounded-full
        bg-white/10 dark:bg-slate-800/30
        backdrop-blur-xl
        border border-white/20 dark:border-slate-700/40
        shadow-lg shadow-black/20 dark:shadow-black/40
        hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30
        active:scale-95
        transition-all duration-300
      "
    >
      {isDark ? (
        <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]" />
      ) : (
        <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-300 drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]" />
      )}
    </button>
  );
}