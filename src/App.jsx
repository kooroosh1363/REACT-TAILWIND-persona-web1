import { useEffect, useMemo, useState } from "react";
import { capabilities, categories, profile, projects } from "./data/portfolio";
import { filterProjects, formatProjectCount } from "./lib/project-utils";
import { readTheme, writeTheme } from "./lib/theme";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="max-h-[92vh] w-full max-w-3xl overflow-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-900"
      >
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              {project.category} · {project.year}
            </p>
            <h2 id="project-dialog-title" className="mt-2 font-display text-4xl tracking-tight text-slate-950 dark:text-white">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Close
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Problem</h3>
            <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{project.problem}</p>
          </section>
          <section>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Approach</h3>
            <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{project.approach}</p>
          </section>
        </div>

        <section className="mt-8">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Outcomes</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {project.outcomes.map((item) => (
              <li key={item} className="rounded-2xl bg-slate-100 p-4 text-sm font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-100">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300">
              {item}
            </span>
          ))}
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-300"
        >
          Open repository
        </a>
      </section>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => readTheme());
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    writeTheme(theme);
  }, [theme]);

  const visibleProjects = useMemo(
    () => filterProjects(projects, category, query),
    [category, query]
  );

  const navItems = ["work", "capabilities", "about", "contact"];

  return (
    <main className="min-h-screen bg-stone-100 text-slate-950 transition-colors dark:bg-slate-950 dark:text-white">
      <a href="#content" className="skip-link">Skip to content</a>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-stone-100/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/88">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5">
          <a href="#home" className="flex items-center gap-3 font-bold">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-xs text-white dark:bg-white dark:text-slate-950">PR</span>
            <span>PersonaOS</span>
          </a>

          <nav
            id="primary-navigation"
            aria-label="Primary"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-4 right-4 top-[72px] flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none dark:border-slate-700 dark:bg-slate-900 md:dark:bg-transparent`}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold capitalize text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              className="rounded-full border border-slate-300 px-3 py-2 text-xs font-bold dark:border-slate-700"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((current) => !current)}
              className="rounded-full border border-slate-300 px-3 py-2 text-xs font-bold md:hidden dark:border-slate-700"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <div id="content">
        <section id="home" className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
              Portfolio system · React + Tailwind
            </p>
            <h1 className="mt-5 max-w-5xl font-display text-6xl leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-[7rem]">
              Systems over screenshots.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700 dark:bg-white dark:text-slate-950">
                Explore selected work
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-bold dark:border-slate-700">
                GitHub profile
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Profile snapshot</p>
            <dl className="mt-6 grid gap-4">
              <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                <dt className="text-xs text-slate-500">Name</dt>
                <dd className="mt-1 font-display text-2xl">{profile.name}</dd>
              </div>
              <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                <dt className="text-xs text-slate-500">Role</dt>
                <dd className="mt-1 font-semibold">{profile.role}</dd>
              </div>
              <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                <dt className="text-xs text-slate-500">Location</dt>
                <dd className="mt-1 font-semibold">{profile.location}</dd>
              </div>
              <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                <dt className="text-xs text-slate-500">Engineering mode</dt>
                <dd className="mt-1 font-semibold">Architecture → test → CI → review</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section id="work" className="border-y border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-900/45">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-8 lg:grid-cols-[1fr_.45fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Selected work</p>
                <h2 className="mt-3 font-display text-5xl tracking-[-0.05em] sm:text-6xl">
                  Projects described by the problem they solve.
                </h2>
              </div>
              <p className="text-sm leading-7 text-slate-500">
                Filters and search are driven by structured project metadata. Open any card for a compact case-study view.
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-stone-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Search portfolio</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try RAG, React, testing, automation…"
                  className="mt-2 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 font-display text-2xl outline-none focus:border-emerald-600 dark:border-slate-700"
                />
              </label>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-3 py-2 text-xs font-bold ${category === item ? "border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950" : "border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-300"}`}
                  >
                    {item}
                  </button>
                ))}
                <span className="ml-auto text-xs font-semibold text-slate-500" aria-live="polite">
                  {formatProjectCount(visibleProjects.length)}
                </span>
              </div>
            </div>

            {visibleProjects.length ? (
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {visibleProjects.map((project, index) => (
                  <article key={project.id} className="group flex min-h-[360px] flex-col rounded-3xl border border-slate-200 bg-stone-50 p-5 transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950">
                    <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="mt-8 font-display text-3xl tracking-[-0.04em]">{project.title}</h3>
                    <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">{project.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((item) => (
                        <span key={item} className="rounded-full bg-slate-200/70 px-2.5 py-1 text-[11px] font-semibold dark:bg-slate-800">
                          {item}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="mt-6 text-left text-sm font-bold text-emerald-700 dark:text-emerald-300"
                    >
                      Open case study →
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-3xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
                <h3 className="font-display text-3xl">No matching projects</h3>
                <p className="mt-2 text-slate-500">Clear the search or choose another category.</p>
                <button type="button" onClick={() => { setQuery(""); setCategory("All"); }} className="mt-5 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-7xl px-5 py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Capabilities</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 p-6 dark:border-slate-800">
                <h2 className="font-display text-3xl tracking-[-0.04em]">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-slate-950 py-24 text-white dark:border-slate-800 dark:bg-black">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">About this portfolio</p>
              <h2 className="mt-4 font-display text-5xl tracking-[-0.055em] sm:text-6xl">
                Less “skills list.” More evidence.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                The original site listed technologies as isolated logos. PersonaOS reframes the portfolio around architecture, product decisions, failure boundaries, testing, and shipped repository work.
              </p>
              <p>
                The interface itself follows the same principle: project content lives in structured data, filtering is pure and tested, theme state persists locally, and each case study exposes the problem and engineering approach instead of only a screenshot.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
          <div className="rounded-[2rem] bg-emerald-100 p-8 dark:bg-emerald-950/50">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">Contact</p>
            <h2 className="mt-4 max-w-4xl font-display text-5xl tracking-[-0.055em] sm:text-6xl">
              Start with the work, then start a conversation.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-800/30 px-5 py-3 text-sm font-bold">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <strong className="text-slate-700 dark:text-slate-200">PersonaOS</strong>
          <span>React · Tailwind · Vite · Vitest · GitHub Actions</span>
        </div>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}

export default App;
