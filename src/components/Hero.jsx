import Spline from "@splinetool/react-spline";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-neutral-950 dark:to-neutral-900">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent dark:from-neutral-950/80 dark:via-neutral-950/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-start justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          Interactive 3D • Tech-forward • Playful
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          I design and build modern web experiences
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300 text-base sm:text-lg">
          A creative developer crafting delightful interfaces, robust systems, and immersive visuals. Explore my work below and let’s create something remarkable together.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-2.5 text-neutral-900 dark:text-white hover:bg-white/90 dark:hover:bg-white/10 backdrop-blur"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
