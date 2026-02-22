"use client";

import { FloatingCard } from "@/components/FloatingCard";
import { Gavel, FileText, CheckSquare, DollarSign } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main
      className="
        min-h-screen 
        bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-indigo-950/70 dark:to-purple-950/50
        text-slate-900 dark:text-white
        transition-colors duration-300
        relative overflow-hidden
      "
    >
      <ThemeToggle />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-8 sm:pt-10 lg:pt-12 pb-16 lg:pb-24">
        {/* Desktop grid layout (unchanged) */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start w-full relative z-10">
          {/* Text */}
          <div className="text-center lg:text-left space-y-1.5 lg:space-y-2 max-w-4xl mx-auto lg:mx-0">
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-bold leading-snug sm:leading-tight
                text-slate-900 dark:text-white
              "
            >
              A single platform to <span className="font-bold">manage</span>{" "}
              every part of your{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                legal work
              </span>
            </h1>

            <p
              className="
                text-sm sm:text-base md:text-lg lg:text-xl
                text-slate-600 dark:text-slate-300
                leading-relaxed mt-2 sm:mt-3
              "
            >
              Track matters, coordinate schedules, manage clients, centralize
              documents, and handle communication — all in one system.
            </p>
          </div>

          {/* Desktop floating cards */}
          <div className="hidden lg:block relative min-h-[620px] w-full">
            {/* Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 dark:opacity-50">
              <div className="absolute -left-40 top-0 w-[700px] h-[700px] bg-blue-400/10 dark:bg-blue-700/12 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute right-0 bottom-10 w-[800px] h-[800px] bg-purple-400/10 dark:bg-purple-700/12 rounded-full blur-3xl animate-pulse-slow delay-3000"></div>
              <div className="absolute left-10 top-1/4 w-[600px] h-[600px] bg-orange-300/8 dark:bg-orange-600/10 rounded-full blur-3xl animate-pulse-slow delay-6000"></div>
            </div>

            <FloatingCard
              color="blue"
              rotation={-15}
              icon={DollarSign}
              label="Billing"
              className="absolute top-[10%] right-[6%] animate-float [--delay:0s]"
            />

            <FloatingCard
              color="orange"
              rotation={10}
              icon={Gavel}
              label="Matters"
              className="absolute top-[28%] left-[8%] animate-float [--delay:1.2s]"
            />

            <FloatingCard
              color="portal"
              rotation={-5}
              variant="portal"
              portalContent={{ name: "John Doe" }}
              className="absolute top-[48%] left-[14%] animate-float [--delay:2.4s]"
            />

            <FloatingCard
              color="dark"
              rotation={12}
              icon={CheckSquare}
              label="Tasks"
              className="absolute bottom-[20%] left-[10%] animate-float [--delay:3.6s]"
            />

            <FloatingCard
              color="dark"
              rotation={-10}
              icon={FileText}
              label="Documents"
              className="absolute bottom-[15%] right-[6%] animate-float [--delay:4.8s]"
            />
          </div>
        </div>
{/* Mobile stacked cards – arranged like reference image */}
<div className="lg:hidden relative flex flex-col items-center gap-0 mt-100 sm:mt-16 px-4">
  {/* Billing - top card */}
  <div className="w-[20%] max-w-[300px] rotate-[-4deg] z-30 -mb-10 shadow-2xl animate-float [--delay:0s]">
    <FloatingCard
      color="blue"
      rotation={-4}
      icon={DollarSign}
      label="Billing"
      className="w-40"
    />
  </div>

  {/* Matters - slightly below & tilted */}
  <div className="w-[40%] max-w-[380px] -mt-14 rotate-[6deg] z-20 -mb-20 shadow-2xl animate-float [--delay:0.8s]">
    <FloatingCard
      color="orange"
      rotation={6}
      icon={Gavel}
      label="Matters"
      className="w-full"
    />
  </div>

  {/* Portal - most prominent, center */}
  <div className="w-[92%] max-w-[400px] -mt-16 rotate-[-3deg] z-40 shadow-2xl animate-float [--delay:1.6s]">
    <FloatingCard
      color="portal"
      rotation={-3}
      variant="portal"
      portalContent={{ name: "John Doe" }}
      className="w-full"
    />
  </div>

  {/* Tasks - below portal */}
  <div className="w-[100%] max-w-[380px] -mt-16 rotate-[5deg] z-20 shadow-2xl animate-float [--delay:2.4s]">
    <FloatingCard
      color="dark"
      rotation={5}
      icon={CheckSquare}
      label="Tasks"
      className="w-40"
    />
  </div>

  {/* Documents - bottom card */}
  <div className="w-[10%] max-w-[380px] -mt-14 rotate-[-5deg] z-10 shadow-2xl animate-float [--delay:3.2s]">
    <FloatingCard
      color="dark"
      rotation={-5}
      icon={FileText}
      label="Documents"
      className="w-40"
    />
  </div>
        </div>
      </div>
    </main>
  );
}
