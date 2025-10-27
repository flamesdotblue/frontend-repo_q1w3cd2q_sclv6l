import { Github, Linkedin, Mail, Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/70 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <Rocket className="h-5 w-5 text-blue-600" />
          <span>My Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#projects" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Projects</a>
          <a href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Contact</a>
          <a href="#about" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-white/10 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-white/5 transition"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-white/10 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-white/5 transition"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-white/10 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-white/5 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
