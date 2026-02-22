"use client";

import { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  color: "blue" | "orange" | "dark" | "portal";
  rotation: number;
  icon?: LucideIcon;
  label?: string;
  variant?: "default" | "portal";
  portalContent?: {
    name: string;
    role?: string;
  };
  delay?: number;
  className?: string;
}

export function FloatingCard({
  color,
  rotation,
  icon: Icon,
  label,
  variant = "default",
  portalContent,
  delay = 0,
  className = "",
}: FloatingCardProps) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-600 text-white shadow-blue-500/30",
    orange: "bg-orange-500 text-white shadow-orange-500/30",
    dark: "bg-slate-800 text-white shadow-slate-900/40",
    portal: "bg-indigo-500 text-white shadow-indigo-500/30",
  };

  const baseDefaultClasses =
    "absolute rounded-full px-6 py-3 lg:px-9 lg:py-4 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-float";

  const basePortalClasses =
    "absolute rounded-2xl px-5 py-4 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-float min-w-[260px] lg:min-w-[300px]";

  const baseClasses = variant === "portal" ? basePortalClasses : baseDefaultClasses;

  const cardStyle: React.CSSProperties = {
    transform: `rotate(${rotation}deg)`,
    "--tw-rotate": `${rotation}deg`,
    animationDelay: `${delay}ms`,
  };

  if (variant === "portal" && portalContent) {
    return (
      <div
        className={`${baseClasses} ${colorClasses[color]} ${className} flex items-center gap-3`}
        style={cardStyle}
      >
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-base shrink-0">
          {portalContent.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>

        {/* Content */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-base truncate">
              {portalContent.name}
            </h3>
            <span className="text-xs opacity-80">· Portal</span>
          </div>
          <p className="text-xs opacity-90 mt-0.5 leading-tight">
            Hey! Could you please review a document for me?
          </p>
        </div>
      </div>
    );
  }

  // Normal pill cards
  return (
    <div
      className={`${baseClasses} ${colorClasses[color]} ${className}`}
      style={cardStyle}
    >
      <div className="flex items-center gap-2.5">
        {Icon && <Icon className="w-6 h-6" />}
        <span className="font-semibold text-base lg:text-lg whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
}