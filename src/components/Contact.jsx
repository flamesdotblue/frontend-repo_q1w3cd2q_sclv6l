import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-blue-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Let’s build something great
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            I’m currently open to freelance, contract, and full-time opportunities. Drop a line and I’ll get back soon.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:you@example.com"
            className="group rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 text-neutral-900 dark:text-white">
              <div className="rounded-lg bg-blue-600/10 text-blue-700 dark:text-blue-400 p-2">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">you@example.com</p>
              </div>
            </div>
          </a>

          <a
            href="tel:+1234567890"
            className="group rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 text-neutral-900 dark:text-white">
              <div className="rounded-lg bg-blue-600/10 text-blue-700 dark:text-blue-400 p-2">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">+1 (234) 567-890</p>
              </div>
            </div>
          </a>

          <div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-6">
            <p className="font-semibold text-neutral-900 dark:text-white">Socials</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-white/10 px-3 py-1.5 text-sm hover:bg-neutral-50 dark:hover:bg-white/5"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-white/10 px-3 py-1.5 text-sm hover:bg-neutral-50 dark:hover:bg-white/5"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
