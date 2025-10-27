import { Code, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "Interactive 3D Portfolio",
    description:
      "A playful, performant 3D-powered portfolio experience with real-time interactions and smooth animations.",
    tags: ["React", "Spline", "Tailwind"],
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Modular analytics dashboard with charts, role-based access, and responsive components.",
    tags: ["React", "FastAPI", "Charts"],
    link: "#",
  },
  {
    title: "Design System",
    description:
      "A cohesive UI kit with tokens, theming, and accessible components built from the ground up.",
    tags: ["Design", "Accessibility", "Storybook"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Selected Projects
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              A snapshot of work that blends thoughtful design with reliable engineering.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <Star className="h-4 w-4 text-yellow-500" />
            Curated highlights
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <Code className="h-4 w-4" />
                  <span>{p.tags.join(" • ")}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {p.description}
                </p>
                <a
                  href={p.link}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View case study
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-50/60 to-transparent dark:from-blue-500/5" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
