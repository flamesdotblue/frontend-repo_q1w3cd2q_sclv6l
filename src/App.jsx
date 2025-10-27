import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
        <footer id="about" className="border-t border-neutral-200 dark:border-white/10 py-10 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p>
              Built with care — interactive 3D, modern UI, and a love for the craft.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
